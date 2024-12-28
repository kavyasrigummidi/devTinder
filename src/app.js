const express = require("express");
const app = express();
app.get("/user", (req,res) => {
    res.send("hello Hello!");
});

app.post("/user", (req,res) => {
    res.send("hello Hello Kavya!");
});

app.delete("/user", (req,res) => {
    res.send("deleted successfully!");
});
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
