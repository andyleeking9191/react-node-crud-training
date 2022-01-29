import React, { useState } from 'react';
import './App.css';


function App() {

  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');

  const movieNameHandler = (e) => {
    setMovieName(e.target.value)
  }

  const movieReviewHandler = (e) => {
    setMovieReview(e.target.value)
  }

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  return response.json(); s
}






  return (
    <form className="form">
      <h1>CRUD OPERATIONS</h1>
      <label htmlFor="movieName">Movie Name</label>
      <input onChange={movieNameHandler} className="form__input" type="text" name="movieName"></input>
      <label htmlFor="movieReview">Review</label>
      <input onChange={movieReviewHandler} className="form__input" type="text" name="movieReview"></input>
      <button onClick={(event) => {
        event.preventDefault()
        postData('http://localhost:3001/api/insert', {movieName: movieName,movieReview: movieReview})
  .then(data => {
    console.log(data); 
  });
      }}>Submit</button>
    </form>
  );
}

export default App;
