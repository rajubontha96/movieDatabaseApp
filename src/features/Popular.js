import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = 'a10b2c63c3d21ee6d9f82980d47a6589'
const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

const Popular = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(POPULAR_API)
        const data = await response.json()
        setMovies(data.results || [])
      } catch (error) {
        console.error('Error fetching popular movies:', error)
      }
    }

    fetchPopularMovies()
  }, [])

  return (
    <div>
      <h1>Popular</h1>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Popular
