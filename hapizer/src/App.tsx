import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ArtistCard from "./components/ArtistCard";
import SearchBar from "./components/SearchBar";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={`"nav nav" "aside artist-result" "aside recent-searches"`}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem bg="red" area="aside">
          ASIDE
        </GridItem>
        <GridItem bg="yellow" area="artist-result">
          Result
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
