const express = require("express");
const app = express();

app.use("/test", (req, res) => {
    res.send("server is connected to wedpage");
});

app.use("/home", (req, res) => {
    res.send("server is connected to wedpage home");
});
app.use((req, res) => {
    res.send("server is connected to main");
});
app.listen(2000,() => {
    console.log("Server is Created with port number 2000...");
});
