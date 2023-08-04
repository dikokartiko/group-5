import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
  return (
    <Drawer placement={"left"} /*onClose={onClose}*/ isOpen={true}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  )
}

export default Sidebar