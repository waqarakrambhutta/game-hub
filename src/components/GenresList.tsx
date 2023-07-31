import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";

interface Prop {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Prop) => {
  const { data, Loading, error } = useGenres();

  if (error) return null;

  if (Loading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
