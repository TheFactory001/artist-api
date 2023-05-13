import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Artist {
  id: number;
  name: string;
  image: string;
}
const ArtistCard = () => {
  const [artists, setArtist] = useState<Artist[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<Artist[]>("/artist")
      .then((res) => setArtist(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <p>Check Below</p>
      <ul>
        {artists.map((artist) => (
          <div>
            <img src={artist.image} alt="" />
            <li key={artist.id}>{artist.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ArtistCard;
