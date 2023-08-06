import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box boxShadow={'md'} height={"10vh"}>
        <Text marginX={5} textAlign="center" as="b" fontSize="6xl">TUPO</Text>
    </Box>
  )
}

export default Header