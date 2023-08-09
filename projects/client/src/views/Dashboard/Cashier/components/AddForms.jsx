import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import InputPassword from "components/Forms/InputPassword";

function formsAddCashier(props) {
  const {
    cashierUsername,
    cashierEmail,
    cashierPassword
  } = props;

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Username
        </FormLabel>
        <Input
          type="text"
          name="username"
          placeholder="Username..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => cashierUsername(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="sm" fontWeight="500">
          Email
        </FormLabel>
        <Input
          type="text"
          name="email"
          placeholder="Email..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => cashierEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputPassword
          type="password"
          name="password"
          placeholder="Password..."
          borderRadius="15px"
          mb="24px"
          fontSize="sm"
          size="lg"
          onChange={(e) => cashierPassword(e.target.value)}
          handleClick={handleClick}
          show={show}
        />
      </FormControl>
    </div>
  );
}

export default formsAddCashier;
