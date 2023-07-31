import { SimpleGrid, Text, list } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props{
  selectedGenre:Genres|null;
}

const GameGrid = ({selectedGenre}:Props) => {
  const { error, data, Loading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={7}
      >
        {Loading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
              <GameCardSkeleton/>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id} >
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))} 
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
