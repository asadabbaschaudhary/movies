import axios from "axios";
import React, { useEffect, useState } from "react";
import star from "../images/star.svg";
import { Navigate, Link } from "react-router-dom";

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

  function deleteItem(id) {
    axios
      .delete(`http://localhost:3001/delete-movies/${id}`)
      .then((res) => {
        axios
          .get("http://localhost:3001/movies/")
          .then((res) => {
            setMovies(res.data.movies);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function updateItem(id) {
  //   axios
  //     .put(`http://localhost:3001/update-movies/${id}`)
  //     .then((res) => {
  //       console.log("update is pending");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  return (
    <>
      <div className="container">
        <div className="createMovie">
          <Link to="/create">Create-Movie</Link>
        </div>
        <table class="table maindiv">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Image</th>
              <th scope="col">Genre</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {movies.map((movie, index) => {
            console.log(movie);
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td style={{ width: "350px" }}>
                      {movie.name}
                      <br></br>Rating: {movie.rating}
                      <br></br> <img src={star} />
                      <img src={star} />
                      <img src={star} />
                    </td>
                    <td>
                      <img
                        src={movie.image}
                        style={{ width: "180px", height: "100px" }}
                      />
                    </td>
                    <td>{movie.genre}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteItem(movie.id);
                        }}
                        className="btn btn-dark border-white"
                      >
                        Delete
                      </button>
                      <br />
                      <button
                        // onClick={() => {
                        //   updateItem(movie.id);
                        // }}
                        className="btn  mt-3 btn-dark border-white"><Link className='text-white' to={`/update/${movie.id}`}>
                        Update </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Movies;
