import { Box, Text, Flex, Image } from '@chakra-ui/react';


export const DetailBox = (props) => {
    return (
        <Flex justifyContent='flex-start' direction='column' width='180px' mt='10'>
            <Box display='flex' justifyContent='center'>
                <Flex backgroundColor='gray.500' justifyContent='center' alignItems='center' height='80px' width='80px' borderRadius='70px'>
                    <Image  height='40px' width='40px' src={props.image} />
                </Flex>
            </Box>

            <Text fontSize='2xl' textAlign='center'>
                {props.topic}
            </Text>
            <Text textAlign='center'>
                {props.content}
            </Text>
        </Flex>
    )
}


const MiddleSection = (props) =>{

    return(
        <Flex justifyContent={['center', 'center', 'space-evenly']} alignItems='center' mt='10' direction={['coumn', 'column', 'row']}>
            {props.children}
        </Flex>
    )

}

export default MiddleSection;