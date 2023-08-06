import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../../components/section/Header'
import Sidebar from '../../components/section/Sidebar'

const Dashboard = (props) => {
  return (
    <Box height={"100vh"}>
      <Header />
      <Box display={"flex"} flexDirection={"row"}>
        <Sidebar />
        <Box display={"flex"} width="100%" bgColor={"lightgrey"}>
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard