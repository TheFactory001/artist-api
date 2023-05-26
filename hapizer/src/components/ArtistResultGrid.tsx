import { HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ArtistResultCard from "./ArtistResultCard";
import { Artist } from "../hooks/useArtists";
import ArtistResultTracks from "./ArtistResultTracks";
interface Props {
  res_artist: Artist;
}
const ArtistResultGrid = ({ res_artist }: Props) => {
  return (
    <SimpleGrid
      width={1000}
      height={350}
      background={"#5F3A3A"}
      borderRadius={50}
      padding={50}
    >
      <HStack gap={50}>
        <ArtistResultCard res_artist={res_artist} />
        <ArtistResultTracks res_tracks={res_artist.top_5_tracks} />
      </HStack>
    </SimpleGrid>
  );
};

export default ArtistResultGrid;
