// Chakra imports
import {
  Flex,
  Button,
  Icon,
  Box,
  Text,
  Modal,
  ModalOverlay,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import Table from "./components/Table";
import FindProduct from "./components/FindProduct";
import CalculationCart from "./components/Calculator";
import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import ModalAdd from "components/Modal/ModalAdd";
import "./components/customDashboard.css";

function transaction() {
  const [dataCart, setDataCart] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  const token = localStorage.getItem("token");
  const columnCart = [
    "Image",
    "Product Name",
    "Qty",
    "Price",
    "Total Price",
    "Action",
  ];
  
  const fetchDataCart = async () => {
    const result = await axios.get("http://localhost:3000/carts/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDataCart(result.data);
  };

  const fetchDataProduct = async () => {
    const result = await axios(
      "http://localhost:3000/products/?sort=created_desc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setDataProduct(result?.data?.data);
  };

  useEffect(() => {
    if (!dataProduct) {
      fetchDataProduct();
    }

    if (!dataCart) {
      fetchDataCart();
    }
  }, [dataCart, dataProduct]);

  return (
    <Flex direction="column" pt={{ md: "75px" }} overflowX="auto">
      <SimpleGrid columns={2} spacing={5}>
        <Box>
          <FindProduct dataProduct={dataProduct}></FindProduct>
        </Box>
        <Box>
          <CalculationCart data={dataCart}/>
        </Box>
      </SimpleGrid>
      <Table columns={columnCart} data={dataCart} />
    </Flex>
  );
}

export default transaction;
