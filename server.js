const express = require("express");
const cors = require("cors");
const app = express();

//import the routes
const appointmentRoutes = require('./routes/appointments');

app.use(cors());
app.use(appointmentRoutes);
app.use(express.json());

const host = 'localhost';
const port = 8081;

app.listen(port, function () {
  console.log("Example app listening at http://%s:%s", host, port)
})