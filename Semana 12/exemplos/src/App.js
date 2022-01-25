import { Routes, Route } from "react-router-dom";

import FormExample from "./components/FormExample";
import Ex1 from "./components/Ex1";
import Styled from "./components/Styled";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormExample />} />
      <Route path="/ex1" element={<Ex1 />} />
      <Route path="/styled" element={<Styled />} />
    </Routes>
  );
}

export default App;
