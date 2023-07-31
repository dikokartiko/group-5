import { Box, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import LoginForm from '../components/form/LoginForm'

const LandingPage = () => {
  return (
    <Box
      display='flex'
      // alignItems='center'
      justifyContent={"center"}
      height="calc(100vh)"
      width='100%'
    >
      <Box flex={2} bgColor="grey">Welcoming message</Box>
      <VStack flex={1} bgColor={"blackAlpha.100"} justifyContent={"center"} alignItems={"center"}>
        <LoginForm/>
      </VStack>
    </Box>
  )
}

export default LandingPage