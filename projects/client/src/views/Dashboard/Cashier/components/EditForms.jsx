import { FormControl, FormLabel, Input, Switch} from "@chakra-ui/react";
import React from "react";

function formsEditCashier(props) {
  const {
    dataEdit,
    enableEdit,
    cashierStatus
  } = props;

  return (
    <div>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Username
        </FormLabel>
        <Input
          value={dataEdit?.username}
          type="text"
          name="username"
          disabled
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Email
        </FormLabel>
        <Input
          value={dataEdit?.email}
          type="text"
          name="email"
          disabled
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
        />
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="categoryStatus" fontSize="sm" fontWeight="500">
          Status
        </FormLabel>
        <Switch
          isChecked={dataEdit?.status}
          name="status"
          disabled={enableEdit}
          onChange={(e) => cashierStatus(e.target.checked)}
          id="cashierStatus"
        />
      </FormControl>
    </div>
  );
}

export default formsEditCashier;
