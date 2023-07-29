import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={'350px'} borderRadius={10} overflow={'hidden'}>
        <Skeleton height={'250px'}/>
        <CardBody>
            <SkeletonText size="md"/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton