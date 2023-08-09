// Chakra imports
import {
    Flex,
    FormControl,
    FormLabel,
    useToast
  } from "@chakra-ui/react";

  import { Select } from "chakra-react-select";
  import { React } from "react";
  import axios from "axios";
  
  function findProduct(props) {
    const toast = useToast();
    const {dataProduct} = props;
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const listOptionsProduct = [];
    const handleOption = () => {
      var item = dataProduct?.map(function(val) {
        if (val.status && val.stock > 0) {
          return listOptionsProduct.push({
            label: val.name,
            option: val.id
          });
        }
        return listOptionsProduct;
      });
      return item;
    }
    handleOption();

    const handleAddToCart = async (e) => {
      const payload = {
        items: [
          {
            productId: e?.option,
            quantity: 1
          }
        ]
      }
      try {
        const res = await axios.post("http://localhost:3000/carts/", payload, headers);
        if (res.status === 200 || res.status === 201) {
          toast({
            title: res?.data?.message,
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
      <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
        <FormControl>
          <FormLabel fontSize="sm" fontWeight="500" mb={"10px"}>
            Add Product to Cart
          </FormLabel>
          <Select
            type="submit"
            name="product"
            options={listOptionsProduct}
            placeholder="Please select product..."
            onChange={(e) => handleAddToCart(e)}
            borderRadius="15px"
            fontSize="sm"
            size="md"
          />
        </FormControl>
      </Flex>
    );
  }
  
  export default findProduct;