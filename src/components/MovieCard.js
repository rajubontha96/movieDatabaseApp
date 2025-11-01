import React from 'react'

const MovieCard = ({movie}) => {
  if (!movie) return null

  const {poster_path, title, vote_average} = movie
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image'

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{vote_average}</p>
      <button type="button">View Details</button>
    </div>
  )
}

export default MovieCard
