const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome from home-container");
});

app.listen(process.env.PORT, () => {
    console.log("Listening...");
});