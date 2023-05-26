import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsArrowBarRight, BsSearch } from "react-icons/bs";
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
      <InputGroup background={" rgba(219, 209, 209, 0.12"}>
        <InputLeftElement children={<BsSearch />} />

        <Input
          ref={searched_artist_Ref}
          borderRadius={"10px"}
          placeholder="Search Artist..."
          variant={"filled"}
          height={"50px"}
          width={"600px"}
        />
        <Button type="submit" height={"50px"} marginLeft={"50px"}>
          Search Artist
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
