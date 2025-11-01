import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = 'a10b2c63c3d21ee6d9f82980d47a6589'
const topRatedMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

const TopRated = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(topRatedMoviesURL)
        const data = await response.json()
        setMovies(data.results || [])
      } catch (error) {
        console.error('Error fetching Top Rated movies:', error)
      }
    }

    fetchTopRatedMovies()
  }, [])

  return (
    <div className="top-rated-container">
      <h1>Top Rated</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default TopRated
