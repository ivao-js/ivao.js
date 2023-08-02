"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userClient = exports.Client = void 0;
var index_1 = require("./utils/index");
var simple_oauth2_1 = require("simple-oauth2");
var userClient;
exports.userClient = userClient;
var Client = /** @class */ (function () {
    function Client(options) {
        this.options = options;
        this.data = new index_1.data();
        if (options.type === 'oauth2') {
            this.oauth2 = new simple_oauth2_1.ClientCredentials({
                client: {
                    id: options.client_id,
                    secret: options.secret_id,
                },
                auth: {
                    tokenHost: "https://api.ivao.aero",
                    tokenPath: '/v2/oauth/token',
                    revokePath: '/v2/oauth/token/revoke',
                },
                options: {
                    bodyFormat: 'json',
                }
            });
        }
        exports.userClient = userClient = this;
    }
    ;
    return Client;
}());
exports.Client = Client;
