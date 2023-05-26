import React, { useEffect, useRef, useState } from "react";
import apiClient from "../services/api-client";
import { Input } from "@chakra-ui/react";
import { Track } from "../hooks/useArtists";
interface Artist {
  id: number;
  name: string;
  image: string;
  top_5_tracks: Track[];
}

const SearchBar = () => {
  const [searchedArtist, setSearchArtist] = useState("");
  const [artist, setArtist] = useState<Artist[]>([
    { id: 0, name: "none", image: "none", top_5_tracks: [] },
  ]);
  function send_search() {
    apiClient
      .post("/get-artist", {
        searched_artist: searchedArtist,
      })
      .then((res) => setArtist(res.data));
    //   continue with normal send
  }
  const artist_ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input
        borderRadius="20px"
        placeholder="Search Artist......"
        variant={"filled"}
      />
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("get");
          if (artist_ref.current) {
            setSearchArtist(artist_ref.current.value);
            send_search();
          }
        }}
      >
        <div>
          <input
            ref={artist_ref}
            placeholder="Search Artist"
            name="artist_searched"
            type="text"
          />
        </div>
        <button>Search</button>
      </form>
      <p>Listed</p>
      <ul>
        {artist.map((each_artsist) => (
          <li key={each_artsist.id}>{each_artsist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
