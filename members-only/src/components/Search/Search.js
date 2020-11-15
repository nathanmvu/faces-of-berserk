import React from "react";
import './Search.css';

function Search({ handleInputChange }) {
  return (
    <form>
      <div className='form-group'>
        <input 
          type='text'
          id='searchBar'
          placeholder='Search a character'
          onChange={e => handleInputChange(e)}
        >
        </input>
      </div>
    </form>
  )
}

export default Search;

