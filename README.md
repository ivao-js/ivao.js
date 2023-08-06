# IVAO.js

Ivao.js is a module that incorporates the entire [IVAO api](https://api.ivao.aero). This module can be used with an api key and with the new oauth2 system.

```text
NOTE: Versions below 1.9.0 do not work!
```

## Installation

Install my-project with npm

```bash
  npm install ivao.js
  cd my-project
```

## OAuth 2.0

To obtain access to the new oauth system, please follow the [HQ documentation](https://wiki.ivao.aero/en/home/devops/api/oauth-request).

## Usage/Examples


With APIKey:
```typescript
import { Client } from 'ivao.js/lib';

const client = new Client({
    type: 'apiKey',
    apiKey: 'YOUR_API_KEY'
});
```
With OAuth2.0:
```typescript
import { Client } from 'ivao.js/lib';

const client = new Client({
    type: 'oauth2',
    client_id: 'YOUR_CLIENT_ID',
    secret_id: 'YOUR_SECRET_ID'
});
```



## Roadmap

- Add more routes


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[GPL-2.0](https://github.com/ivao-js/ivao.js/blob/master/LICENSE)


## Authors

- [@jules010209](https://www.github.com/jules010209)
- [@Zathiel](https://github.com/Zathiel)

