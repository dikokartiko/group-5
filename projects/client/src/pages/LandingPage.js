import { Box, Button, ButtonGroup, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import TabModal from '../components/modal/TabModal'
import RegularModal from '../components/modal/RegularModal'
import LoginForm from '../components/form/LoginForm'

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (

    <Box
      bgColor="grey"
      display='flex'
      // alignItems='center'
      // justifyContent='center'
      height="calc(100vh)"
      width='100%'
      // py={12}
      // bgImage="url('https://bit.ly/2Z4KKcF')"
      // bgPosition='center'
      // bgRepeat='no-repeat'
    >
      <LoginForm></LoginForm>
    </Box>
  )
}

export default LandingPage