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

function salesReport() {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [salesReports, setDataSalesReports] = useState(null);
  console.log(salesReports);
  const [isOpen, setIsOpen] = useState(false);
  const columns = [
    "Product Name",
    "Cashier Name",
    "Qty",
    "Price",
    "Start Date",
    "End Date",
  ];

  const openModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(isOpen);
  }, []);

  const fetchDataSalesReports = async () => {
    const result = await axios("http://localhost:3000/sales/report?", headers);
    setDataSalesReports(result?.data);
  };

  useEffect(() => {
    if (!salesReports) {
      fetchDataSalesReports();
    }
  }, [salesReports]);

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
            <Text color="black.600">Add Sales Report</Text>
          </Button>

          <Modal isOpen={isOpen} color="black" colorScheme="black">
            <ModalOverlay />
            <ModalAdd
              onCloseModal={closeModal}
              titleModal="Add Sales Report"
              idModal="report"
            ></ModalAdd>
          </Modal>
        </Box>
      </Flex>
      <Table columns={columns} data={salesReports} />
    </Flex>
  );
}

export default salesReport;
