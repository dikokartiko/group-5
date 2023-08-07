import { Box, Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'

const PopoverButton = (props) => {
  return (
    <Popover placement='left' closeOnBlur={false}>
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
                <Button colorScheme='red'>Hapus</Button>
                <Button colorScheme='green'>Ubah</Button>
            </PopoverBody>
        </PopoverContent>
    </Popover>
  )
}

export default PopoverButton