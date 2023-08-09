import React from "react";
import { Icon, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const LogOutButton = (props) => {
  const navigate = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate.push("/");
  };

  return (
    <Button
      p="0px"
      bg="transparent"
      mb={{ sm: "10px", md: "0px" }}
      me={{ md: "10px" }}
      onClick={handleLogout}
    >
      <Icon color="green.500" as={FaSignOutAlt} me="5px" />
    </Button>
  );
};

export default LogOutButton;
