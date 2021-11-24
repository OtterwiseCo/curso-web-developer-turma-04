/*
[x] Criar uma função para ler a entrada do usuário
[x] Criar uma função para buscar as informações (logradouro, bairro, localidade e uf) do cep passado como parâmetro
[x] Criar função para salvar os dados em um arquivo JSON
[x] Fazer a integração entre as funções


VIA CEP URL: https://viacep.com.br/ws/${CEP}/json/
*/

import { saveToJSON } from "./writeFile.js";
import { cepInput, getInfoFromCEP } from "./cepHelpers.js";

const main = async () => {
  const cep = cepInput();

  const { logradouro, bairro, localidade, uf } = await getInfoFromCEP(cep);

  const data = {
    logradouro,
    bairro,
    localidade,
    uf,
  };

  saveToJSON(data, "localidade.json");
};

main();
