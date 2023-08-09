import { Button, Input, InputGroup, InputRightElement, FormLabel, FormControl } from '@chakra-ui/react'

const InputPassword = (props) => {
  return (
    <FormControl mb='20px'>
      <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
        Password
      </FormLabel>
      <InputGroup size='md'>
        <Input
          name={props.name}
          borderRadius='15px'
          fontSize='sm'
          type={props.show ? 'text' : 'password'}
          placeholder='Your password'
          size='lg'
          value={props.value}
          onChange={props.onChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={props.handleClick} colorscheme={props.show? "red" : "gray"} >
            {props.show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default InputPassword