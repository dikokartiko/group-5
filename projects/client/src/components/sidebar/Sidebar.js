import { Box, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TbBoxSeam, TbCalculator, TbCategory, TbReportAnalytics, TbUsers } from 'react-icons/tb';

const Sidebar = () => {
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
    <Box height="90vh" width={["", "15%"]} boxShadow={'md'}>
        <Box display={"flex"} alignItems={"center"} paddingX={5} paddingY={2} bgColor={"transparent"} borderBottom={"1px"} borderColor={"lightgrey"}>
            <Box paddingRight={5}>
                <TbCalculator size={30} />
            </Box>
            <Text fontSize={"xl"}>Cashier</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} paddingX={5} paddingY={2} bgColor={"transparent"} borderBottom={"1px"} borderColor={"lightgrey"}>
            <Box paddingRight={5}>
                <TbBoxSeam size={30} />
            </Box>
            <Text fontSize={"xl"}>Produk</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} paddingX={5} paddingY={2} bgColor={"transparent"} borderBottom={"1px"} borderColor={"lightgrey"}>
            <Box paddingRight={5}>
                <TbCategory size={30} />
            </Box>
            <Text fontSize={"xl"}>Kategori</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} paddingX={5} paddingY={2} bgColor={"transparent"} borderBottom={"1px"} borderColor={"lightgrey"}>
            <Box paddingRight={5}>
                <TbUsers size={30} />
            </Box>
            <Text fontSize={"xl"}>User Manajemen</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} paddingX={5} paddingY={2} bgColor={"transparent"} borderBottom={"1px"} borderColor={"lightgrey"}>
            <Box paddingRight={5}>
                <TbReportAnalytics size={30} />
            </Box>
            <Text fontSize={"xl"}>Laporan Penjualan</Text>
        </Box> 
    </Box>
  )
}

export default Sidebar