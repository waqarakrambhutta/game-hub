import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height={'250px'}/>
        <CardBody>
            <SkeletonText size="md"/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton