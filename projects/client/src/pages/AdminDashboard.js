import React from "react";
import {
  Box,
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../components/table/Dashboard";
import ManageCashiers from "../components/table/ManageCashiers";
import ManageProducts from "../components/table/ManageProducts";

const AdminDashboard = () => {
  return (
    <Router>
      <Flex>
        <Box bg="gray.700" color="white" p={5}>
          <Heading size="md" mb={5}>
            Admin Dashboard
          </Heading>
          <Box>
            <Link to="/">
              <Heading size="sm" mb={3}>
                Dashboard
              </Heading>
            </Link>
            <Link to="/manage-cashiers">
              <Heading size="sm" mb={3}>
                Manage Cashiers
              </Heading>
            </Link>
            <Link to="/manage-products">
              <Heading size="sm" mb={3}>
                Manage Products
              </Heading>
            </Link>
          </Box>
        </Box>
        <Box flex={1} p={5}>
          <Flex justify="flex-end">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Edit Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Avatar ml={3} />
          </Flex>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-cashiers" element={<ManageCashiers />} />
            <Route path="/manage-products" element={<ManageProducts />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default AdminDashboard;
