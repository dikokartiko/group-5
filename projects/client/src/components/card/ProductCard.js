import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = () => {
  return (
    <Card maxW='sm'>
      <CardBody padding={0}>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderTopRadius='lg'
          borderBottomRadius='none'
        />
        <Stack margin='1'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text color='blue.600' fontSize='xl'>4.500.000</Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ProductCard