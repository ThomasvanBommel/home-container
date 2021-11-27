import express from "express";
import path from "path";
import api from "./api";

const port: number = parseInt(process.env.PORT || "8080");
const app = express();

// log each request
app.use((req, res, next) => {
    console.log(req.ip, "(", req.url, ")");
    next();
});

// serve static files
app.use(express.static(path.join(__dirname, "../static")));

// serve homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
});

// serve api backend
app.get("/api/:cmd", (req, res) => {
    res.send(api[req.params.cmd in api ? req.params.cmd : "default"](req, res));
});

// listen for requests
app.listen(port, () => {
    console.log(`Listening on port ${ port }...`)
});