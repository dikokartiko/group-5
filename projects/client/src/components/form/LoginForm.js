import axios from "axios";
import { Box, Button, Input, ModalBody, ModalFooter, Select, TabPanel } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React, { useState }  from 'react'
import * as Yup from "yup";
import InputWithError from "../input/InputWithError";


const LoginForm = () => {
    const [text, setText] = useState("Login")
    const [inputOption, setInputOption] = useState("");
  
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
        <Box>
            <form onSubmit={loginSchema.handleSubmit}>
                <InputWithError 
                    errors={loginSchema.errors.username} 
                    touched={loginSchema.touched.username} 
                    presetInput={<Input type="text" name="username" placeholder='Username' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.username} onChange={loginSchema.handleChange}/>}
                />
                <InputWithError 
                    errors={loginSchema.errors.password} 
                    touched={loginSchema.touched.password} 
                    presetInput={<Input type="password" name="password" placeholder='Password' bgColor="white" borderColor={"grey"} color={"black"} value={loginSchema.values.password} onChange={loginSchema.handleChange}/>}
                />
                <ModalFooter>
                    <Button type="submit" colorScheme={"green"}>
                        {text}
                    </Button>
                </ModalFooter>
            </form>
        </Box>
    )
}

export default LoginForm