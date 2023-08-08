import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Dashboard from './Dashboard'
import Cart from '../../components/section/Cart'
import ProductCard from '../../components/card/ProductCard'

const MainPage = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Dashboard>
      <Box display={"flex"} maxHeight={"90vh"} width="100%" bgColor={"grey"} overflowY={"auto"}>
        <SimpleGrid columns={[1, 2, 5]} spacing="1" gridAutoRows="max-content" justifyContent={"center"} margin={1}>
          {data.map((item, index) => (
            <ProductCard />
          ))}
        </SimpleGrid>
      </Box>
      <Cart/>
    </Dashboard>
  )
}

export default MainPage