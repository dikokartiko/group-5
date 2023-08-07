// Chakra imports
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TableCashier = ({ captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="black.500">
              {captions.map((caption, idx) => {
                return (
                  <Th color="black.500" key={idx} fontSize="14px">
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((row, key) => {
              return (
                <TablesTableRow
                  key={key}
                  dataTableName="Cashier"
                  data={row}
                  tableID="cashier"
                  name={row?.username}
                  email={row?.email}
                  image={
                    `http://localhost:3000/auth/avatar/${row.id}` ||
                    FaUserCircle
                  }
                  status={row?.status}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableCashier;
