import React, { MouseEvent, useEffect, useState } from "react";
import { Track } from "../hooks/useArtists";
import {
  Card,
  ControlBox,
  HStack,
  List,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

import AudioPlayer from "react";
interface Props {
  res_tracks: Track[];
}

const ArtistResultTracks = ({ res_tracks }: Props) => {
  const [audioTrack, setAudioTrack] = useState("");

  const onTrackSelect = (index: number) => {
    console.log(index);
    setAudioTrack(res_tracks[index].preview);
    const selectTextColor = [...defaultColour];

    selectTextColor[index] = "#5F3A3A";
    setTextColor(selectTextColor);
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
        <audio
          controls
          src={audioTrack}
          onFocus={() => {
            if (
              audioTrack == "" ||
              res_tracks.some((track) => track.preview === audioTrack) == false
            ) {
              console.log("hey");
              setAudioTrack(res_tracks[0].preview);
            }
          }}
        ></audio>
      </VStack>
    </Card>
  );
};

export default ArtistResultTracks;
