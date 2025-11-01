import React, {useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard'

const API_KEY = 'a10b2c63c3d21ee6d9f82980d47a6589'
const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

const Upcoming = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(upcomingMoviesURL)
        const data = await response.json()
        setMovies(data.results || [])
      } catch (error) {
        console.error('Error fetching Upcoming movies:', error)
      }
    }

    fetchUpcomingMovies()
  }, [])

  return (
    <div className="upcoming-container">
      <h1>Upcoming</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Upcoming
