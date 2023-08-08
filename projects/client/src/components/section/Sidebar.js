import { Box, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TbBoxSeam, TbCalculator, TbCategory, TbReportAnalytics, TbUsers } from 'react-icons/tb';

const Sidebar = (props) => {
  return (
    // <Drawer placement={"left"} /*onClose={onClose}*/ isOpen={true}>
    //     <DrawerOverlay />
    //     <DrawerContent>
    //         <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
    //         <DrawerBody>
    //             <p>Some contents...</p>
    //             <p>Some contents...</p>
    //             <p>Some contents...</p>
    //         </DrawerBody>
    //     </DrawerContent>
    // </Drawer>
    <Box height="90vh" width={["", "20%"]} boxShadow={'md'} paddingX={5}>
        {
            (props.role === "kasir")? <>
                <Box marginTop={5} borderTop={"1px"}>
                    <Text as="b">Kasir</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} paddingY={2} bgColor={"orange.200"} borderRadius={5} _hover={{background: "#FEEBC8"}}>
                    <Box paddingRight={5}>
                        <TbCalculator size={30} />
                    </Box>
                    <Text as="b" fontSize={"xl"}>Kasir</Text>
                </Box>
            </> : <></>
        }
        {
            (props.role === "admin")? <>
                <Box marginTop={5} borderTop={"1px"}>
                    <Text as="b">Admin</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} paddingY={2} bgColor={"red.200"} borderRadius={5} _hover={{background: "#FED9D9"}}>
                    <Box paddingRight={5}>
                        <TbBoxSeam size={30} />
                    </Box>
                    <Text fontSize={"lg"}>Produk</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} paddingY={2} bgColor={"transparent"} borderRadius={5} _hover={{background: "#FED9D9"}}>
                    <Box paddingRight={5}>
                        <TbCategory size={30} />
                    </Box>
                    <Text fontSize={"lg"}>Kategori</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} paddingY={2} bgColor={"transparent"} borderRadius={5} _hover={{background: "#FED9D9"}}>
                    <Box paddingRight={5}>
                        <TbUsers size={30} />
                    </Box>
                    <Text fontSize={"lg"}>User Manajemen</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} paddingY={2} bgColor={"transparent"} borderRadius={5} _hover={{background: "#FED7D7"}}>
                    <Box paddingRight={5}>
                        <TbReportAnalytics size={30} />
                    </Box>
                    <Text fontSize={"lg"}>Laporan Penjualan</Text>
                </Box> 
            </> : <></>
        }
    </Box>
  )
}

export default Sidebar