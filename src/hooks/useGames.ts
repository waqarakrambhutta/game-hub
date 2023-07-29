import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[]
    metacritic:number
  }
  
  interface fetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [Loading,setLoading] = useState(true)
    
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
      .get<fetchGameResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setGames(res.data.results);
        console.log(res);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });

      return () => controller.abort();
  }, []);

  return { error, games, Loading }

}
export default useGames;