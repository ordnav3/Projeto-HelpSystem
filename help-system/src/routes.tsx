import { Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Admin from "./pages/FaqAdmin";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registerlogin" element={<RegisterLogin />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Rotas;
