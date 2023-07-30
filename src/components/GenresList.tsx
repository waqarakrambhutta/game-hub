import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, error, Loading } = useGenres();

  return ( 
    <ul>
    {genres.map(genre=><li>{genre.name}</li>)}
    </ul>
   );
};

export default GenresList;
