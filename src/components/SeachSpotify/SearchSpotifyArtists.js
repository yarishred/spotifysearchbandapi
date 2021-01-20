import React, { useState } from "react";

import './SearchSpotifyArtists.css'

export const SearchSpotifyArtists = ({setArtistas}) => {
  const [value, setValue] = useState('');

  const setValueHandler = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(value.trim().length > 2)
    setArtistas( artist => [...artist, value])
    setValue('')
  };


  

  return (
    <div className="spotify-form" >
      <h2>Search Something</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={setValueHandler}
          placeholder="Search any Artist"
        />
      </form>
    </div>
  );
};
