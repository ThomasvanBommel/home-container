import express from "express";
import path from "path";
import api from "./api";

const project_dir: string = path.join(__dirname, "../../");
const port: number = parseInt(process.env.PORT || "8080");
const app: express.Express = express();

// log each request
app.use((req, res, next) => {
    console.log(req.ip, "(", req.url, ")");
    next();
});

// serve static files
app.use(express.static(path.join(project_dir, "static")));
app.use(express.static(path.join(project_dir, "build/css")));

// serve homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(project_dir, "views/home.html"));
});

// serve api backend
app.get("/api/:cmd", (req, res) => {
    res.send(api[req.params.cmd in api ? req.params.cmd : "default"](req, res));
});

// listen for requests
app.listen(port, () => {
    console.log(`Listening on port ${ port }...`)
});