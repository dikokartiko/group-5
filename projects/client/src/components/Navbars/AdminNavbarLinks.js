import React, { useState, useEffect, useCallback } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Icon,
  Text,
  Avatar,
  Modal,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import SidebarResponsive from "components/Sidebar/SidebarResponsive";
import PropTypes from "prop-types";
import routes from "routes.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ModalAddAvatar from "components/Modal/ModalAddAvatar";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  const navigate = useHistory();
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState(null);

  const openModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(isOpen);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const result = await axios("http://localhost:3000/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(result.data);
        const image = await axios.get(
          "http://localhost:3000/auth/profile-picture",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob",
          }
        );
        // Convert binary data into a data URL
        const reader = new FileReader();
        reader.onload = (e) => setUserAvatar(e.target?.result);
        reader.readAsDataURL(image?.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <Menu>
        <MenuButton as={Button} variant="transparent-with-icon">
          <Flex
            w="100%"
            flexDirection={{
              sm: "column",
              md: "row",
            }}
            alignItems={{ xl: "center" }}
          >
            {userAvatar ? (
              <Avatar
                me={{ md: "10px" }}
                src={userAvatar}
                w="40px"
                h="40px"
                borderRadius="100%"
              />
            ) : (
              <Icon
                color="grey.500"
                as={FaUserCircle}
                me="10px"
                w="40px"
                h="40px"
              />
            )}
            <Text display={{ sm: "none", md: "flex" }}>{data?.username}</Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={openModal}>Settings</MenuItem>
          <Modal isOpen={isOpen} color="black" colorScheme="black">
            <ModalOverlay />
            <ModalAddAvatar
              onCloseModal={closeModal}
              titleModal="Edit Profile Image"
              idModal="cashier"
            ></ModalAddAvatar>
          </Modal>
          <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        </MenuList>
      </Menu>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
