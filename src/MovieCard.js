import React from 'react'
import './MovieCard.css';

const MovieCard = (props) => {
  const API_IMG = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='card'>
    <div className='container'>
    <div className='poster'>
    <img src= { props.poster_path? `${API_IMG}${props.poster_path}`: `https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60`} alt=''/>
    </div>
    <div className='info'>
      <p className='title'>{props.title}</p>
      <p className='vote'>{props.vote_average}</p>
    </div>
    <div className="overview">
      <h2>Overview:</h2>
      <h3 className='h3'>{props.overview}</h3>
      </div>
    </div>
      
    </div>
  )
}

export default MovieCard
