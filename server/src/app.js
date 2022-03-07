const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const {sequelize} = require('./models')
const PORT = 8000;
// const { Client, Pool } = require('pg');
const config = require('../config/config')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8000);
    console.log('Server started on port ${config.port}')

  })
// // implement your gbooks functionality and route(s) here!
// app.listen(process.env.PORT || 8000);
// // app.listen(PORT);

console.log("Listening on port:", PORT)


