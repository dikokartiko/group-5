import {
  Button,
  Flex,
  Divider,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import FormsCashier from "views/Dashboard/Cashier/components/AddForms";
import FormsCategory from "views/Dashboard/Product_Category/components/AddForms";
import FormsProduct from "views/Dashboard/Product/components/AddForms";
import FormsSalesReport from "views/Dashboard/Sales_Report/components/AddForms";

function modalAdd(props) {
  const toast = useToast();
  const token = localStorage.getItem("token");
  const { onCloseModal, titleModal, idModal } = props;
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const multipartHeaders = {
    ...headers,
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  //for cashier
  const apiCreateCashier = "http://localhost:3000/cashiers/";
  const [addCashierDataUsername, setCashierUsername] = useState(null);
  const [addCashierDataEmail, setCashierEmail] = useState(null);
  const [addCashierDataPassword, setCashierPassword] = useState(null);
  const addCashierUsername = (data) => {
    setCashierUsername(data);
  };
  const addCashierEmail = (data) => {
    setCashierEmail(data);
  };
  const addCashierPassword = (data) => {
    setCashierPassword(data);
  };
  const createCashier = {
    username: addCashierDataUsername,
    email: addCashierDataEmail,
    password: addCashierDataPassword,
    statusId: 2
  };

  //for category
  const apiCreateCategory = "http://localhost:3000/categories/";
  const [addCategoryDataName, setCategoryName] = useState(null);
  const [addCategoryDataStatus, setCategoryStatus] = useState(false);
  const addCategoryName = (data) => {
    setCategoryName(data);
  };
  const addCategoryStatus = (data) => {
    setCategoryStatus(data);
  };
  const createCategory = {
    name: addCategoryDataName,
    status: addCategoryDataStatus ? 1 : 0,
  };

  //for product
  const apiCreateProduct = "http://localhost:3000/products/";
  const [addProductDataName, setProductName] = useState("");
  const [addProductDataImage, setProductImage] = useState(false);
  const [addProductDataPrice, setProductPrice] = useState("");
  const [addProductDataCategory, setProductCategory] = useState(false);
  const [addProductDataDesc, setProductDesc] = useState("");
  const [addProductDataStock, setProductStock] = useState("");
  const [addProductDataStatus, setProductStatus] = useState(false);
  const addProductName = (data) => {
    setProductName(data);
  };
  const addProductImage = (data) => {
    setProductImage(data);
  };
  const addProductPrice = (data) => {
    setProductPrice(data);
  };
  const addProductCategory = (data) => {
    setProductCategory(data);
  };
  const addProductDesc = (data) => {
    setProductDesc(data);
  };
  const addProductStock = (data) => {
    setProductStock(data);
  };
  const addProductStatus = (data) => {
    setProductStatus(data);
  };
  const formDataAddProduct = new FormData();
  const createProduct = {
    name: addProductDataName,
    price: addProductDataPrice,
    categoryId: addProductDataCategory,
    description: addProductDataDesc,
    image: addProductDataImage,
    stock: addProductDataStock,
    status: addProductDataStatus ? 1 : 0,
  };
  formDataAddProduct.append("name", createProduct.name);
  formDataAddProduct.append("price", createProduct.price);
  formDataAddProduct.append("categoryId", createProduct.categoryId);
  formDataAddProduct.append("description", createProduct.description);
  formDataAddProduct.append("image", createProduct.image);
  formDataAddProduct.append("stock", createProduct.stock);
  formDataAddProduct.append("status", createProduct.status);

  //for sales report
  const apiCreateSalesReport = "http://localhost:3000/sales/";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const reportStartDate = (data) => {
    setStartDate(data);
  };
  const reportEndDate = (data) => {
    setEndDate(data);
  };
  const formatDate = (date) => {
    const year = date?.getFullYear();
    const month = (date?.getMonth() + 1).toString().padStart(2, "0");
    const day = date?.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const createSalesReport = {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let createData = "";
      if (idModal === "cashier") {
        createData = await axios.post(apiCreateCashier, createCashier, headers);
      }

      if (idModal === "category") {
        createData = await axios.post(apiCreateCategory, createCategory, headers);
      }

      if (idModal === "product") {
        createData = await axios.post(apiCreateProduct, formDataAddProduct, multipartHeaders);
      }

      if (idModal === "report") {
        createData = await axios.post(apiCreateSalesReport, createSalesReport, headers);
      }

      const res = createData;
      if (res.status === 200 || res.status === 201) {
        props.onCloseModal();
        const messageSuccess = res?.data?.message ? res?.data?.message : `Data is ${res.statusText}`;
        toast({
          title: messageSuccess,
          status: "success",
          showDuration: 3000,
          isClosable: true,
          timeOut: 3000,
        });
        setInterval(() => {
          window.location.reload(false);
        }, 2000);
      }
    } catch (e) {
      toast({
        title: "Failed create the data!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ModalContent>
      <ModalHeader>{titleModal}</ModalHeader>
      <Divider borderColor={"gray"} />
      <form onSubmit={handleSubmit}>
        <ModalBody>
          {idModal === "cashier" ? (
            <FormsCashier
              cashierUsername={addCashierUsername}
              cashierEmail={addCashierEmail}
              cashierPassword={addCashierPassword}
            ></FormsCashier>
          ) : (
            ""
          )}
          {idModal === "category" ? (
            <FormsCategory
              categoryName={addCategoryName}
              categoryStatus={addCategoryStatus}
            ></FormsCategory>
          ) : (
            ""
          )}
          {idModal === "product" ? (
            <FormsProduct
              productName={addProductName}
              productImage={addProductImage}
              productPrice={addProductPrice}
              productCategory={addProductCategory}
              productDesc={addProductDesc}
              productStock={addProductStock}
              productStatus={addProductStatus}
            ></FormsProduct>
          ) : (
            ""
          )}
          {idModal === "report" ? (
            <FormsSalesReport
              reportStartDate={reportStartDate}
              reportEndDate={reportEndDate}
              valueStartDate={startDate}
              valueEndDate={endDate}
            ></FormsSalesReport>
          ) : (
            ""
          )}
        </ModalBody>
        <Divider borderColor={"gray"} />
        <ModalFooter>
          <Flex align="center" gap={3}>
            <Button
              type="submit"
              fontSize={13}
              colorScheme="green"
              pl={4}
              pr={4}
              pt={2}
              pb={2}
            >
              Submit
            </Button>
            <Button
              fontSize={13}
              color="grey.400"
              bg="gray.400"
              onClick={onCloseModal}
              pl={4}
              pr={4}
              pt={2}
              pb={2}
            >
              Cancel
            </Button>
          </Flex>
        </ModalFooter>
      </form>
    </ModalContent>
  );
}

export default modalAdd;
