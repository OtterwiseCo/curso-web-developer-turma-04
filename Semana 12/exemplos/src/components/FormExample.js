import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Stack } from "@chakra-ui/react";
import * as yup from "yup";
import styled from "styled-components";

import { login } from "../services/auth";

const schema = yup
  .object({
    email: yup
      .string()
      .email("deve ser um email valido")
      .required("Campo de email é obrigatório"),
    password: yup
      .string()
      .min(5, "Deve ter no minimo 5 caracteres")
      .required("Campo de senha é obrigatório"),
  })
  .required();

function FormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // console.log(watch("email"));

  console.log(errors);
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <Input type="password" {...register("password", { required: true })} />
        {errors.password && <span>{errors.password.message}</span>}

        <Input type="submit" />
      </Stack>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;
`;

export default FormExample;
