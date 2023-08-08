import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';


function Detail() {

    const id = useParams().id;
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/detail/${id}`)
            .then((res) => {
                setMovie(res.data.movie);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    if (Object.keys(movie).length > 0) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={movie.image} height="250px" />
                        </div>
                        <div className="col-md-6">
                            <h1> Title : {movie.name}</h1>
                            <p> About : {movie.about}</p>
                            <div><b>Genre: </b>{movie.genre}</div>
                            <div><b>Rating : </b>{movie.rating}</div>

                        </div>
                    </div>
                </div>
            </>
        )
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

export default Detail