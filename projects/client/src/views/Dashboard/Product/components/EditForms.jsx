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

function UploadImageProduct(props) {
    const { disabled, onChange } = props;
    return (
      <input
        type="file"
        accept="image/*"
        disabled={disabled}
        onChange={(event) => {
          const file = event.target.files[0];
          onChange(file);
        }}
      />
    );
}

function formsEditProduct(props) {
  const {
    dataEdit,
    enableEdit,
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
        <UploadImageProduct disabled={enableEdit} onChange={(file) => productImage(file)} />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Product Name
        </FormLabel>
        <Input
          type="text"
          value={dataEdit?.name}
          name="name"
          placeholder={dataEdit?.name}
          disabled={enableEdit}
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
          value={dataEdit?.categoryId}
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          disabled={enableEdit}
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
          value={dataEdit?.price}
          type="number"
          name="price"
          placeholder={dataEdit?.price}
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          disabled={enableEdit}
          size="lg"
          onChange={(e) => productPrice(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Stock
        </FormLabel>
        <Input
          value={dataEdit?.stock}
          type="number"
          name="stock"
          placeholder={dataEdit?.stock}
          borderRadius="15px"
          disabled={enableEdit}
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
          value={dataEdit?.description}
          name="description"
          placeholder={dataEdit?.description}
          disabled={enableEdit}
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
          disabled={enableEdit}
          onChange={(e) => productStatus(e.target.checked)}
          id="categoryStatus"
          isChecked={dataEdit?.status}
        />
      </FormControl>
    </div>
  );
}

export default formsEditProduct;
