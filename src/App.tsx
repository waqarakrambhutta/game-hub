import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {
 return (<Grid templateAreas={{
  base: `"nav" "main"`,
  lg:`"nav nav" "aside main"`
 }}>
  <GridItem area='nav' bg='blue'>Nav</GridItem>
 {/* in this tag we write tags to show on large devices */}
  <Show above='lg'> 
  <GridItem area='aside' bg='orange'>Aside</GridItem>
  </Show>
  <GridItem area='main' bg='green'>Main</GridItem>
 </Grid>
 );
}

export default App
