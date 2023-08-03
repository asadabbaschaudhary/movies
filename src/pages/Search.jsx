import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const q = searchParams.get("q");
  const [isLoding, setIsLoading] = useState(false);

  console.log(q);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3001/search?q=${q}`).then((res) => {
      if (res.data.status == true) {
        setMovies(res.data.movies);
        setIsLoading(false);
      }
    }).catch(err => { setIsLoading(false); console.log(err.message) })
  }, [searchParams]);

  return (
    (isLoding) ? <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> : (movies.length > 0) ? <div>
      {movies.map((movie) => {
        return (<>
          <div style={{ backgroundColor: "#000", padding: "20px", margin: "10px" }}>
            <h1 className="setting">{movie.name}</h1>
            <h3 className="setting"> {movie.genre}</h3>
            <img src={movie.image} style={{ width: "750px", height: "350px" }} class="center" />
          </div>
        </>)
      })
      }
    </div> : <div class="alert alert-danger" role="alert">0 movie found</div>
  )
}

export default Search