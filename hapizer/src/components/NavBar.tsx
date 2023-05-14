import { GridItem, HStack, Switch, Text } from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px 20px">
      <Text>Hapizer</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
