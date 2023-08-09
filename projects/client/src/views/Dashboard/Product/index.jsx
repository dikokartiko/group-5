// Chakra imports
import {
  Flex,
  Button,
  Icon,
  Box,
  Text,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";

import { FaPlus } from "react-icons/fa";
import Table from "./components/Table";
import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import ModalAdd from "components/Modal/ModalAdd";

function product() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const column = [
    "Image",
    "Product Name",
    "Description",
    "Stock",
    "Status",
    "Action",
  ];
  const token = localStorage.getItem("token");

  const openModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(isOpen);
  }, []);

  const fetchData = async () => {
    const result = await axios(
      "http://localhost:3000/products/?sort=created_desc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setData(result.data);
  };

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data]);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          <Button
            bg="grey.500"
            border="1.5px solid"
            borderColor="grey.500"
            color="black.600"
            onClick={openModal}
          >
            <Icon color="black.600" as={FaPlus} fontSize="sm" />
            &nbsp;&nbsp;
            <Text color="black.600">Add Product</Text>
          </Button>

          <Modal isOpen={isOpen} color="black" colorScheme="black">
            <ModalOverlay />
            <ModalAdd
              onCloseModal={closeModal}
              titleModal="Add Product"
              idModal="product"
            ></ModalAdd>
          </Modal>
        </Box>
      </Flex>
      <Table captions={column} data={data?.data} />
    </Flex>
  );
}

export default product;
