import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    console.log(movies);
  return (
    <div className='movie-card-title' >
                   <h1 className='movie-title'>{title}</h1> 

        <div className='movie-cards-container'>

        <div className='movie-cards'>
        {movies?.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
         </div>
        </div>


    </div>
  );
};

export default MovieList;
