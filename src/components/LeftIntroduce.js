import { Box, Text, Link, Image, Flex, Button, BorderProps} from '@chakra-ui/react';

const facebookIcon = require('../src-image/icon/facebook.png')
const instagramIcon = require('../src-image/icon/instagram.png')
const twitterIcon = require('../src-image/icon/twitter.png')
const linkedInIcon = require('../src-image/icon/linkedIn.png')
const githubIcon = require('../src-image/icon/github.png')


const LeftIntroduce = () => {

    return (
        <Box mt={10}>

            <Box p={7}>
                <Text textAlign={['center', 'center', 'start']}>Hi!</Text>
                <Text mt={5} fontSize="2xl" textAlign={['center', 'center', 'start']}>My name's Ratchanon Singhjoo <br/>I'm a fullstack Developer</Text>
                
                <Box className="link-container" display={['column', 'column', 'flex']} alignItems='center' justifyContent="space-evently" mt='10'>
                    <Text display={['none', 'none', 'block']}>Follow me</Text> 
                    <Box display='flex' justifyContent={'center'}>
                    <Link href="#" ml="1rem"> <Image height="2rem" src={githubIcon} /> </Link>
                    <Link href="#" ml="1rem"> <Image height="2rem" src={facebookIcon} /> </Link>
                    <Link href="#" ml="1rem"> <Image height="2rem" src={instagramIcon} /> </Link>
                    <Link href="#" ml="1rem"> <Image height="2rem" src={twitterIcon} /> </Link>
                    <Link href="#" ml="1rem"> <Image height="2rem" src={linkedInIcon} /> </Link>
                    </Box>
                </Box>

                <Flex mt='10' justifyContent={['center', 'center', 'normal']}>
                    <Button colorScheme='teal'>Send Request</Button> 
                    <Button colorScheme='white' variant='outline' ml='5'>Download CV</Button>
                </Flex>

            
            </Box>



        
        </Box>
    )
}

export default LeftIntroduce;