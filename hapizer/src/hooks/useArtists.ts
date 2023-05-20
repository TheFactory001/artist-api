import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Track {
    title: string;
    id: number;
    demo_link: string;
  }
  export interface Artist {
    id: number;
    name: string;
    image_link: string;
    top_tracks: Track[];
  }
interface Props {
  searched_artist:string
}


const useArtists= ( {searched_artist}: Props)=>{
    const [artist, setArtist] = useState<Artist>({
        id:0,
        name:"HERE",
        image_link:"",
        top_tracks:[]
    });
    const [error, setError] =useState("")

    if (searched_artist !== ""){

       apiClient
        .post("/get-artist", {
          searched_artist: searched_artist,
        })
        .then((res) => setArtist(res.data));
      }
      
      return {artist,error}
    
    }
    
      

export default useArtists
