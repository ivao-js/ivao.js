import axios, { Method } from 'axios';
import { userClient } from '../index';

export const apiRequest = async<T>(path: string, defaultValue: T, method: Method = 'GET', params?: {}, body?: {}): Promise<T> => {
    const { token } = await userClient.oauth2.getToken({ scope: ['tracker', 'profile', 'training', 'configuration'] });

    if(!token) {
        console.log('Error fetching token');

        return defaultValue;
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