// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  toast,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgTUPO from "assets/img/BgSignUp.png";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputWithError from "components/Forms/InputWithError";
import InputPassword from "components/Forms/InputPassword";
import ConfirmPassword from "components/Forms/ConfirmPassword";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

function ResetPassword() {
  const nav = useHistory();
  const toast = useToast();
  const bgColor = useColorModeValue("white", "gray.700");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const params = useParams();
  const token = params.token;
  const resetPasswordSchema = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Kata sandi tidak boleh kosong!"),
      confirmPassword: Yup.string().required(
        "Konfirmasi kata sandi tidak boleh kosong!"
      ),
    }),
    onSubmit: async (values) => {
      await axios
        .post(`http://localhost:3000/auth/reset-password/${token}`, {
          password: values.password,
          confirmPassword: values.confirmPassword,
        })
        .then((resp) => {
          toast({
            title: "Reset password success",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          nav.push("/");
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: "Pastikan password sama",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    },
  });

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={BgTUPO}
        bgSize="cover"
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
      ></Box>
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        <Text fontSize="4xl" color="white" fontWeight="bold">
          RESET PASSWORD
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}
        >
          Please fill your new password
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          <form onSubmit={resetPasswordSchema.handleSubmit}>
            <InputWithError
              errors={resetPasswordSchema.errors.password}
              touched={resetPasswordSchema.touched.password}
            >
              <InputPassword
                name="password"
                value={resetPasswordSchema.values.password}
                onChange={resetPasswordSchema.handleChange}
                handleClick={handleClick}
                show={show}
              />
            </InputWithError>
            <InputWithError
              errors={resetPasswordSchema.errors.password}
              touched={resetPasswordSchema.touched.password}
            >
              <ConfirmPassword
                name="confirmPassword"
                value={resetPasswordSchema.values.confirmPassword}
                onChange={resetPasswordSchema.handleChange}
                handleClick={handleClick}
                show={show}
              />
            </InputWithError>
            <Button
              type="submit"
              bg="teal.300"
              fontSize="14px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}
            >
              Submit
            </Button>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ResetPassword;
