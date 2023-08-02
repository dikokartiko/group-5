import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { TbLockCog } from "react-icons/tb";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BlankPage from "../BlankPage";
import FormCard from "../../components/card/FormCard";
import InputWithError from "../../components/input/InputWithError";
import InputPassword from "../../components/input/InputPassword";
import { useParams, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const token = params.token;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const resetPasswordSchema = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Kata sandi tidak boleh kosong!")
        .min(6, "Kata sandi setidaknya minimal 6 karakter!"),
      confirmPassword: Yup.string()
        .required("Konfirmasi kata sandi tidak boleh kosong!")
        .oneOf(
          [Yup.ref("password"), null],
          "Konfirmasi kata sandi tidak sama!"
        ),
    }),
    onSubmit: async (values) => {
      const password = {
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      await axios
        .post(`http://localhost:3000/auth/reset-password/${token}`, password)
        .then((resp) => {
          console.log(resp);
          navigate("/");
        })
        .catch((error) => {
          alert(`[error.response.data.err] ${error.response.data.err}`);
        });
      alert("Done");
    },
  });
  return (
    <BlankPage>
      <FormCard>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <TbLockCog size={70} />
        </Box>
        <Text as="b" fontSize="2xl">
          Ubah Kata Sandi
        </Text>
        <Text>Masukkan kata sandi baru</Text>
        <form onSubmit={resetPasswordSchema.handleSubmit}>
          <InputWithError
            errors={resetPasswordSchema.errors.password}
            touched={resetPasswordSchema.touched.password}>
            <InputPassword
              name="password"
              value={resetPasswordSchema.values.password}
              onChange={resetPasswordSchema.handleChange}
              handleClick={handleClickPassword}
              show={showPassword}
            />
          </InputWithError>
          <InputWithError
            errors={resetPasswordSchema.errors.confirmPassword}
            touched={resetPasswordSchema.touched.confirmPassword}>
            <InputPassword
              name="confirmPassword"
              isConfirm={true}
              value={resetPasswordSchema.values.confirmPassword}
              onChange={resetPasswordSchema.handleChange}
              handleClick={handleClickConfirmPassword}
              show={showConfirmPassword}
            />
          </InputWithError>
          <Box display={"flex"}>
            <Button type="submit" colorScheme={"green"} flex={1} marginX="5">
              Simpan
            </Button>
          </Box>
        </form>
      </FormCard>
    </BlankPage>
  );
};

export default ResetPasswordPage;
