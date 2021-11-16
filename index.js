const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

// Log request middleware
app.use((req, res, next) => {
    console.log(req.ip, "(", req.url, ")");
    next();
});

// Serve static files middleware
app.use(express.static("static"));

// Serve homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html/index.html"));
});

// Start listening
app.listen(port, () => {
    console.log(`Listening port ${ port }...`);
});