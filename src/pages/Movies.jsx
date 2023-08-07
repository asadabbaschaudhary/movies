import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "../images/star.svg"
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/movies/")
      .then((res) => {
        setMovies(res.data.movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(movies);
  if (Object.keys(movies).length > 0) {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row mt-5 mb-5">
              {movies?.map((movie) => {
                return (
                  <div className="col-md-3 mb-3">
                    <div className="card " style={{ height: "300px" }}>
                      <Link to={`/detail/${movie.id}`}><img
                        className="card-img-top"
                        src={movie.image}
                        alt="Card image cap"
                      />
                      </Link>
                      <div className="cardbody1">
                        <div className="p-2">
                          <p className="card-title p-2"> Genre : {movie.genre}</p>
                          <p className="card-title p-2"> Rating : {movie.rating}
                            <div>
                              <img src={star} />
                              <img src={star} />
                              <img src={star} />
                            </div>
                          </p>

                          <h6
                            className="card-title d-inline-block text-truncate p-2"
                            style={{ maxWidth: "150px" }}
                          >
                            {movie.name}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="trailerStyle">
                      <a
                        href={movie.trailor}
                        target="_blank"
                        className="btn btn-dark trabtn"
                      >
                        Trailor
                      </a>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="d-block mx-auto my-4 text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

      </>
    )
  }

}

export default Movies;
