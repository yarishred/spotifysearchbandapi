import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpotifyCredentials } from "../../helpers/SpotifyCredentials";
import { SpotifyBandItem } from "../SpotifyBandItem/SpotifyBandItem";


// CSS
import './GridSpotifyArtists.css'

export const GridSpotifyArtists = ({ artista }) => {
  const [imagenes, setImagenes] = useState([]);
  //Crear el token de spotify
  const spotifyCredentials = SpotifyCredentials();

  const { client_id, client_secret } = spotifyCredentials;

  useEffect(() => {
    const getArtists = () => {
      axios("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(client_id + ":" + client_secret)}`,
        },
        data: "grant_type=client_credentials",
      })
        .then(({ data }) => {
          return data;
        })
        .then((token) => {
          axios(
            `https://api.spotify.com/v1/search?query=${encodeURI(
              artista
            )}&type=artist&offset=0&limit=10`,
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token.access_token}` },
            }
          )
            .then(({ data }) => {
              return data.artists.items;
            })
            .then((dataArtist) => {
              const artists = dataArtist.map((artist) => {
                return {
                  id: artist.id,
                  band: artist.name,
                  images: {
                    image: artist.images,
                  },
                };
              });
              return artists;
            })
            .then((artistsData) => {
              setImagenes(artistsData);
            });
        });
    };
    getArtists();
  }, [artista, client_id, client_secret]);

  return (
    <>
      <h2 className="artist-grid">Artists with the keyword: {artista}</h2>
      <div className="artists-container">
        {imagenes.map((img) => {
          return <SpotifyBandItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
