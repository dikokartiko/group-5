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

const TableSalesReport = ({ columns, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="black.500">
              {columns?.map((column, idx) => {
                return (
                  <Th color="black.500" key={idx} fontSize="14px">
                    {column}
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
                      tableID="report"
                      dataTableName="Sales Report"
                      name={row?.productName}
                      cashier={row?.User?.username}
                      price={row?.pricePerProduct}
                      quantity={row?.quantity}
                      startDate={row?.startDate}
                      endDate={row?.endDate}
                    />
                  );
                })}
              </>
            ) : (
              "Empty Sales Report Data!"
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableSalesReport;
