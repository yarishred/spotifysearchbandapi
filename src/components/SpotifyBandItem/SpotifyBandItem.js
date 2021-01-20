import React from "react";

export const SpotifyBandItem = ({ images, band }) => {
  const myimages = images.image;
  console.log(myimages);

  return (
    <div>
      <h1>{band}</h1>
      {myimages.map((img, index) => {
        
        return index === 1 ? <img src={img.url} alt={img.name}/> : null;
        }
      )}
    </div>
  );
};
