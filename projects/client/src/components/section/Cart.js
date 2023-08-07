import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'

const Cart = () => {
  return (
    <Box width={["", "25%"]} padding={5} bgColor={"blackAlpha.50"}>
        <Box height="100%" width={"100%"} >
            <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" transform="scaleY(-1)" height={"2%"}/>
            <Box display={"flex"} flexDirection={'column'} justifyContent={"start"} alignItems={"center"} height="98%" padding={5} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"}>
                <Box>
                    <TbShoppingCartPlus size={70} />
                </Box>
                <Text as="b" fontSize="2xl">Keranjang</Text>
                <Box height="50%" width={"100%"} marginY={5} borderTopColor={"gray.300"} borderTopStyle={"dashed"} borderTopWidth={3} />
            </Box>
            <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" height={"2%"}/>
        </Box>
    </Box>
  )
}

export default Cart