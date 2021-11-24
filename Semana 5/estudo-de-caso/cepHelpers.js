import { input } from "console-input";
import fetch from "node-fetch";

export const cepInput = () => input("Digite um CEP:");

export const getInfoFromCEP = async (cep) => {
  try {
    const response = await (
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    ).json();
    return response;
  } catch (error) {
    console.log(`Deu erro com o cep: ${cep} solicitado`);
  }
};
