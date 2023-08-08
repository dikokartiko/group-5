import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../components/card/ProductCard';

const TestPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%" bgColor={"grey"}>
      <ProductCard></ProductCard>
    </Box>
  );
}

export default TestPage