const sendData = async (data) => {
  try {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    ).json();
    console.log(response);
  } catch (error) {
    alert(error);
  }
};

window.onload = () => {
  const form = document.querySelector("form");
  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      title: event.target[0].value,
      body: event.target[1].value,
    };

    sendData(data);
  });
};
