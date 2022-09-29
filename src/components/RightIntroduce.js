import { Box, Flex, Image} from '@chakra-ui/react';
const myProfile = require('../src-image/profile/my-profile.jpg')



const RightIntroduce = () => {
    
    return (
        <Flex>
            <Box>
                <Image  src={myProfile} height='350px' borderRadius='500px' boxShadow='2xl' />
            </Box>
        </Flex>
    )
}

export default RightIntroduce;