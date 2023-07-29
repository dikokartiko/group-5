import { Box, Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
        bgColor="grey"
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='50%'
        py={12}
        // bgImage="url('https://bit.ly/2Z4KKcF')"
        bgPosition='center'
        bgRepeat='no-repeat'
        mb={2}
    >
    <ButtonGroup gap='4'>
        <Button colorScheme='red'>Login</Button>
        <Button colorScheme='linkedin'>Register</Button>
    </ButtonGroup>
    </Box>
  )
}

export default LandingPage