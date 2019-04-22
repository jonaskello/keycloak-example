# keycloak-example

Keycloak example with both client and server in typescript

## How to start

First start a keycloak server:

```
$ docker run --name keycloak -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e DB_VENDOR=H2 -d jboss/keycloak
```

This will start the keycloak server at http://localhost:8080. Login and do the following:

- Create realm called `mydemo`
- Create client called `my-react-client` with root url `http://localhost:3000`.

```bash
$ yarn # install
$ yarn start # start
```

The above will start the server at http://localhost:3000.
