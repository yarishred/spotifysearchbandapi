import React, { useState } from "react";
import { SearchSpotifyArtists } from "./components/SeachSpotify/SearchSpotifyArtists";
import { GridSpotifyArtists } from "./components/SpotifyArtists/GridSpotifyArtists";
export const SpotifyApp = () => {
  const [artistas, setArtistas] = useState([]);

  return (
    <div className="spotify-app">
      <h1>Spotify Input App</h1>

      <SearchSpotifyArtists setArtistas={setArtistas} />
      <br />
      <br />
      <div>
        {artistas.map((artista) => {
          return <GridSpotifyArtists  key={artista} artista={artista} />
        })}
      </div>
      {/* <p>{spotifyToken}</p> */}
    </div>
  );
};
