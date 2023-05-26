import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import apiClient from "../services/api-client";
import { Artist } from "../hooks/useArtists";

interface Props {
  onSearchArtist: (artist: Artist) => void;
}

const SearchInput = ({ onSearchArtist }: Props) => {
  const searched_artist_Ref = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      onSubmit={async (event) => {
        event.preventDefault();
        if (searched_artist_Ref.current) {
          const my_artist = await apiClient
            .post("/get-artist", {
              searched_artist: searched_artist_Ref.current.value,
            })
            .then((res) => {
              return res.data;
            });

          // const out_artist = await my_artist;
          onSearchArtist(my_artist);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searched_artist_Ref}
          borderRadius={20}
          placeholder="Search Artist...."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
