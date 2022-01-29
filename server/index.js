require('dotenv').config()
const { response } = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
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
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/api/insert', (req, res) => {
  const movieName = req.body.movieName
  const movieReview = req.body.movieReview
  knex('movie_review').insert({movie_name: movieName, movie_review: movieReview})
      .then( function (result) {
          res.json({ success: true, message: 'ok' });     // respond back to request
       })
})


app.get('/users', (req, res) => {
  knex.select('*').from('movie_review').then(data => {
    res.send(data)
  })
})



app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}...`)
})