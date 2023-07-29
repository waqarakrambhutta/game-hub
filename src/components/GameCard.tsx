import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
