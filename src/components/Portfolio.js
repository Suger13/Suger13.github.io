import { Box, Text, Grid, GridItem ,Flex, Image, propNames } from '@chakra-ui/react'

const portfolio1 = require('../src-image/portfolio/Image.png');
const portfolio2 = require('../src-image/portfolio/Image (1).png')
const portfolio3 = require('../src-image/portfolio/Image (2).png')
const portfolio4 = require('../src-image/portfolio/Image (3).png')
const portfolio5 = require('../src-image/portfolio/Image (4).png')
const portfolio6 = require('../src-image/portfolio/Image (5).png')



const Portfolio = () => {
    return (
        <Flex justifyContent='space-evenly' mt={10}>
            <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)', 'repeat(3,2fr)' ]} gap={5}>
                <GridItem>
                    <Image src={portfolio1}/>
                </GridItem>
                <GridItem >
                    <Image src={portfolio2}/>
                </GridItem>
                <GridItem>
                    <Image src={portfolio3} />
                </GridItem>
                <GridItem>
                    <Image src={portfolio4} />
                </GridItem>
                <GridItem>
                    <Image src={portfolio5} />
                </GridItem>
                <GridItem>
                    <Image src={portfolio6} />
                </GridItem>
            </Grid>
        </Flex>
        
    )
}

export default  Portfolio;