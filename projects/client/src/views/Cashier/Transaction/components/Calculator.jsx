// Chakra imports
import {
  Flex,
  Button,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Box,
  Input,
  useToast,
} from "@chakra-ui/react";
import { React, useState } from "react";
import axios from "axios";

function CalculationCart(props) {
  const toast = useToast();
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = props;
  const [updateAmountField, setAmountField] = useState(null);

  const dataTotalCarts = data?.map((cart) => {
    return cart.totalPrice;
  });
  const countTotalPrice = dataTotalCarts?.reduce((a, b) => (a = a + b), 0);

  let countAmountReturn = 0;
  if (updateAmountField) {
    countAmountReturn = updateAmountField - countTotalPrice;
  }

  let disableCheckoutButton = true;
  if (updateAmountField >= countTotalPrice) {
    disableCheckoutButton = false;
  }
  ``;
  const amountField = (data) => {
    const regex = /^[0-9\b]+$/;
    if (data.target.value === "" || regex.test(data.target.value)) {
      setAmountField(data.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/transactions/",
        { amount: countTotalPrice },
        headers
      );
      if (res.status === 200 || res.status === 201) {
        toast({
          title: `Data is ${res.statusText}`,
          status: "success",
          showDuration: 3000,
          isClosable: true,
          timeOut: 3000,
        });
        setInterval(() => {
          window.location.reload(false);
        }, 2000);
      }
    } catch (e) {
      toast({
        title: "Failed create the data!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Amount
        </FormLabel>
        <Input
          type="number"
          name="input"
          placeholder="0"
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          value={updateAmountField}
          onChange={amountField}
        />
      </FormControl>
      <Box mb={"20px"}>
        <Text fontSize="md">Amount Return :</Text>
        <Text fontSize="4xl">Rp.{countAmountReturn}</Text>
      </Box>
      <Box mb={"20px"}>
        <Text fontSize="2xl">Total :</Text>
        <Text fontSize="5xl">Rp.{countTotalPrice}</Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          fontSize={13}
          colorScheme="blue"
          disabled={disableCheckoutButton}
          pl={4}
          pr={4}
          pt={2}
          pb={2}
          w={"100%"}
        >
          Checkout
        </Button>
      </form>
    </Flex>
  );
}

export default CalculationCart;
