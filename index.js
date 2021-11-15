const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html/index.html"));
});

app.listen(process.env.PORT | 8000, () => {
    console.log("Listening...");
});