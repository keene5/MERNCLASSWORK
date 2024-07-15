const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mainController = require('./controllers');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use('/', mainController);


const port = 8081;
app.listen(port, () => {
    console.log("listening on port " +port);
});




