import { useState } from 'react';
import moviesData from './MovieData';
import './App.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import FilterMovie from './FilterMovie';
import { Route, Routes } from "react-router-dom";
import Trailer from './Trailer';


function App() {

const [movies,SetMovies]=useState(moviesData)
const[input,SetInput]=useState("")

const addnewMovie= (newMovie)=> {
  SetMovies([...movies,newMovie])
}

  return (
    <div className="App">
      <header className='App-header'>
        <h2>Streaming live°موقع أمين للأفلام</h2>
        <h2>TOP 6 FILMS</h2>
        <FilterMovie SetInput={SetInput}/>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<MovieList movies={movies} input={input}/>} />
          <Route path='/Trailer/:IdMovie' element={<Trailer/>}/>
      </Routes>
      <AddMovie addnewMovie={addnewMovie}/>
    </section>
    </div>
  );
}

export default App;
