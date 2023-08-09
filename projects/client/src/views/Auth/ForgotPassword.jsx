// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const nav = useHistory();
  const toast = useToast();
  const bgColor = useColorModeValue("white", "gray.700");
  const forgotPasswordSchema = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email tidak boleh kosong!")
        .email("Format email tidak benar!"),
    }),
    onSubmit: async (values) => {
      await axios
        .post("http://localhost:3000/auth/reset-password", {
          email: values.email,
        })
        .then((resp) => {
          toast({
            title: "Check your mail for changes password.",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          nav.push("/");
        })
        .catch((error) => {
          toast({
            title: error,
            status: "error",
            duration: 1000,
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
        bgImage={BgSignUp}
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
          Please fill your email to reset your password
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
          <form onSubmit={forgotPasswordSchema.handleSubmit}>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              name="email"
              placeholder="Your email address"
              mb="24px"
              size="lg"
              value={forgotPasswordSchema.values.email}
              onChange={forgotPasswordSchema.handleChange}
            />
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

export default ForgotPassword;
