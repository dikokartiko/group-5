import React, { useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { TbLockCog } from 'react-icons/tb'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import BlankPage from '../BlankPage'
import FormCard from '../../components/card/FormCard'
import InputWithError from '../../components/input/InputWithError'
import InputPassword from '../../components/input/InputPassword'

const ResetPasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickPassword = () => setShowPassword(!showPassword);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const resetPasswordSchema = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required("Kata sandi tidak boleh kosong!")
                .min(6, "Kata sandi setidaknya minimal 6 karakter!")
                .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_+=,{}[\]|:;'"><>?/])[a-zA-Z\d`~!@#$%^&*()_+=,{}[\]|:;'"><>?/]+$/, "Kata sandi harus kombinasi alphanumerik dan karakter spesial!"),
            confirmPassword: Yup.string()
                .required("Konfirmasi kata sandi tidak boleh kosong!")
                .oneOf([Yup.ref('password'), null], "Konfirmasi kata sandi tidak sama!")
        }),
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
  
            // const axios = require("axios");
            await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", {
                password: values.password,
            }).then(resp => {
                alert(`[resp.data]: ${resp.data}`);
            }).catch(error => {
                alert(`[error.response.data.err] ${error.response.data.err}`);
            });
            alert("Done");
        }
    });
  return (
    <BlankPage>
      <FormCard>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <TbLockCog size={70}/>
        </Box>
        <Text as="b" fontSize="2xl">Ubah Kata Sandi</Text>
        <Text>Kami akan membantu dalam memulihkan akun anda</Text>
        <form onSubmit={resetPasswordSchema.handleSubmit}>
            <InputWithError errors={resetPasswordSchema.errors.password} touched={resetPasswordSchema.touched.password}>
                <InputPassword name="password" value={resetPasswordSchema.values.password} onChange={resetPasswordSchema.handleChange} handleClick={handleClickPassword} show={showPassword}/>
            </InputWithError>
            <InputWithError errors={resetPasswordSchema.errors.confirmPassword} touched={resetPasswordSchema.touched.confirmPassword}>
                <InputPassword name="confirmPassword" isConfirm={true} value={resetPasswordSchema.values.confirmPassword} onChange={resetPasswordSchema.handleChange} handleClick={handleClickConfirmPassword} show={showConfirmPassword}/>
            </InputWithError>
          <Box display={"flex"}>
            <Button type="submit" colorScheme={"green"} flex={1} marginX="5">Simpan</Button>
          </Box>
        </form>
      </FormCard>
    </BlankPage>
  )
}

export default ResetPasswordPage