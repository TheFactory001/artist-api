import React, { useState } from "react";
import { Artist } from "../hooks/useArtists";
import { Card, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface Props {
  res_artist: Artist;
}

const ArtistResultCard = ({ res_artist }: Props) => {
  return (
    <VStack height={250} justifyContent={"space-between"}>
      <Image src={res_artist.image} boxSize={200} borderRadius={50} />
      <Text
        color={"#D9D9D9"}
        fontFamily={"Sofadi One"}
        fontStyle={"normal"}
        fontSize={"16px"}
      >
        {res_artist.name}
      </Text>
    </VStack>

    // <div>
    //   <div>Twice {res_artist.name}</div>
    //   <p>{res_artist.image}</p>
    // </div>
  );
};

export default ArtistResultCard;
