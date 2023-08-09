import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Icon,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";
import { React, useState, useCallback } from "react";
import ModalDelete from "../Modal/ModalDelete";
import ModalEdit from "../Modal/ModalEdit";
import ModalViewDetail from "../Modal/ModalViewDetail";
import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import "./TablesTableRow.css";

function TablesTableRow(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [actionModal, setActionModal] = useState(null);
  const {
    data,
    image,
    name,
    email,
    description,
    stock,
    status,
    dataTableName,
    tableID,
    quantity,
    price,
    totalPrice,
    startDate,
    endDate,
    cashier,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  let statusLabel = "";
  status ? (statusLabel = "Active") : (statusLabel = "Inactive");
  const startateFormat = new Date(startDate);
  const endDateFormat = new Date(endDate);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const fixStartDate = formatDate(startateFormat);
  const fixEndDate = formatDate(endDateFormat);
  const openModal = useCallback(
    (id, action) => () => {
      setIsOpen(!isOpen);
      setActionModal(action);
    },
    []
  );
  const closeModal = useCallback(
    (id) => () => {
      setIsOpen(isOpen);
    },
    []
  );
  return (
    <Tr>
      {image ? (
        <Td>
          <Flex direction="column">
            <Avatar src={image} w="50px" borderRadius="12px" me="18px" />
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {name ? (
        <Td minWidth={{ sm: "250px" }}>
          <Flex align="center" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="normal"
                minWidth="100%"
              >
                {name}
              </Text>
            </Flex>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {cashier ? (
        <Td minWidth={{ sm: "250px" }}>
          <Flex align="center" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="normal"
                minWidth="100%"
              >
                {cashier}
              </Text>
            </Flex>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {email ? (
        <Td>
          <Flex direction="column">
            <Text fontSize="sm" color="black.500" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {description ? (
        <Td>
          <Flex direction="column">
            <Text
              noOfLines={3}
              fontSize="sm"
              color="black.500"
              fontWeight="normal"
            >
              {description}
            </Text>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {stock ? (
        <Td>
          <Flex direction="column">
            <Text fontSize="sm" color="black.500" fontWeight="normal">
              {stock}
            </Text>
          </Flex>
        </Td>
      ) : (
        <>
          {quantity ? (
            <Td>
              <Flex direction="column">
                <Text fontSize="sm" color="black.500" fontWeight="normal">
                  {quantity}
                </Text>
              </Flex>
            </Td>
          ) : (
            ""
          )}
        </>
      )}

      {tableID !== "transaction" && tableID !== "report" ? (
        <Td>
          <Badge
            bg={status ? "green.400" : bgStatus}
            color={status ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="20px"
          >
            {statusLabel}
          </Badge>
        </Td>
      ) : (
        <>
          {price ? (
            <Td>
              <Flex direction="column">
                <Text fontSize="sm" color="black.500" fontWeight="normal">
                  {price}
                </Text>
              </Flex>
            </Td>
          ) : (
            ""
          )}
        </>
      )}

      {totalPrice ? (
        <Td>
          <Flex direction="column">
            <Text fontSize="sm" color="black.500" fontWeight="normal">
              {totalPrice}
            </Text>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {startDate ? (
        <Td>
          <Flex direction="column">
            <Text
              noOfLines={3}
              fontSize="sm"
              color="black.500"
              fontWeight="normal"
            >
              {fixStartDate}
            </Text>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {endDate ? (
        <Td>
          <Flex direction="column">
            <Text
              noOfLines={3}
              fontSize="sm"
              color="black.500"
              fontWeight="normal"
            >
              {fixEndDate}
            </Text>
          </Flex>
        </Td>
      ) : (
        ""
      )}

      {tableID !== "report" ? (
        <Td w="50px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb="24px"
            w="110px"
          >
            {tableID !== "transaction" ? (
              <Button
                variant="no-hover"
                onClick={openModal(data?.id, "viewDetail")}
              >
                <Icon color="blue.500" as={FaEye} me="10px" w="20px" h="20px" />
              </Button>
            ) : (
              ""
            )}

            {tableID !== "transaction" ? (
              <Button variant="no-hover" onClick={openModal(data.id, "edit")}>
                <Icon
                  color="green.500"
                  as={FaPencilAlt}
                  me="10px"
                  w="15px"
                  h="15px"
                />
              </Button>
            ) : (
              ""
            )}

            {tableID !== "product" ? (
              <Button
                variant="no-hover"
                onClick={openModal(data?.id, "delete")}
              >
                <Icon
                  color="red.500"
                  as={FaTrashAlt}
                  me="10px"
                  w="15px"
                  h="15px"
                />
              </Button>
            ) : (
              ""
            )}
          </Flex>

          <Modal isOpen={isOpen} color="black" colorScheme="black">
            <ModalOverlay />
            {actionModal === "viewDetail" ? (
              <ModalViewDetail
                onCloseModal={closeModal(data.id)}
                dataDetail={data}
                titleModal={dataTableName}
                idModal={tableID}
              ></ModalViewDetail>
            ) : (
              ""
            )}
            {actionModal === "edit" ? (
              <ModalEdit
                onCloseModal={closeModal(data.id)}
                dataEdit={data}
                titleModal={dataTableName}
                idModal={tableID}
              ></ModalEdit>
            ) : (
              ""
            )}
            {actionModal === "delete" ? (
              <ModalDelete
                onCloseModal={closeModal(data.id)}
                dataDelete={data}
                titleModal={dataTableName}
                idModal={tableID}
              ></ModalDelete>
            ) : (
              ""
            )}
          </Modal>
        </Td>
      ) : (
        ""
      )}
    </Tr>
  );
}

export default TablesTableRow;
