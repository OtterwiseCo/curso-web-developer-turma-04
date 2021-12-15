//  [x] Montar o formulário do site com as informações de cep, nome da rua, número, complemento, bairro, estado e cidade
//  [x] Implementar comportamento de término de digitação de CEP, buscar esse cep na API do Via CEP
//  [x] Realizar o preenchimento dos campos de endereço assim que o retorno voltar da API do Via CEP

// https://viacep.com.br/ws/${CEP}/json/

const $ = (name) => {
  const element = document.getElementsByName(name);
  if (element && element.length) return element[0];
  return null;
};

const fetchCEPData = async (cep) =>
  await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();

window.onload = () => {
  const cepInput = $("cep");

  cepInput.addEventListener("input", async (event) => {
    const cep = event.target.value;

    if (cep.length === 8) {
      cepInput.setAttribute("disabled", "true");
      try {
        const { logradouro, localidade, uf, bairro } = await fetchCEPData(cep);

        const street = $("street");
        const city = $("city");
        const state = $("state");
        const neighborhood = $("neighborhood");

        street.value = logradouro;
        city.value = localidade;
        state.value = uf;
        neighborhood.value = bairro;
      } catch (error) {
        alert(error);
      } finally {
        cepInput.removeAttribute("disabled");
      }
    }
  });
};
