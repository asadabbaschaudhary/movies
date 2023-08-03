import React from 'react'
import sideImg from "../images/barbie.jpg"
import sideImg1 from "../images/Blue Beetle.jpg"
import sideImg2 from "../images/The Meg.jpg"

function Slides() {
  return (
    <div class="mt-3">
      <div class="container-fluid md-2">
        <div class="row">
          <div class="col-lg-8 slider-height">
            <div
              id="carouselExampleCaptions"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">


                  <iframe width="100%" height="430px" src="https://www.youtube.com/embed/SzS8Ao0H6Co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div class="carousel-item">
                  <iframe width="100%" height="430px" src="https://www.youtube.com/embed/XtgCqMZofqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div class="carousel-item">
                  <iframe width="100%" height="430px" src="https://www.youtube.com/embed/BmllggGO4pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <h3>New Release</h3>
            <div class="col-lg-12 mb-2 sidecard" >
              <div class="container">
                <div class="row ">
                  <div class="col-lg-4 ">
                    <img src={sideImg} alt="img" class="sideimage" />
                  </div>
                  <div class="col-lg-8">
                    <div class="title"> BARBIE</div>
                    <div class="title1">Barbie suffers a crisis that leads her to question her world and her existence</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-2 sidecard" >
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <img src={sideImg1} alt="img" class="sideimage" />
                  </div>
                  <div class="col-lg-8">
                    <div class="title"> BLUE BEETLE</div>
                    <div class="title1">An alien relic chooses Jaime  to be its symbiotic host, bestowing  him a suit of armor</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-2 sidecard">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4">
                    <img src={sideImg2} alt="img" class="sideimage" />
                  </div>
                  <div class="col-lg-8">
                    <div class="title"> THE MEG 2</div>
                    <div class="title1">A group of scientists exploring the Marianas Trench encounter the largest marine predator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slides
