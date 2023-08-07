import { Box, Button, Divider, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { TbShoppingCartPlus } from 'react-icons/tb'
import PopoverButton from '../modal/PopoverButton'
import ModalRegular from '../modal/ModalRegular'

const Cart = () => {
    const modal = useDisclosure();
    const popover = useDisclosure();
    return (
        <Box maxHeight={"90vh"} width={["", "30%"]} padding={5} bgColor={"blackAlpha.50"} overflowY={"auto"}>
            <Box width={"100%"}>
                <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" transform="scaleY(-1)" height={"2%"}/>
                <Box>
                    <Box display={"flex"} flexDirection={'column'} justifyContent={"start"} alignItems={"center"} padding={5} borderBottomColor={"gray.300"} borderBottomStyle={"dashed"} borderBottomWidth={3} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"} >
                        <Box>
                            <TbShoppingCartPlus size={70} />
                        </Box>
                        <Text as="b" fontSize="2xl">Keranjang</Text>
                    </Box>
                    <Box display={"flex"} flexDirection={'column'} borderBottomColor={"gray.300"} borderBottomStyle={"dashed"} borderBottomWidth={3} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"}>
                        <PopoverButton onClickButton1={modal.onOpen} onClose={popover.onClose} isOpen={popover.isOpen} onOpen={popover.onOpen}>
                            <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                                <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                                <Box maxWidth={"12%"}>999x</Box>
                                <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                            </Box>
                        </PopoverButton>
                        <ModalRegular isOpen={modal.isOpen} onClose={() => {popover.onClose(); modal.onClose()}} onCloseX={modal.onClose} title="Hapus Item" body={<Text>Apakah anda yakin ingin menghapus item ini?</Text>} defaultButtonColor="red" primaryButton="Hapus"></ModalRegular>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>999x</Box>
                            <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} paddingX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>999x</Box>
                            <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>999x</Box>
                            <Box maxWidth={"100%"}>Rp. 99.999.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                        <Box borderBottomColor={"gray.300"} borderBottomWidth={1} marginX={5}/>
                        <Box display={"flex"} justifyContent={"space-between"} padding={5} _hover={{background: "#FEEBC8"}}>
                            <Box maxWidth={"50%"}>Mie Iblis M Level 1</Box>
                            <Box maxWidth={"12%"}>1x</Box>
                            <Box maxWidth={"100%"}>Rp. 11.000,-</Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={'column'} padding={5} boxShadow={"md"} bgColor={"white"} bgImage={"url('/decoration/A Box.drawio.png')"} bgRepeat={"repeat"}>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingBottom={5}>
                            <Text maxWidth={"15%"}>Total</Text>
                            <Text as={"b"} fontSize={"2xl"} maxWidth={"90%"}>Rp. 99.999.000,-</Text>
                        </Box>
                        <Button colorScheme='green' boxShadow={"md"}>Buat Pesanan</Button>
                    </Box>
                </Box>
                <Image src="/decoration/Ripped_Papper_Edited.drawio.png" alt="Gambar" height={"2%"}/>
            </Box>
        </Box>
    )
}

export default Cart