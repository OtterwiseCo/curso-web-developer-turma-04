import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="container">
      <Button variant="solid" onClick={() => console.log("clicou")}>
        botão
      </Button>
      <Button variant="outline">botão</Button>
      <Button variant="solid" isLoading>
        botão
      </Button>
      <Button variant="solid" disabled>
        botão
      </Button>
      <Button variant="outline" disabled>
        botão
      </Button>
      <Text fontSize="sm">Olá</Text>
      <Text>Olá</Text>
      <Text fontSize="lg">Olá</Text>
      <Text as="h6">Olá</Text>
      <Text className="text-red">Olá</Text>
    </div>
  );
}

export default App;
