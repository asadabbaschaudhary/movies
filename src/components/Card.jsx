import React, { useState } from "react";
import cardimg1 from '../images/oppenheimer.jpg'
import cardimg2 from "../images/extraction 2.jpg"
import cardimg3 from "../images/John WICK.jpg"
import cardimg4 from "../images/euphobia.jpg"
import cardimg5 from "../images/Stranger things.jpg"
import cardimg6 from "../images/Transformers6.jpg"
import cardimg7 from "../images/Glass onion.jpg"
import cardimg8 from "../images/Game of thrones.jpg"
import cardimg9 from "../images/My fault.jpg"
import cardimg10 from "../images/titanic.jpg"
import star from "../images/star.svg"



function Card() {


  return (
    <div>
      <h3 className="mt-5 ms-3">Fans Favourite</h3>
      <p className="ms-3">shows and movies just for you</p>
      <div className="container-fluid padd ">
        
        <div className="row cardmovies">
          <div className="col-lg-2  ">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg1} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 8.7 </p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />



                <h5 className="card-title">Oppenheimer</h5>

                <a href="https://www.youtube.com/watch?v=uYPbbksJxIg" target="_blank" className="btn btn-dark " style={{marginTop: "3px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg2} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 8.3</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">Extraction 2</h5>

                <a href="https://www.youtube.com/watch?v=Y274jZs5s7s" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg3} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 8.8</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">John Wick 4</h5>

                <a href="https://www.youtube.com/watch?v=qEVUtrk8_B4" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg6} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 6.8</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">Transformers</h5>

                <a href="https://www.youtube.com/watch?v=itnqEauWQZM" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg5} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 7.4</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">Stranger Things</h5>

                <a href="https://www.youtube.com/watch?v=R1ZXOOLMJ8s" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="container-fluid padd ">
        <div className="row cardmovies">
          <div className="col-lg-2  ">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg4} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 7.9</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">6 Underground</h5>

                <a href="https://www.youtube.com/watch?v=YLE85olJjp8" target="_blank" className="btn btn-dark" style={{marginTop: "8px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg7} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 7.1</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">Glass Onion</h5>

                <a href="https://www.youtube.com/watch?v=gj5ibYSz8C0" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg8} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating : 8.3</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                
                
                <h5 className="card-title">Game Of Thrones</h5>

                <a href="https://www.youtube.com/watch?v=KPLWWIOCOOQ" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg9} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating 6.9</p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">My Fault</h5>

                <a href="https://www.youtube.com/watch?v=PaB7cGBuCP0" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card" style={{ width: "200px" }}>
              <img className="card-img-top" src={cardimg10} alt="Card image cap" />
              <div className="card-body">
                <p className="card-title">Rating: 7.9 </p>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <h5 className="card-title">Titanic</h5>

                <a href="https://www.youtube.com/watch?v=kVrqfYjkTdQ" target="_blank" className="btn btn-dark" style={{marginTop: "5px", marginLeft: "30%"}}>
                  Trailor
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Card;
