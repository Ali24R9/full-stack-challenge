'use strict';

const express = require('express');
const app     = express();
const PORT    = 8000;
const { Client, Pool } = require('pg');

// implement your gbooks functionality and route(s) here!
const bookList = getBookList();
app.get('/books',(req,res)=>{
  return res.status(200).send({
    success: 'true',
    message: 'books',
    books: bookList
    console.log('booklist')
  })
})
app.listen(PORT);

console.log("Listening on port:", PORT);
