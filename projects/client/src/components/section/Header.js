import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box boxShadow={'md'} height={"10vh"}>
        <Text marginX={5} textAlign="center" as="b" fontSize="6xl">TUPO</Text>
        <Box borderRadius={15} boxShadow={"md"}>
            <Avatar name="Dimas Ivon Anggitama" src="#"/>
            <Text>Dimas Ivon Anggitama</Text>
            <Text>Admin</Text>
        </Box>
    </Box>
  )
}

export default Header