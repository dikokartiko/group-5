import { Box, Button, HStack, Input, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Dashboard from './Dashboard'
import Cart from '../../components/section/Cart'
import ProductCard from '../../components/card/ProductCard'
import ModalRegular from '../../components/modal/ModalRegular'
import { TbMinus, TbPlus, TbShoppingCartPlus } from 'react-icons/tb'

const MainPage = (props) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { isOpen, onOpen, onClose } = useDisclosure();
  let modalTitle = <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
  <TbShoppingCartPlus size={70}/>
  <Text as={"b"} fontSize="2xl">Living room Sofa</Text>
</Box>;
  return (
    <Dashboard role={props.role}>
      <Box display={"flex"} maxHeight={"90vh"} width="100%" bgColor={"grey"} overflowY={"auto"}>
        <SimpleGrid columns={[1, 2, 5]} spacing="1" gridAutoRows="max-content" justifyContent={"center"} margin={1}>
          {data.map((item, index) => (
            <ProductCard key={index} onClick={onOpen}/>
          ))}
        </SimpleGrid>
        <ModalRegular 
          isOpen={isOpen} 
          onClose={onClose} 
          onCloseX={onClose} 
          title={modalTitle} 
          defaultButtonColor="green" 
          primaryButton="Tambahkan"
        >
          <Text fontSize={"xl"} marginBottom={1}>Jumlah:</Text>
          <HStack justifyContent={"center"}>
              <Button><TbMinus /></Button>
              <Input value={"999"} />
              <Button><TbPlus /></Button>
          </HStack>
        </ModalRegular>
      </Box>
      <Cart/>
    </Dashboard>
  )
}

export default MainPage