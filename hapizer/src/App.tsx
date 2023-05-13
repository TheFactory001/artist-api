import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ArtistCard from "./components/ArtistCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchBar />
      <p>Hello In Capitals</p>
      <ArtistCard />
    </div>
  );
}

export default App;
