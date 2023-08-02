<<<<<<< Updated upstream
=======
import axios from "axios";
import { Box, Button, Divider, Input, Link, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import InputWithError from "../input/InputWithError";
import InputPassword from "../input/InputPassword";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const loginSchema = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9_.]+$/,
          "Hanya karakter alphanumerik, underscore, dan titik yang diperbolehkan!"
        )
        .required("Username tidak boleh kosong!"),
      password: Yup.string().required("Kata sandi tidak boleh kosong!"),
    }),
    onSubmit: async (values) => {
      const login = {
        username: values.username,
        password: values.password,
      };
      await axios
        .post("http://localhost:3000/auth/login", login)
        .then((resp) => {
          console.log(resp);
          const roleId = resp.data.user.roleId;
          const token = resp.data.token;
          const expiryTime = Date.now() + 60 * 60 * 1000;
          localStorage.setItem("token", token);
          localStorage.setItem("tokenExpiryTime", expiryTime);
          roleId === 1
            ? navigate("/admin/dashboard")
            : navigate("/cashier/dashboard");
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    },
  });

  return (
    <Box
      bgColor={"white"}
      boxShadow="md"
      textColor={"black"}
      borderRadius={"md"}
      width={"93%"}
      paddingBottom={8}
      textAlign="center">
      <Text as="b" fontSize={"6xl"}>
        TUPO
      </Text>
      <Divider marginTop="5" marginBottom="5" />
      <Text fontSize={"3xl"}>Masuk ke Dashboard</Text>
      <form onSubmit={loginSchema.handleSubmit}>
        <InputWithError
          errors={loginSchema.errors.username}
          touched={loginSchema.touched.username}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            bgColor="white"
            borderColor={"grey"}
            color={"black"}
            value={loginSchema.values.username}
            onChange={loginSchema.handleChange}
          />
        </InputWithError>
        <InputWithError
          errors={loginSchema.errors.password}
          touched={loginSchema.touched.password}>
          <InputPassword
            name="password"
            value={loginSchema.values.password}
            onChange={loginSchema.handleChange}
            handleClick={handleClick}
            show={show}
          />
        </InputWithError>
        <Box display={"flex"}>
          <Button type="submit" colorScheme={"green"} flex={1} marginX="5">
            Masuk
          </Button>
        </Box>
      </form>
      <Divider marginTop="5" marginBottom="5" />
      <Link href="/forgotPassword" color="blue.500">
        Lupa kata sandi?
      </Link>
    </Box>
  );
};

export default LoginForm;
>>>>>>> Stashed changes
