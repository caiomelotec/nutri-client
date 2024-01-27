import "./App.css";
import { AddFood } from "./pages/AddFood.tsx";
import Login from "./pages/Login.tsx";
import { Register } from "./pages/Register.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="addfood" element={<AddFood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
