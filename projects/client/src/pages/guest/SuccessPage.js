import React from 'react'
import BlankPage from '../BlankPage'
import FormCard from '../../components/card/FormCard'
import { Box, Text } from '@chakra-ui/react'
import { TbMailCheck } from 'react-icons/tb'

const SuccessPage = () => {
  return (
    <BlankPage>
        <FormCard>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <TbMailCheck size={70}/>
            </Box>
            <Text as="b" fontSize="2xl">Permintaan sudah kami terima</Text>
            <Text>Silahkan periksa email anda untuk instruksi berikutnya</Text>
        </FormCard>
    </BlankPage>
  )
}

export default SuccessPage