import {
  Button,
  Flex,
  Divider,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
  Icon
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";

import React, { useState } from "react";
import axios from "axios";
import FormsCashier from "views/Dashboard/Cashier/components/EditForms";
import FormsCategory from "views/Dashboard/Product_Category/components/EditForms";
import FormsProduct from "views/Dashboard/Product/components/EditForms";

function modalEdit(props) {
  const toast = useToast();
  const token = localStorage.getItem("token");
  const { dataEdit, onCloseModal, titleModal, idModal } = props;
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
  const apiUpdateCashier = `http://localhost:3000/cashiers/${dataEdit?.id}`;
  const [updateCashierDataUsername] = useState(dataEdit?.username);
  const [updateCashierDataEmail] = useState(dataEdit?.email);
  const [updateCashierDataStatus, setCashierStatus] = useState(dataEdit?.status);
  const updateCashierStatus = (data) => {
    setCashierStatus(data);
  };
  const updateCashier = {
    username: updateCashierDataUsername,
    email: updateCashierDataEmail,
    status: updateCashierDataStatus
  };

  //for category
  const apiUpdateCategory = `http://localhost:3000/categories/${dataEdit?.id}`;
  const [updateCategoryDataName, setCategoryName] = useState(dataEdit?.name);
  const [updateCategoryDataStatus, setCategoryStatus] = useState(dataEdit?.status);
  const updateCategoryName = (data) => {
    setCategoryName(data);
  };
  const updateCategoryStatus = (data) => {
    setCategoryStatus(data);
  };
  const updateCategory = {
    name: updateCategoryDataName,
    status: updateCategoryDataStatus ? 1 : 0,
  };

  //for product
  const apiUpdateProduct = `http://localhost:3000/products/${dataEdit?.id}`;
  const [updateProductDataName, setProductName] = useState(dataEdit?.name);
  const [updateProductDataImage, setProductImage] = useState(dataEdit?.image);
  const [updateProductDataPrice, setProductPrice] = useState(dataEdit?.price);
  const [updateProductDataCategory, setProductCategory] = useState(dataEdit?.categoryId);
  const [updateProductDataDesc, setProductDesc] = useState(dataEdit?.description);
  const [updateProductDataStock, setProductStock] = useState(dataEdit?.stock);
  const [updateProductDataStatus, setProductStatus] = useState(dataEdit?.status);
  const updateProductName = (data) => {
    setProductName(data);
  };
  const updateProductImage = (data) => {
    setProductImage(data);
  };
  const updateProductPrice = (data) => {
    setProductPrice(data);
  };
  const updateProductCategory = (data) => {
    setProductCategory(data);
  };
  const updateProductDesc = (data) => {
    setProductDesc(data);
  };
  const updateProductStock = (data) => {
    setProductStock(data);
  };
  const updateProductStatus = (data) => {
    setProductStatus(data);
  };
  const formDataUpdateProduct = new FormData();
  const updateProduct = {
    name: updateProductDataName,
    price: updateProductDataPrice,
    categoryId: updateProductDataCategory,
    description: updateProductDataDesc,
    image: updateProductDataImage,
    stock: updateProductDataStock,
    status: updateProductDataStatus ? 1 : 0,
  };
  formDataUpdateProduct.append("name", updateProduct.name);
  formDataUpdateProduct.append("price", updateProduct.price);
  formDataUpdateProduct.append("categoryId", updateProduct.categoryId);
  formDataUpdateProduct.append("description", updateProduct.description);
  formDataUpdateProduct.append("image", updateProduct.image);
  formDataUpdateProduct.append("stock", updateProduct.stock);
  formDataUpdateProduct.append("status", updateProduct.status);

  let [isEdit, setIsEdit] = useState(true);
  const enableEdit = () => {
    if (isEdit) {
      setIsEdit(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let updateData = "";
      if (idModal === "cashier") {
        updateData = await axios.put(apiUpdateCashier, updateCashier, headers);
      }

      if (idModal === "category") {
        updateData = await axios.put(apiUpdateCategory, updateCategory, headers);
      }

      if (idModal === "product") {
        updateData = await axios.put(apiUpdateProduct, formDataUpdateProduct, multipartHeaders);
      }

      const res = updateData;
      if (res.status === 200 || res.status === 201) {
        props.onCloseModal();
        toast({
          title: "Data is updated",
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
        title: "Failed update the data!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ModalContent>
      <Flex align="center" gap={3}>
        <ModalHeader flex="unset">{titleModal}</ModalHeader>
        <Button variant="no-hover" m={0} mx="auto" onClick={enableEdit}>
          <Icon
            color="green.500"
            as={FaPencilAlt}
            me="10px"
            w="15px"
            h="15px"
          />
        </Button>
      </Flex>
      <Divider borderColor={"gray"} />
      <form onSubmit={handleSubmit}>
        <ModalBody>
          {idModal === "cashier" ? (
            <FormsCashier
              dataEdit={updateCashier}
              enableEdit={isEdit}
              cashierStatus={updateCashierStatus}
            ></FormsCashier>
          ) : (
            ""
          )}
          {idModal === "category" ? (
            <FormsCategory
              enableEdit={isEdit}
              dataEdit={updateCategory}
              categoryName={updateCategoryName}
              categoryStatus={updateCategoryStatus}
            ></FormsCategory>
          ) : (
            ""
          )}
          {idModal === "product" ? (
            <FormsProduct
              enableEdit={isEdit}
              dataEdit={updateProduct}
              productName={updateProductName}
              productImage={updateProductImage}
              productPrice={updateProductPrice}
              productCategory={updateProductCategory}
              productDesc={updateProductDesc}
              productStock={updateProductStock}
              productStatus={updateProductStatus}
            ></FormsProduct>
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
              Update
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

export default modalEdit;
