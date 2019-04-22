# keycloak-example

Keycloak example with both client and server in typescript

## Description

This example uses the keycloak npm packages:

- [`keycloak-js`](https://www.npmjs.com/package/keycloak-js) for the client-side ([docs](https://www.keycloak.org/docs/2.5/securing_apps/topics/oidc/javascript-adapter.html)).
- [`keycloak-connect`](https://www.npmjs.com/package/keycloak-connect) for the server-side ([docs](https://www.keycloak.org/docs/2.5/securing_apps/topics/oidc/nodejs-adapter.html)).

## How to start

### Start and setup Keycloak

First start a keycloak server:

```
$ docker run --name keycloak -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e DB_VENDOR=H2 -d jboss/keycloak
```

This will start the keycloak server at http://localhost:8080. Login and do the following:

- Create realm called `mydemo`
- Create client called `my-react-client` with root url `http://localhost:3000`.
- Create a user `john` with password `john`.

### Start the example application

```bash
$ yarn # install
$ yarn start # start
```

The above will start the application server at http://localhost:3000.

Open the example application in the browser and press the secure link, login as `john`.
