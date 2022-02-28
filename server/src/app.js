console.log('hello there');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const PORT = 8000;
// const { Client, Pool } = require('pg');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  });
});
// implement your gbooks functionality and route(s) here!
app.listen(process.env.PORT || 8080);
// app.listen(PORT);

console.log("Listening on port:", PORT);
