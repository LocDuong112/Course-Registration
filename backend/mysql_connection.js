const express = require('express')
const cors = require('cors')
var mysql = require('mysql2');

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
  res.send("Hello World!")
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : 'studentcourse'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

