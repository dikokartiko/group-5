import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'
import LoginForm from '../form/LoginForm';

const TabModal = (props) => {
  let leftTabColor;
  let rightTabColor;
  (props.leftTabColor)? leftTabColor = props.leftTabColor : leftTabColor = "lightgreen";
  (props.rightTabColor)? rightTabColor = props.rightTabColor : rightTabColor = "pink";

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
            <Tab bg={leftTabColor} borderTopLeftRadius={15} /*onClick={() => loginTab()}*/>Login</Tab>
            <Tab bg={rightTabColor} borderTopRightRadius={15} /*onClick={/*() => registerTab()}*/>Register</Tab>
          </TabList>
          <TabPanels>
            <LoginForm/>
            {/* <RegisterForm /> */}
          </TabPanels>
        </Tabs>
      </ModalContent>
    </Modal>
  )
}

export default TabModal