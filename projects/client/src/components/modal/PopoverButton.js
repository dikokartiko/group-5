import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { TbPencil, TbTrash } from 'react-icons/tb'

const PopoverButton = (props) => {
  return (
    <Popover key={props.key} placement='left-end' closeOnBlur={false} onClose={props.onClose} isOpen={props.isOpen} onOpen={props.onOpen}>
        <PopoverTrigger>
            {props.children}
        </PopoverTrigger>
        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
            <PopoverHeader pt={4} fontWeight='bold' border='0'>
                Pilih aksi
            </PopoverHeader>
            <PopoverArrow bg='blue.800' />
            <PopoverCloseButton />
            <PopoverBody display={"flex"} justifyContent={"space-between"}>
                <Button colorScheme='red' flex={1} marginRight={3} onClick={props.onClickButton1}><TbTrash /><Text marginLeft={3}>Hapus</Text></Button>
                <Button colorScheme='green' flex={1} onClick={props.onClickButton2}><TbPencil /><Text marginLeft={3}>Ubah</Text></Button>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

export default PopoverButton