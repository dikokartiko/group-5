// Chakra imports
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TableCart = ({ columns, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card mt={"20px"}>
      <Table overflowX="scroll" variant="simple" color={textColor}>
        <Thead>
          <Tr my=".8rem" pl="0px" color="black.500">
            {columns.map((caption, idx) => {
              return (
                <Th color="black.500" key={idx} fontSize="14px">
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data?.length > 0 ? (
            <>
              {data?.map((row, key) => {
                return (
                  <TablesTableRow
                    key={key}
                    data={row}
                    name={row?.Product?.name}
                    tableID="transaction"
                    quantity={row?.quantity}
                    image={
                      `http://localhost:3000/products/image/${row?.Product?.id}` ||
                      FaUserCircle
                    }
                    price={row?.Product?.price}
                    totalPrice={row?.totalPrice}
                  />
                );
              })}
            </>
          ) : (
            <Text>Empty Cart!</Text>
          )}
        </Tbody>
      </Table>
    </Card>
  );
};

export default TableCart;
