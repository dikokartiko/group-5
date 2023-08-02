import { Box } from '@chakra-ui/react'
import React from 'react'

const FormCard = (props) => {
  return (
    <Box bgColor={"white"} borderRadius={"md"} boxShadow='md' minHeight="30%" padding={5} textAlign={"center"} textColor={"black"} width={"50%"}>
        {props.children}
    </Box>
  )
}

export default FormCard