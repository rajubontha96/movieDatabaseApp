import React, {useState} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = 'a10b2c63c3d21ee6d9f82980d47a6589'

const Search = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const handleSearch = async () => {
    if (query.trim() === '') return
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
      )
      const data = await response.json()
      setMovies(data.results || [])
    } catch (error) {
      console.error('Error searching movies:', error)
    }
  }

  return (
    <div className="search-container">
      <h1>Search</h1>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search Movies"
          value={query}
          onChange={e => setQuery(e.target.value)}
          role="textbox"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search
