import {
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
function modalViewDetail(props) {
  const { dataDetail, onCloseModal, titleModal } = props;
  console.log(dataDetail);
  return (
    <ModalContent>
      <ModalHeader>View Detail {titleModal}</ModalHeader>
      <ModalBody>
        {dataDetail?.avatar ? (
          <Image src={`http://localhost:3000/auth/avatar/${dataDetail?.id}`} />
        ) : null}
        {dataDetail?.username ? (
          <Text>{dataDetail?.username}</Text>
        ) : dataDetail?.name ? (
          <Text>{dataDetail?.username}</Text>
        ) : (
          ""
        )}
      </ModalBody>

      <ModalFooter>
        <Button color="grey.400" bg="gray.400" mr={3} onClick={onCloseModal}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default modalViewDetail;
