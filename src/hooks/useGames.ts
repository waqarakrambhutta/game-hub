import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  
  interface fetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const controller = new AbortController();
        apiClient
      .get<fetchGameResponse>("/games",{signal:controller.signal})
      .then((res) => {
        setGames(res.data.results);
        console.log(res);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

      return () => controller.abort();
  }, []);

  return { error, games }

}
export default useGames;