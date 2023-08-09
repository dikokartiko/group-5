// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Table from "./components/Table";
import { tablesTableData } from "variables/general";

function product() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Table
        captions={["Product", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default product;
