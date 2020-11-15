import React from "react";

function Search({ handleInputChange }) {
  return (
    <form>
      <div className='form-group'>
        <input
          type='text'
          id='searchBar'
          placeholder='Search a character'
          onChange={e => handleInputChange(e.target.value)}
        >
        </input>
      </div>
    </form>
  )
}

export default Search;

