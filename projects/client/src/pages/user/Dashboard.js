import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box } from '@chakra-ui/react'

const Dashboard = (props) => {
  return (
    <>
      <Sidebar />
      <Box display="flex" height="100vh" width="100%" bgColor={"lightgrey"}>
        {props.children}
      </Box>
    </>
  )
}

export default Dashboard