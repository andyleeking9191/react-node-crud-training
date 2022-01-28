require('dotenv').config()
const { response } = require('express');
const express = require('express');
const app = express();
const port = 3001;



const knex = require('knex')({
    client: 'pg',
    version: '12.9',
    connection: {
      host : `${process.env.HOST}`,
      port : `${process.env.PORT}`,
      user : `${process.env.DATABASE_USER}`,
      password : `${process.env.DATABASE_PASSWORD}`,
      database : `${process.env.DATABASE}`
    }
  });



let movies = [];

app.get('/users', (req, res) => {
  knex.select('*').from('movie_review').then(data => {
    res.send(data)
  })
})

app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}...`)
})