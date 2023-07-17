import React from 'react'

function Navbar() {
  return (
    <div class="navbr">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbr">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Movies Hub</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">All Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"></a>
      </li>
    </ul>
  
  </div>
  <div class='search'>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control search-Input mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      
    </form>
  </div>
  <div>
    <button class="btn btn-outline-dark btns">Login</button>
    <button class="btn btn-outline-dark btns">WatchList</button>
  </div>
</nav>
    </div>
  )
}

export default Navbar
