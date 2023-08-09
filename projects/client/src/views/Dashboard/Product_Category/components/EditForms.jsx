import { FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";
import { React, useState } from "react";

function formsEditCategory(props) {
  const { dataEdit, enableEdit, categoryName, categoryStatus } = props;

  return (
    <div>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Category Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          placeholder="Category Name"
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          disabled={enableEdit}
          size="lg"
          value={dataEdit?.name}
          onChange={(e) => categoryName(e.target.value)}
        />
      </FormControl>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="categoryStatus" fontSize="sm" fontWeight="500">
          Status
        </FormLabel>
        <Switch
          name="status"
          disabled={enableEdit}
          onChange={(e) => categoryStatus(e.target.checked)}
          id="categoryStatus"
          isChecked={dataEdit?.status}
        />
      </FormControl>
    </div>
  );
}

export default formsEditCategory;
