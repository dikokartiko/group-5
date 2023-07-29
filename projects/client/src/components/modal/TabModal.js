import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'

const TabModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={() => {
      // modalOnClose();
      // loginTab();
      props.onClose();
    }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab bg="lightgreen" borderTopLeftRadius={15} /*onClick={() => loginTab()}*/>Login</Tab>
            <Tab bg="pink" borderTopRightRadius={15} /*onClick={/*() => registerTab()}*/>Register</Tab>
          </TabList>
          <TabPanels>
            {/* <LoginForm />
            <RegisterForm /> */}
          </TabPanels>
        </Tabs>
      </ModalContent>
    </Modal>
  )
}

export default TabModal