# NetSuite React Embedded SuiteLet - Starter

> An example NetSuite SuiteLet built with React, TypeScript and Webpack.

## React Client

### Development

The React Client uses a [dev server](https://github.com/SuavecitoInc/netsuite-proxy-dev-server) to proxy requests to a NetSuite RESTLet in development. Update the endpoint at `/app/src/lib/const.ts`. For production update the endpoint with the RESTLet's url and build. Dev server available endpoints found [here](./netsuite/README.md).

```typescript
// production endpoint should look like this
export const endpoint = '/app/site/hosting/restlet.nl?script=12345&deploy=1';
// development endpoint should look like this, the dev server will authenticate and proxy requests to the restlet
export const endpoint = 'http://localhost:3001/some-endpoint';

```

```bash
cd app
# dev
npm run dev
# build
npm run build
```

## NetSuite SuiteScript

[Setup](./netsuite/README.md)

Build scripts.

```bash
npm run build
```