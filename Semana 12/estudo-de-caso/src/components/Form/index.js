import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Nome do carro é obrigatório"),
  brand: yup.string().required("Marca do carro é obrigatório"),
  color: yup.string().required("Cor do carro é obrigatório"),
  type: yup.string().required("Tipo do carro é obrigatório"),
});

const saveData = (id, data) =>
  localStorage.setItem(`car-${id}`, JSON.stringify(data));

const getData = (id) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(JSON.parse(localStorage.getItem(`car-${id}`))),
      2000,
    );
  });

function Form() {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(!!id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const request = async () => {
      const data = await getData(id);
      setIsLoading(false);
      if (!data) {
        setNotFound(true);
        return;
      }
      console.log(data);

      Object.entries(data).forEach(([key, value]) => {
        setValue(key, value);
      });
    };
    if (id) {
      request();
    }
  }, [id, setValue]);

  const onSubmit = (data) => {
    if (id) {
      saveData(id, data);
      toast.success("Carro atualizado com sucesso");
    } else {
      saveData(0, data);
      reset();
      toast.success("Carro cadastrado com sucesso");
    }
  };

  if (isLoading) {
    return <p>carregando...</p>;
  }

  if (notFound) {
    return <h1>Carro não encontrado</h1>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome do carro
        <input type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <select {...register("brand")}>
        <option value="" selected disabled hidden>
          Selecione uma marca
        </option>
        <option value="bmw">BMW</option>
        <option value="fiat">Fiat</option>
        <option value="volkswagen">Volkswagen</option>
        <option value="mercedez">Mercedez</option>
      </select>
      {errors.brand && <span>{errors.brand.message}</span>}
      <label>
        Qual a cor do carro?
        <input {...register("color")} />
        {errors.color && <span>{errors.color.message}</span>}
      </label>
      <label>
        Qual o tipo do carro?
        <input {...register("type")} />
        {errors.type && <span>{errors.type.message}</span>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
