const express = require('express')
require ('dotenv').config()
const { join } = require('path');
const app = express();
const router = require('./app/routers/router')

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static(join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })