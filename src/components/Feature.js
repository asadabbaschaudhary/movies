import axios from "axios";
import React, { useEffect, useState } from "react";

function Feature() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/movies/featured")
      .then((res) => {
        setMovies(res.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(movies);
  return (
    <div className="mainf">
      <h3 class="fm">Featured Movies:</h3>
      <div id="carouselExampleCaptions1" className="carousel slide feature">
        <div className="carousel-inner">
          {movies.map((movie, index) => {
            return (
              <>
                <div
                  className={
                    index == 0 ? "carousel-item active" : "carousel-item"
                  }
                  key={index}
                >
                  <img src={movie.image} className="imgstyle" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{movie.name}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">prev</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions1"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Feature;
