import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"><GenresList/></GridItem>
      </Show>
      
      <GridItem area="main"><GameGrid/></GridItem>
    </Grid>
  );
}

export default App;
