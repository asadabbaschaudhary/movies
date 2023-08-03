import axios from "axios";
import React, { useEffect, useState } from "react";

function TvShows() {
  const [TvShows, setTvShows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tvshow/")
      .then((res) => {
        setTvShows(res.data.TvShow);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(TvShows);
  return (
    <div>
      <div>
        <div className="container">
          <div className="row mt-5 mb-5">
            {TvShows?.map((TvShow) => {
              return (
                <div className="col-md-3 mb-3">
                  <div className="card " style={{ height: "300px" }}>
                    <img
                      className="card-img-top"
                      src={TvShow.image}
                      alt="Card image cap"
                    />
                    <div className="cardbody1">
                      <div className="p-2">
                        <p className="card-title p-2"> Genre : {TvShow.genre}</p>
                        <p className="card-title p-2"> Rating : {TvShow.rating}</p>

                        <h6
                          className="card-title d-inline-block text-truncate p-2"
                          style={{ maxWidth: "150px" }}
                        >
                          {TvShow.TvShow}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="trailerStyle">
                    <a
                      href="https://www.youtube.com/watch?v=uYPbbksJxIg"
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
}

export default TvShows;
