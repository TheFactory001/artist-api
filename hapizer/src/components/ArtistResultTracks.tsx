import React, { MouseEvent, useEffect, useState } from "react";
import { Track } from "../hooks/useArtists";
import {
  Card,
  ControlBox,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import AudioPlayer from "react";
interface Props {
  res_tracks: Track[];
}

const ArtistResultTracks = ({ res_tracks }: Props) => {
  const [audioTrack, setAudioTrack] = useState("");
  const [index, setIndex] = useState(0);

  const onTrackSelect = (index: number) => {
    console.log(index);
    setAudioTrack(res_tracks[index].preview);
    const selectTextColor = [...defaultColour];

    selectTextColor[index] = "#5F3A3A";
    setTextColor(selectTextColor);
    setIndex(index);
  };
  const defaultColour = ["black", "black", "black", "black", "black"];
  const [textColor, setTextColor] = useState([
    "#5F3A3A",
    "black",
    "black",
    "black",
    "black",
  ]);

  return (
    <Card
      width={600}
      height={250}
      borderRadius={50}
      background={"#D9D9D9"}
      padding={"20px 20px"}
      display={"flex"}
      flexDirection={"row"}
    >
      <List
        width={200}
        height={"100%"}
        borderRight={" 2px "}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        cursor={"pointer"}
      >
        {res_tracks.map((track, index) => (
          <ListItem
            color={textColor[index]}
            textAlign={"right"}
            marginRight={"5px"}
            onClick={() => {
              onTrackSelect(index);
            }}
          >
            {track.title}
          </ListItem>
        ))}
      </List>
      <VStack marginLeft={10}>
        <Image
          id="selectedTrackCover"
          src={res_tracks.length > 0 ? res_tracks[index].cover : ""}
          boxSize={100}
          borderRadius={"50%"}
        />
        <audio
          controls
          src={res_tracks.length > 0 ? res_tracks[index].preview : ""}
        ></audio>
        <Text id="selectedTrackTitle">
          {res_tracks.length > 0 ? res_tracks[index].title : ""}
        </Text>
      </VStack>
    </Card>
  );
};

export default ArtistResultTracks;
