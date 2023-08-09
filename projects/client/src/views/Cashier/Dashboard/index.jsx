// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
// assets
import ProfileBgImage from "assets/img/ProfileBackground.png";
import React from "react";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

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
        const reader = new FileReader();
        reader.onload = (e) => setUserAvatar(e.target.result);
        reader.readAsDataURL(image.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Main
        backgroundHeader={ProfileBgImage}
        backgroundProfile={bgProfile}
        avatarImage={userAvatar}
        name={data?.username}
        email={data?.email}
      />
    </Flex>
  );
}
