import './App.css';

function App() {
  return (
    <form className="form">
      <h1>CRUD OPERATIONS</h1>
        <label htmlFor="movieName">Movie Name</label>
        <input className="form__input" type="text" name="movieName"></input>
        <label htmlFor="movieReview">Review</label>
        <input className="form__input" type="text" name="movieReview"></input>
        <button onClick={(event)=> {
          event.preventDefault()
        }}>Submit</button>
    </form>
  );
}

export default App;
