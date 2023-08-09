import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Switch
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

function UploadImageProduct({ onChange }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(event) => {
        const file = event.target.files[0];
        onChange(file);
      }}
    />
  );
}

function formsAddProduct(props) {
  const {
    productName,
    productImage,
    productPrice,
    productCategory,
    productDesc,
    productStock,
    productStatus
  } = props;

  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState(null);

  const getcategories = async () => {
    const result = await axios("http://localhost:3000/categories/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategories(result.data);
  };

  useEffect(() => {
    if (!categories) {
      getcategories();
    }
  }, [categories]);

  return (
    <div>
      <FormControl mb={5} mt={5}>
        <UploadImageProduct onChange={(file) => productImage(file)} />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Product Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Product Name..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => productName(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Category
        </FormLabel>
        <Select
          placeholder="Select Category..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => productCategory(e.target.value)}
        >
          {categories?.map((row, key) => {
            return (
              <option key={key} value={row?.id}>
                {row?.name}
              </option>
            );
          })}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Price
        </FormLabel>
        <Input
          type="number"
          name="price"
          placeholder="Price Product..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => productPrice(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Stock
        </FormLabel>
        <Input
          type="number"
          name="stock"
          placeholder="Stock Product..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => productStock(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Description
        </FormLabel>
        <Textarea
          name="description"
          placeholder="Description Product..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => productDesc(e.target.value)}
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="categoryStatus" fontSize="sm" fontWeight="500">
          Status
        </FormLabel>
        <Switch
          name="status"
          onChange={(e) => productStatus(e.target.checked)}
          id="productStatus"
        />
      </FormControl>
    </div>
  );
}

export default formsAddProduct;
