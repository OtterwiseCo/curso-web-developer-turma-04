import "./App.css";
import Button from "./components/Button/Button";

const paragrafo = <p>meu paragrafo</p>;

const retornaParagrafo = () => paragrafo;

function App() {
  const name = "joao";
  return (
    <div className="App">
      <h1>Eu sou o {name}</h1>

      {retornaParagrafo()}

      <Button variant="outlined">outlined</Button>
      <Button variant="solid">solid</Button>
    </div>
  );
}

export default App;
