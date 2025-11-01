import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const API_KEY = 'a10b2c63c3d21ee6d9f82980d47a6589'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
        )
        const data = await res.json()
        setMovie(data)
      } catch (err) {
        console.error('Error fetching movie details:', err)
      }
    }

    const fetchMovieCast = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
        )
        const data = await res.json()
        setCast(data.cast || [])
      } catch (err) {
        console.error('Error fetching movie cast:', err)
      }
    }

    fetchMovieDetails()
    fetchMovieCast()
  }, [id])

  if (!movie) {
    return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Loading...</h2>
  }

  return (
    <div style={{padding: '30px'}}>
      {/* ✅ Movie Details Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          style={{width: '300px', borderRadius: '10px'}}
        />
        <div style={{maxWidth: '600px'}}>
          <h1>{movie.title}</h1>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Duration:</strong> {movie.runtime} mins
          </p>
          <p>
            <strong>Genres:</strong>{' '}
            {movie.genres && movie.genres.map(g => g.name).join(', ')}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
        </div>
      </div>

      {/* ✅ Cast Section */}
      <div style={{marginTop: '40px'}}>
        <h2>Cast</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {cast.map(actor => (
            <div
              key={actor.cast_id}
              style={{
                width: '150px',
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_URL}${actor.profile_path}`
                    : 'https://via.placeholder.com/150'
                }
                alt={actor.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
              <p>
                <strong>{actor.original_name}</strong>
              </p>
              <p style={{fontSize: '14px', color: '#555'}}>
                as {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
