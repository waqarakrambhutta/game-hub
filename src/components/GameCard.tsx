import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface props{
    game:Game
}

const GameCard = ({game}:props) => {
  return (
    <Card overflow={'hidden'} borderRadius={15}>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading size='md'>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard