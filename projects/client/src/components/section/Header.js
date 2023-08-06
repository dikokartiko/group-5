import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} height={"10vh"} boxShadow={'md'} bgColor={"blackAlpha.50"}>
        <Text marginX={5} textAlign="center" as="b" fontSize="6xl">TUPO</Text>
        <HStack margin={5} paddingX={3} borderRadius={15} boxShadow={"md"} bgColor={"white"}>
            <Avatar name="Dimas Ivon Anggitama" src="#" marginRight={5}/>
            <Box>
                <Text>Dimas Ivon Anggitama</Text>
                <Text>Admin</Text>
            </Box>
        </HStack>
    </Box>
  )
}

export default Header