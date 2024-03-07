const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')
const morgan = require('morgan')
dotenv.config();
const connectToDatabase = require('./config/Db');
connectToDatabase();
app.use(cors())
app.use(express.json())
app.use(morgan('dev')) // for logging

app.get('/', (req, res) => {
  const url = req.protocol + '://' + req.get('host');
  res.send('La URL de este servidor es: ' + url);
});

app.use('/api/v1', require('./routes/creditCard'))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running!`, process.env.PORT);

});
