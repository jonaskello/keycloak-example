import express from "express";
import Keycloak from "keycloak-connect";

const app = express();
const port = 3001;

const keycloak = new Keycloak({});
console.log("keycloak", keycloak);

app.get("/api/hello-public", (_req, res) => res.send("Hello Public World!"));
app.get("/api/hello-secure", (_req, res) => res.send("Hello Secure World!"));

app.listen(port, () => console.log(`Server started on port ${port}!`));
