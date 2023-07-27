import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import MovieModal from './MovieModal'
export default function Row({ isLargeRow, title, id, fetchUrl}) {
  const BASE_URL = `https://image.tmdb.org/t/p/original/`
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  useEffect(()=>{
    fetchMovieData()
  }, [fetchUrl])
  
  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
    console.log(request)

    return request
  }

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
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
              onClick={()=>handleClick(movie)}
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
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
      )}
    </section>
  )
}
