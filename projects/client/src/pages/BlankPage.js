import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const BlankPage = () => {
  return (
    <Box
      display='flex'
      justifyContent={"center"}
      height="calc(100vh)"
      width='100%'
    >
      <Box>
        <Text as="b" fontSize={"6xl"}>TUPO</Text>
      </Box>
    </Box>
  )
}

export default BlankPage