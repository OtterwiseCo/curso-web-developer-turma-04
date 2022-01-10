import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";

const apiURL = "https://jsonplaceholder.typicode.com/";

const options = ["users", "todos", "posts"];

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [resource, setResource] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `O botão foi clicado ${count} vezes`;
  }, [count]);

  useEffect(() => {
    const request = async () => {
      const response = await (await fetch(apiURL + "users/" + count)).json();
      console.log(response);
      setUser(response);
    };
    request();

    return () => {
      // O que tiver aqui vai ser executado na desmontagem do componente
    };
  }, [count]);

  useEffect(() => {
    const request = async () => {
      const response = await (await fetch(apiURL + resource)).json();
      console.log(response);
      setData(response);
    };
    if (!resource) return;
    request();
  }, [resource]);

  console.log(count);
  return (
    <div className="App">
      <p>Esse botão foi clicado {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Click aqui</button>
      <p>{user && JSON.stringify(user)}</p>
      <button
        onClick={() =>
          setResource(options[Math.floor(Math.random() * options.length)])
        }
      >
        Gerar aleatório
      </button>
      <p>Meu recurso é: {resource}</p>
      <p>Dados vindos da requisição</p>
      {Boolean(data.length) && JSON.stringify(data)}
    </div>
  );
}

export default App;
