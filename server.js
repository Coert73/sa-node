const express = require("express");
const cors = require("cors");
const app = express();

//import the routes
const todoRoutes = require('./routes/appointments');

app.use(todoRoutes);
app.use(express.json());
app.use(cors());


const host = '127.0.0.1';
const port = 8081;

var server = app.listen(port, function () {
  console.log("Example app listening at http://%s:%s", host, port)
})