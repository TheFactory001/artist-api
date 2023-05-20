import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchArtist: (searchText: string) => void;
}

const SearchInput = ({ onSearchArtist }: Props) => {
  const searched_artist_Ref = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        if (searched_artist_Ref.current) {
          onSearchArtist(searched_artist_Ref.current.value);
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
