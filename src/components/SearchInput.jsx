import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SearchInput = () => {
  const [inputTxt, setInputTxt] = useState("");
  return (
    <div>
      <div class="search">
        <form class="form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
          <div className='searchbox'>
            <input
              class="form-control search-Input mr-sm-2"
              type="text"
              placeholder="Search"
              onChange={(e) => setInputTxt(e.target.value)}

              aria-label="Search"

            />
            <Link to={`/search?q=${inputTxt}`} className='btn  btn-dark ' style={{ width: '140px', }}>Search </Link>
          </div>


        </form>
      </div>
    </div>
  )
}

export default SearchInput
