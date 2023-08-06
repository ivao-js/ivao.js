import axios, { Method } from 'axios';
import { userClient } from '../index';
import { join } from 'path';
import fs, { PathLike } from 'fs';
import * as request from 'superagent';
import { Token } from 'simple-oauth2';

export const apiRequest = async<T>(path: string, defaultValue: T, method: Method = 'GET', params?: {}, body?: {}): Promise<T> => {
    let token: Token;

    if(userClient.options.type === 'oauth2') {
        token = (await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] })).token;

        if(!token) {
            console.log('Error fetching token');

            return defaultValue;
        }
    }

    const fullUrl = `https://api.ivao.aero/${path}`;

    return axios.request<T>({
        method,
        url: fullUrl,
        params: params ?? {},
        data: body ?? {},
        headers: { 
            ...(userClient.options.type === 'apiKey' ? {
                'apiKey': userClient.options.apiKey
            } : {
                Authorization: `Bearer ${token.access_token}`
            })
        },
    }).then(({ data }) => data).catch((error) => {
        if(!error.response || error.response.status !== 404) console.log(`Error fetching ${fullUrl}: ${error.message}`);
        
        return defaultValue;
    });
}

export const apiDownload = async(URLPath: string, DOCPath: PathLike, defaultValue: any, fileName: string): Promise<void> => {
    let token: Token;

    if(userClient.options.type === 'oauth2') {
        token = (await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] })).token;

        if(!token) {
            console.log('Error fetching token');

            return defaultValue;
        }
    }

    const fullUrl = `https://api.ivao.aero/${URLPath}`;

    try {
        request
            .get(fullUrl)
            .set({
                ...(userClient.options.type === 'apiKey' ? {
                    'apiKey': userClient.options.apiKey
                } : {
                    Authorization: `Bearer ${token.access_token}`
                })
            })
            .pipe(fs.createWriteStream(join(`${DOCPath}/${fileName}.zip`)))
            .on('finish', () => {
                return console.log(`${fileName}.zip was download in ${DOCPath}`);
            });
    } catch(err) {
        console.error(err);

        return defaultValue;
    }
}