import { Flex } from "@chakra-ui/react"

export const LeftSide = (props) =>{
    return (
        <Flex justifyContent={['center', 'center', 'normal']}>
            {props.children}
        </Flex>
    )
}

export const RightSide = (props) =>{
    return (
        <Flex justifyContent='center'>
            {props.children}
        </Flex>
    )
}



const Introduce = (props) => {
    return (
        <Flex direction={ ["column-reverse", "column-reverse", "row"]}  justifyContent='space-evenly' mt='2rem'>
            {props.children}
        </Flex>
    )
}

export default Introduce;