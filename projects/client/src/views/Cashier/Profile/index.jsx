// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Table from "./components/Table";
import { tablesTableData } from "variables/general";

function cashier() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Table
        captions={["Cashier", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default cashier;
