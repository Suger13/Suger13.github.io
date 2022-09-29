import { Box, Text } from '@chakra-ui/react'
export const Title =() =>{
    
    return (
        <Box display="flex" alignItems="center" height="8rem" pl={[0, 0, 20]} backgroundColor="#958385" justifyContent={[ 'center', 'center', 'normal' ]}>
            <Text fontSize="4xl" as='b'>
                My Profile
            </Text>
        </Box>
    )
}  