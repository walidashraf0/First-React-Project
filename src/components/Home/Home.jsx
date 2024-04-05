import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'

export default function Home() {

  const [trendingMovies, settrendingMovies] = useState([]);
  const [loading, setloading] = useState(true);

  async function getTrending() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a1741ea6afc5c3f3e0ec4981ac49a894`);
    settrendingMovies(data.results);
    setloading(false);
  }

  useEffect(() => {
    getTrending();
  }, []);

  return <>
    <h1 className="text-center bg-info mb-5">
      <i className="fas fa-home"></i>
      Home Component
    </h1>
    <h2 style={{ backgroundColor: 'teal', textAlign: 'center' }}>Movies</h2>
    {loading === true ? (
      <div className='position-fixed bg-dark text-white vh-100 w-100 d-flex justify-content-center align-items-center'>
        <i className='fas fa-spinner fa-spin fa-5x'></i>
      </div>
    ) : (
      <div>
        <div className="container">
          <div className="row">
            {trendingMovies.map((movie) => (
              <div key={movie.id} className='col-md-3'>
                <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                <h2 className={`${Style.test} h5`}>{movie.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
}
