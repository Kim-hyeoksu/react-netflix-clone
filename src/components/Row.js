import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
export default function Row({ isLargeRow, title, id, fetchUrl}) {
  const BASE_URL = `https://image.tmdb.org/t/p/original/`
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    fetchMovieData()
  }, [fetchUrl])
  
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
    console.log(movies)

    return request
  }
  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span className='arrow' onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth - 80
          }}>
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow' onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth - 80
          }}>
            {">"}
          </span>
        </div>
      </div>
    </section>
  )
}
