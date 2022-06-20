const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

//
// GET
app.get("/api", (req, res) => {
  res.json({"response" : "GET request sent"});
});

//
// POST
app.post("/api", (req, res) => {
  res.json({"response" : "POST request sent"});
});


//
// Server Listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
