import React, { useState } from "react";
import useArtists from "../hooks/useArtists";

interface Props {
  searched_text: string;
}

const ArtistResultCard = ({ searched_text }: Props) => {
  const { artist, error } = useArtists({ searched_artist: searched_text });
  return (
    <div>
      <div>{searched_text}</div>
      <div>Twice {artist.title}</div>
    </div>
  );
};

export default ArtistResultCard;
