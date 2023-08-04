import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../../components/section/Header'
import Sidebar from '../../components/sidebar/Sidebar'

const Dashboard = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Box display="flex" height="100vh" width="100%" bgColor={"lightgrey"}>
        {props.children}
      </Box>
    </>
  )
}

export default Dashboard