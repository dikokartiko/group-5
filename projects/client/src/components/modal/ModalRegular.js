import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const ModalRegular = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{props.body}</ModalBody>
            <ModalFooter>
                {
                    (props.secondaryButton)? <Button variant='ghost'>{props.secondaryButton}</Button>
                    : <></>
                }
                <Button colorScheme={props.defaultButtonColor} mr={3} onClick={props.onClose}>{props.primaryButton}</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default ModalRegular