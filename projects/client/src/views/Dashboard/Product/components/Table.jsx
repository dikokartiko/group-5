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

const TableProduct = ({ captions, data }) => {
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
            {data?.length > 0 ? (
              <>
                {data?.map((row, key) => {
                  return (
                    <TablesTableRow
                      key={key}
                      data={row}
                      dataTableName="Product"
                      name={row?.name}
                      tableID="product"
                      description={row?.description}
                      stock={row?.stock || "0"}
                      image={
                        `http://localhost:3000/products/image/${row.id}` ||
                        FaUserCircle
                      }
                      status={row?.status}
                    />
                  );
                })}
              </>
            ) : (
              "Empty Product Data!"
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableProduct;
