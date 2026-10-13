// console.log("Hello from Node.js!");
// console.log("1 + 2 =", 1 + 2);
// const {
//     sum: jodo,
//     subtract: minus,
//     multiply,
// } = require("./math/airthmaticops");
// import{
//     sum as jodo,
//     subtract as minus,
//     multiply,
// } from "./math/airthmaticops.js";

// console.log(jodo(1,2));
// console.log(minus(1,2));
// console.log(multiply(1,2));
import express from "express";

const app = express();
//a route: when someone visits "/", send back text
app.get("/", (req, res) =>{
    res.send("Hello World");
});

// start listening on port 3000
app.listen(3000, () =>{
    console.log("Server is running on http://localhost:3000");
}); 
// e.g. /api/add?a=7&b=5
// app.get("/api/add",(req, res) => {
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);
//     res.json({ a, b, sum: a + b});
// });