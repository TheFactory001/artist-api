import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Track {
    title: string;
    id: number;
    preview: string;
    color:string;
    cover: string;
    link:string
  }
  export interface Artist {
    id: number;
    name: string;
    image: string;
    top_5_tracks: Track[];
  }




    
      

