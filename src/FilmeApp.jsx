import { useEffect, useState } from "react"
import SearchIcon from './search.svg'
import Moviecard from "./MovieCard"

import './MovieApp.css'

const API_URL = 'http://www.omdbapi.com?apikey=c0fd948b'

function App() {

// API KEY : c0fd948b

const [movies, setMovies] = useState([])
const [searchBar, setSearchBar] = useState('')


const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
  const data = await response.json()
  setMovies(data.Search)
  console.log(data.Search)
}

useEffect(() =>{
    searchMovies('Superman')
}, [])





  return (
    <div className="app">
        <h1>Movie City</h1>

    <div className="search">
      <input type="text" 
            placeholder="Search for movies" 
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
      />
      <img src={SearchIcon} 
      alt="search icon"
      onClick={() => searchMovies(searchBar)} 
      />
    </div>

    {movies?.length > 0 
      ? (<div className="container">
         {movies.map((movie) => (
          <Moviecard movie={movie} />
         ) )}
          </div>
        ) : 
        (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
    }

    


    </div>
    
  )
}

export default App
