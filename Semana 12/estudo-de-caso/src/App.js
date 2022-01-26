import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CarRegister from "./routes/CarCreate";
import CarEdit from "./routes/CarEdit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/car/create" element={<CarRegister />} />
          <Route path="/car/edit/:id" element={<CarEdit />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
