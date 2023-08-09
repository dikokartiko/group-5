/*eslint-disable*/
// chakra imports
import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

import { React, useState, useEffect } from "react";
import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import { NavLink, useLocation } from "react-router-dom";
import IconBox from "components/Icons/IconBox";
import axios from "axios";

const SidebarContent = ({ logoText, routes }) => {
  let location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  const createLinks = (routes) => {
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    const [dataUser, setDataUser] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const token = localStorage.getItem("token");
        const result = await axios("http://localhost:3000/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDataUser(result.data);
      };
      fetchData();
    }, []);

    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }

      if (prop.rtlName !== 'authRoutes') {
        let routesTUPO = {},
            activeRoutes = false;
        if (dataUser?.roleId === 1) { //admin
          if (prop.routesComponent === 'admin') {
            routesTUPO = prop;
            activeRoutes = true;
          }
        }
        
        if (dataUser?.roleId === 2) { //cashier
          if (prop.routesComponent === 'cashier') {
            routesTUPO = prop;
            activeRoutes = true;
          }
        }

        if (activeRoutes) {
          return (
            <NavLink to={routesTUPO?.layout + routesTUPO?.path} key={key}>
              {activeRoute(routesTUPO?.layout + routesTUPO?.path) === "active" ? (
                <Button
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg={activeBg}
                  mb={{
                    xl: "12px",
                  }}
                  mx={{
                    xl: "auto",
                  }}
                  ps={{
                    sm: "10px",
                    xl: "16px",
                  }}
                  py="12px"
                  borderRadius="15px"
                  _hover="none"
                  w="100%"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <Flex>
                    {typeof routesTUPO?.icon === "string" ? (
                      <Icon>{routesTUPO?.icon}</Icon>
                    ) : (
                      <IconBox
                        bg="teal.300"
                        color="white"
                        h="30px"
                        w="30px"
                        me="12px"
                      >
                        {routesTUPO?.icon}
                      </IconBox>
                    )}
                    <Text color={activeColor} my="auto" fontSize="sm">
                      {document.documentElement.dir === "rtl"
                        ? routesTUPO?.rtlName
                        : routesTUPO?.name}
                    </Text>
                  </Flex>
                </Button>
              ) : (
                <Button
                  boxSize="initial"
                  justifyContent="flex-start"
                  alignItems="center"
                  bg="transparent"
                  mb={{
                    xl: "12px",
                  }}
                  mx={{
                    xl: "auto",
                  }}
                  py="12px"
                  ps={{
                    sm: "10px",
                    xl: "16px",
                  }}
                  borderRadius="15px"
                  _hover="none"
                  w="100%"
                  _active={{
                    bg: "inherit",
                    transform: "none",
                    borderColor: "transparent",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <Flex>
                    {typeof routesTUPO?.icon === "string" ? (
                      <Icon>{routesTUPO?.icon}</Icon>
                    ) : (
                      <IconBox
                        bg={inactiveBg}
                        color="teal.300"
                        h="30px"
                        w="30px"
                        me="12px"
                      >
                        {routesTUPO?.icon}
                      </IconBox>
                    )}
                    <Text color={inactiveColor} my="auto" fontSize="sm">
                      {document.documentElement.dir === "rtl"
                        ? routesTUPO?.rtlName
                        : routesTUPO?.name}
                    </Text>
                  </Flex>
                </Button>
              )}
            </NavLink>
          );
        }
      }
    });
  };

  const links = <>{createLinks(routes)}</>;

  return (
    <>
        <Box pt={"25px"} mb="12px">
          <Link
            href={`${process.env.PUBLIC_URL}/#/`}
            target="_blank"
            display="flex"
            lineHeight="100%"
            mb="30px"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center"
            fontSize="11px"
          >
            <CreativeTimLogo w="32px" h="32px" me="10px" />
            <Text fontSize="sm" mt="3px">
              {logoText}
            </Text>
          </Link>
          <Separator></Separator>
        </Box>
        <Stack direction="column" mb="40px">
          <Box>{links}</Box>
        </Stack>
    </>
  )
}

export default SidebarContent