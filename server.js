const express = require("express");
const cors = require("cors");
const app = express();

//import the routes
const appointmentRoutes = require('./routes/appointments');

app.use(todappointmentRoutesoRoutes);
app.use(express.json());
app.use(cors());


const host = '127.0.0.1';
const port = 8081;

app.listen(port, function () {
  console.log("Example app listening at http://%s:%s", host, port)
})