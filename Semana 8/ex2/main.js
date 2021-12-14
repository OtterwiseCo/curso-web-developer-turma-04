window.onload = () => {
  const [p1, p2] = document.querySelectorAll("p");
  p1.innerText = "Mudei o texto do primeiro";
  p2.remove();
};
