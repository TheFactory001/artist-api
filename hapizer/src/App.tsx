import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ArtistCard from "./components/ArtistCard";
import SearchBar from "./components/SearchBar";
import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Artist } from "./hooks/useArtists";
import ArtistResultCard from "./components/ArtistResultCard";
import ArtistResultGrid from "./components/ArtistResultGrid";
import SideCard from "./components/SideCard";
import "./components/Styles/App.css";
import RecentArtist from "./components/RecentArtist";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  const [count, setCount] = useState(0);
  const [searchedArtist, setSearchedArtist] = useState("");
  const [artist, setArtist] = useState<Artist>({
    id: 0,
    name: "HERE",
    image: "",
    top_5_tracks: [],
  });

  return (
    <>
      <div className="container">
        <Grid
          templateAreas={`"header header" "nil nav" "aside artist-result" "aside recent-searches"`}
          padding={50}
          paddingTop={"20px"}
          gap="25px"
        >
          <GridItem area="header">
            <HStack justifyContent={"space-between"} paddingEnd={"25px"}>
              <Text
                color={"#D9D9D9"}
                fontSize={"30px"}
                fontFamily={" Shadows Into Light Two"}
                lineHeight={"44px"}
              >
                HAPIZER
              </Text>
              <ColorModeSwitch />
            </HStack>
          </GridItem>
          <GridItem area="nav">
            <NavBar
              onSearchArtist={async (artist) => {
                setArtist(artist);
                console.log(artist);
              }}
            />
          </GridItem>
          <GridItem area="aside" height="100%">
            <SideCard />
          </GridItem>
          <GridItem minHeight={20} area="artist-result">
            <ArtistResultGrid res_artist={artist} />
          </GridItem>
          <GridItem area="recent-searches">
            <RecentArtist res_artist={artist} />
          </GridItem>
        </Grid>

        {/* <div className="App">
          <SearchBar />
          <p>Hello In Capitals</p>
          <ArtistCard />
        </div> */}
      </div>
    </>
  );
}

export default App;
