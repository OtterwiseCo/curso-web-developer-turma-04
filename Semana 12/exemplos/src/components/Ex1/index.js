import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { Form, Input } from "./styles";

import Button from "../Button";

const schema = yup
  .object({
    title: yup.string().required("Campo de título é obrigatório"),
    body: yup
      .string()
      .min(30, "Deve ter no minimo 30 caracteres")
      .required("Campo de conteúdo do post é obrigatório"),
    userId: yup.number().required("userId é obrigatório"),
  })
  .required();

function Ex1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Título do post" {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}

      <Input placeholder="conteúdo do post" {...register("body")} />
      {errors.body && <span>{errors.body.message}</span>}

      <Input {...register("userId")} defaultValue={1} hidden />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}

export default Ex1;
