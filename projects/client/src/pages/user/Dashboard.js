import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../../components/section/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = (props) => {
  return (
    <>
      <Header />
      <Box display={"flex"} flexDirection={"row"}>
        <Sidebar />
        <Box display="flex" height="100vh" width="100%" bgColor={"lightgrey"}>
          {props.children}
        </Box>
      </Box>
    </>
  )
}

export default Dashboard