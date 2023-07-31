import axios from "axios";
import { Box, Button, Divider, Input, Link, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";
import InputWithError from "../input/InputWithError";
import InputPassword from "../input/InputPassword";


const LoginForm = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const loginSchema = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(6, "Username setidaknya minimal 6 karakter!")
                .required("Username tidak boleh kosong!"),
            password: Yup.string()
                .min(6, "Password setidaknya minimal 6 karakter!")
                .required("Password tidak boleh kosong!")
        }),
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));

            // const axios = require("axios");
            await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/login", {
                username: values.username,
                password: values.password
            }).then(resp => {
                alert(`[resp.data]: ${resp.data}`);
            }).catch(error => {
                alert(`[error.response.data.err] ${error.response.data.err}`);
            });
            alert("Done");
        }
    });

    return (
        <Box bgColor={"white"} boxShadow='md' textColor={"black"} borderRadius={"md"} width={"93%"} paddingBottom={8} textAlign="center">
            <Text as="b" fontSize={"6xl"}>GROUP 5 POS</Text>
            <Text fontSize={"3xl"}>Login</Text>
            <form onSubmit={loginSchema.handleSubmit}>
                <InputWithError
                    errors={loginSchema.errors.username}
                    touched={loginSchema.touched.username}
                    presetInput={<Input type="text" name="username" placeholder='Username' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.username} onChange={loginSchema.handleChange}/>}
                />
                <InputWithError
                    errors={loginSchema.errors.password}
                    touched={loginSchema.touched.password}
                    presetInput={<InputPassword name="password" value={loginSchema.values.password} onChange={loginSchema.handleChange} handleClick={handleClick} show={show}/>}
                />
                <Box display={"flex"}>
                    <Button type="submit" colorScheme={"green"} flex={1} marginX="5">Masuk</Button>
                </Box>
            </form>
            <Divider marginTop="5" marginBottom="5"/>
            <Link href="#" color="blue.500">Lupa kata sandi?</Link>
        </Box>
    )
}

export default LoginForm