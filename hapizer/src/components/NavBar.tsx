import { GridItem, HStack, Switch, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Artist } from "../hooks/useArtists";
interface Props {
  onSearchArtist: (artist: Artist) => void;
}

const NavBar = ({ onSearchArtist }: Props) => {
  return (
    <HStack padding="10px 20px">
      <SearchInput onSearchArtist={onSearchArtist} />
    </HStack>
  );
};

export default NavBar;
