const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("static"));

app.get("/", (req, res) => {
    console.log(req.ip, "(", req.url, ")");
    res.sendFile(path.join(__dirname, "html/index.html"));
});

app.listen(port, () => {
    console.log(`Listening port ${ port }...`);
});