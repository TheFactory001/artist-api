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




    
      

