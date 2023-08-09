import React, { useState } from "react";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputWithError from "components/Forms/InputWithError";
import InputPassword from "components/Forms/InputPassword";
import "./customAuth.css";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import backgroundHeader from "assets/img/ProfileBackground.png";

function SignIn() {
  const nav = useHistory();
  const toast = useToast();
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );

  const backgroundProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const loginSchema = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username tidak boleh kosong!"),
      password: Yup.string().required("Kata sandi tidak boleh kosong!"),
    }),
    onSubmit: async (values) => {
      await axios
        .post("http://localhost:3000/auth/login", {
          username: values.username,
          password: values.password,
        })
        .then((resp) => {
          toast({
            title: "Logged in successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          localStorage.setItem("token", resp.data.token);
          resp.data.user.roleId === 1
            ? nav.push("/admin")
            : nav.push("/cashier");
        })
        .catch((error) => {
          toast({
            title: `${error.response.data.error}`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    },
  });

  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="30px" textAlign="center">
              LOGIN
            </Heading>
            <form onSubmit={loginSchema.handleSubmit}>
              <InputWithError
                errors={loginSchema.errors.username}
                touched={loginSchema.touched.username}
              >
                <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Username
                  </FormLabel>
                  <Input
                    type="text"
                    name="username"
                    placeholder="Your Username"
                    value={loginSchema.values.username}
                    onChange={loginSchema.handleChange}
                    borderRadius="15px"
                    mb="24px"
                    fontSize="sm"
                    size="lg"
                  />
                </FormControl>
              </InputWithError>
              <InputWithError
                errors={loginSchema.errors.password}
                touched={loginSchema.touched.password}
              >
                <FormControl>
                  <InputPassword
                    name="password"
                    value={loginSchema.values.password}
                    onChange={loginSchema.handleChange}
                    handleClick={handleClick}
                    show={show}
                  />
                </FormControl>
              </InputWithError>
              <Button
                fontSize="14px"
                type="submit"
                bg="teal.300"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}
              >
                SIGN IN
              </Button>
            </form>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Forgot Your Password?
                <Link
                  to="/auth/forgotPassword"
                  color={titleColor}
                  as={ReactRouterLink}
                  ms="5px"
                  fontWeight="bold"
                >
                  Reset Password Here
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          bgImage={backgroundHeader}
          bgPosition="50%"
          bgRepeat="no-repeat"
          justifyContent="center"
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100vh"
          w="50%"
          position="absolute"
          right="0px"
        >
          <Box
            justifyContent="center"
            display={{ base: "none", md: "block" }}
            overflowX="hidden"
            h="100vh"
            w="100%"
            position="relative"
            left="0px"
          >
            <Text 
              color={"white"}
              position="absolute"
              right="0px"
              fontSize={"30px"}
              top="50%"
              w="100%"
              fontWeight="bold"
              textAlign={"center"}
            >
              TUPO CASHIER APP
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
