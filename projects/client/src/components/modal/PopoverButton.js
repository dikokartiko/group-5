import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react'
import React from 'react'
import { TbPencil, TbTrash } from 'react-icons/tb'

const PopoverButton = (props) => {
  return (
    <Popover placement='left-end' closeOnBlur={false}>
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
                <Button colorScheme='red' flex={1} marginRight={3} onClick={props.onClick}><TbTrash /><Text marginLeft={3}>Hapus</Text></Button>
                <Button colorScheme='green' flex={1} onClick={props.onClick}><TbPencil /><Text marginLeft={3}>Ubah</Text></Button>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

export default PopoverButton