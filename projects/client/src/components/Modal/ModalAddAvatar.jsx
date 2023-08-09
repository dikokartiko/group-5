import {
  Button,
  Flex,
  Divider,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  useToast,
  Input,
  Icon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormsCashier from "views/Dashboard/Cashier/components/AddForms";
import FormsCategory from "views/Dashboard/Product_Category/components/AddForms";
import FormsProduct from "views/Dashboard/Product/components/AddForms";
import { FaUserCircle } from "react-icons/fa";
function ModalAddAvatar(props) {
  const toast = useToast();
  const token = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const [userData, setUserData] = useState({ username: "", avatar: "" });
  const [userAvatar, setUserAvatar] = useState(null);
  const { onCloseModal, titleModal, idModal } = props;
  const { username } = userData;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const image = await axios.get(
          "http://localhost:3000/auth/profile-picture",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            responseType: "blob",
          }
        );

        const { username } = res.data;
        // Convert binary data into a data URL
        const reader = new FileReader();
        reader.onload = (e) => setUserAvatar(e.target.result);
        reader.readAsDataURL(image.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("avatar", selectedFile);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://localhost:3000/auth/profile-picture",
        formData,
        config
      );
      props.onCloseModal();
      toast({
        title: "Profile updated successfully!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      window.location.reload(false);
      // Handle response
    } catch (error) {
      toast({
        title: "Something went wrong!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <ModalContent>
      <ModalHeader>{titleModal}</ModalHeader>
      <Divider borderColor={"gray"} />

      <ModalBody>
        {userAvatar ? (
          <Image
            src={userAvatar}
            alt={userData.username}
            style={{ width: "100%", height: "50%", borderRadius: "50%" }}
          />
        ) : (
          <Icon
            color="grey.500"
            as={FaUserCircle}
            me="100px"
            w="100%"
            h="50%"
          />
        )}

        <Input type="file" onChange={handleAvatarUpload} />
      </ModalBody>
      <Divider borderColor={"gray"} />
      <ModalFooter>
        <Flex align="center" gap={3}>
          <Button
            type="submit"
            fontSize={13}
            colorScheme="green"
            pl={4}
            pr={4}
            pt={2}
            pb={2}
            onClick={handleProfileUpdate}
          >
            Submit
          </Button>
          <Button
            fontSize={13}
            color="grey.400"
            bg="gray.400"
            onClick={onCloseModal}
            pl={4}
            pr={4}
            pt={2}
            pb={2}
          >
            Cancel
          </Button>
        </Flex>
      </ModalFooter>
    </ModalContent>
  );
}

export default ModalAddAvatar;
