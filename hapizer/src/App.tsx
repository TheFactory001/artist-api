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

  return (
    <>
      <Grid
        templateAreas={`"nav nav" "aside artist-result" "aside recent-searches"`}
      >
        <GridItem area="nav">
          <NavBar
            onSearchArtist={(searchText) => setSearchedArtist(searchText)}
          />
        </GridItem>
        <GridItem bg="red" area="aside">
          ASIDE
        </GridItem>
        <GridItem bg="yellow" minHeight={20} area="artist-result">
          <ArtistResultCard searched_text={searchedArtist} />
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
