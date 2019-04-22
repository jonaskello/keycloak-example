import express from "express";
import Keycloak from "keycloak-connect";

const app = express();
const port = 3001;

const keycloak = new Keycloak(
  {},
  {
    realm: "MyDemo",
    "auth-server-url": "http://localhost:8080/auth",
    "ssl-required": "external",
    resource: "my-react-client",
    "public-client": true,
    "confidential-port": 0,
  }
);

app.use(keycloak.middleware());

app.get("/api/hello-public", (_req, res) => res.send("Hello Public World!"));
app.get("/api/hello-secure", keycloak.protect(), (_req, res) => res.send("Hello Secure World!"));

app.listen(port, () => console.log(`Server started on port ${port}!`));
