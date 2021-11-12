const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.send(res.sendFile(path.join(__dirname, "html/index.html")));
});

app.listen(process.env.PORT, () => {
    console.log("Listening...");
});