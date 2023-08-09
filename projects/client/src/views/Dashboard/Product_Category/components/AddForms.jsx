import { FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";
import React from "react";

function formsAddCategory(props) {
  const { categoryName, categoryStatus } = props;

  return (
    <div>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Category Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Category Name..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => categoryName(e.target.value)}
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="categoryStatus" fontSize="sm" fontWeight="500">
          Status
        </FormLabel>
        <Switch
          name="status"
          onChange={(e) => categoryStatus(e.target.checked)}
          id="categoryStatus"
        />
      </FormControl>
    </div>
  );
}

export default formsAddCategory;
