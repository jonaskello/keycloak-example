import express from "express";
const app = express();
const port = 3001;

app.get("/api", (_req, res) => res.send("Hello World!"));
app.get("/api/olle", (_req, res) => res.send("Hello olle!"));

app.listen(port, () => console.log(`Server started on port ${port}!`));
