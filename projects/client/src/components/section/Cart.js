import { Box, Divider, Image, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'

const Cart = () => {
  return (
    <Box width={["", "30%"]} padding={5} bgColor={"blackAlpha.50"}>
        <Box width={"100%"} overflow={"auto"} >
            <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" transform="scaleY(-1)" height={"2%"}/>
            <Box height={"98%"} >
                <Box display={"flex"} flexDirection={'column'} justifyContent={"start"} alignItems={"center"} padding={5} borderBottomColor={"gray.300"} borderBottomStyle={"dashed"} borderBottomWidth={3} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"} >
                    <Box>
                        <TbShoppingCartPlus size={70} />
                    </Box>
                    <Text as="b" fontSize="2xl">Keranjang</Text>
                </Box>
                <Box display={"flex"} flexDirection={'column'} padding={5} borderBottomColor={"gray.300"} borderBottomStyle={"dashed"} borderBottomWidth={3} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>999x</Box>
                        <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>999x</Box>
                        <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>999x</Box>
                        <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                    <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginTop={5} marginBottom={5}/>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                        <Box maxWidth={"11%"}>1x</Box>
                        <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                    </Box>
                </Box>
                <Box display={"flex"} flexDirection={'column'} justifyContent={"start"} alignItems={"center"} padding={5} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"}>
                    <Box>
                        <TbShoppingCartPlus size={70} />
                    </Box>
                    <Text as="b" fontSize="2xl">Keranjang</Text>
                </Box>
            </Box>
            <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" height={"2%"}/>
        </Box>
    </Box>
  )
}

export default Cart