import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ArtistCard from "./components/ArtistCard";
import SearchBar from "./components/SearchBar";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Artist } from "./hooks/useArtists";
import ArtistResultCard from "./components/ArtistResultCard";

function App() {
  const [count, setCount] = useState(0);
  const [searchedArtist, setSearchedArtist] = useState("");
  const [artist, setArtist] = useState<Artist>({
    id: 0,
    name: "HERE",
    image_link: "",
    top_tracks: [],
  });

  return (
    <>
      <Grid
        templateAreas={`"nav nav" "aside artist-result" "aside recent-searches"`}
      >
        <GridItem area="nav">
          <NavBar
            onSearchArtist={(artist) => {
              setArtist(artist);
              console.log(artist);
            }}
          />
        </GridItem>
        <GridItem bg="red" area="aside">
          ASIDE
        </GridItem>
        <GridItem bg="yellow" minHeight={20} area="artist-result">
          <ArtistResultCard res_artist={artist} />
        </GridItem>
        <GridItem bg="orange" area="recent-searches">
          Recent
        </GridItem>
      </Grid>

      <div className="App">
        <SearchBar />
        <p>Hello In Capitals</p>
        <ArtistCard />
      </div>
    </>
  );
}

export default App;
