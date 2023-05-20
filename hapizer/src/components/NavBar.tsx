import { GridItem, HStack, Switch, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearchArtist: (searchText: string) => void;
}

const NavBar = ({ onSearchArtist }: Props) => {
  return (
    <HStack padding="10px 20px">
      <Text>Hapizer</Text>
      <SearchInput onSearchArtist={onSearchArtist} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
