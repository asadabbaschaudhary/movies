import React from "react";
import cardimge from '../images/oppenheimer.jpg'
function Card() {
  return (
    <div>
      <h3 class="mt-5 ms-3">What to watch</h3>
      <p class="ms-3">shows and movies just for you</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <div class="card" style={{width: "18rem"}}>
              <img class="card-img-top" src={cardimge} alt="Card image cap" />
              <div class="card-body">
              <p class="card-title">Rating *</p>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
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
