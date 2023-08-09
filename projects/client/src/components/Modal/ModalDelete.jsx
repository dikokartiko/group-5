import {
  Button,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
} from "@chakra-ui/react";
import { React } from "react";
import axios from "axios";

function modalDelete(props) {
  const { dataDelete, onCloseModal, titleModal, idModal } = props;
  const toast = useToast();
  const token = localStorage.getItem("token");
  let data = dataDelete?.name || dataDelete?.username;
  let apiDelete = "";
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  if (idModal === "cashier") {
    apiDelete = `http://localhost:3000/cashiers/delete/${dataDelete.id}`;
  }
  if (idModal === "category") {
    apiDelete = `http://localhost:3000/categories/${dataDelete.id}`;
  }
  if (idModal === "transaction") {
    apiDelete = `http://localhost:3000/carts/delete/${dataDelete.id}`;
  }

  const handleDelete = async () => {
    axios
      .delete(apiDelete, headers)
      .then((res) => {
        props.onCloseModal();
        toast({
          title: `${res.data.message} with data ${data}`,
          status: "success",
          showDuration: 3000,
          isClosable: true,
          timeOut: 3000,
        });
        setInterval(() => {
          window.location.reload(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <ModalContent>
      <ModalHeader>Delete {titleModal}</ModalHeader>
      <ModalBody>
        <Text>
          Apakah anda ingin menghapus data{" "}
          <span>
            <Text as="b">{data}</Text>
          </span>{" "}
          ?
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="green" mr={3} onClick={handleDelete}>
          Yes
        </Button>
        <Button color="grey.400" bg="gray.400" mr={3} onClick={onCloseModal}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  );
}

export default modalDelete;
