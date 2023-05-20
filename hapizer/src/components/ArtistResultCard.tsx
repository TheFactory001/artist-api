import React, { useState } from "react";
import { Artist } from "../hooks/useArtists";

interface Props {
  res_artist: Artist;
}

const ArtistResultCard = ({ res_artist }: Props) => {
  return (
    <div>
      <div>Twice {res_artist.name}</div>
    </div>
  );
};

export default ArtistResultCard;
