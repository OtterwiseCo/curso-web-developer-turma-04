// console.log(window);
console.log(document);

// executa quando termina de carregar o documento HTML
window.onload = () => {
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  const paragrafo = document.createElement("p");
  console.log(paragrafo);
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(paragrafo);

  body.removeChild(paragrafo);

  const paragrafo2 = document.getElementById("paragrafo");
  paragrafo2.innerText = "Meu paragrafo novo deu nós";

  paragrafo2.innerHTML = "Meu paragrafo <span style='color: red'>novo</span>";
  // paragrafo2.remove();
  console.log(document.getElementsByClassName("container"));
  console.log(document.getElementsByTagName("div"));

  const input = document.getElementById("name");
  console.log(input);
  console.log(input.getAttribute("value"));
  console.log(input.hasAttribute("value"));
  console.log(input.hasAttributes());
  input.setAttribute("value", "joao");
  input.removeAttribute("value");

  const container = document.querySelector(".container");
  console.log(container);

  const paragrafo3 = document.querySelector("#paragrafo");
  console.log(paragrafo3);

  const body2 = document.querySelector("body");
  console.log(body2);

  const containers = document.querySelectorAll(".container");
  console.log(containers);
};
