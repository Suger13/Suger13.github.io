import { Box, Text, Flex, Image, Link } from '@chakra-ui/react'
const email = require('../src-image/footer/email.png')
const github = require('../src-image/footer/github-sign.png')



const Footer = () =>{
    return (
        <Flex justifyContent='space-evenly' mt={10} backgroundColor='#8a817c' h='5rem' color='blackAlpha.700' alignItems='center'>
            <Flex>
                <Image src={email} w={7} h={7}/>
                <Link ml={2} href='mailto:aun_smiling@hotmail.com'>aun_smiling@hotmail.com</Link>
            </Flex>

            <Text>©copyright | aundo</Text>

            <Flex>
                <Image src= {github} w={7} h={7} />
            </Flex>
            
        </Flex>
    )
}

export default Footer;