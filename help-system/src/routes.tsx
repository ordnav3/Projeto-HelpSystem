import { Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import Faq from "./pages/Faq";
import Home from "./pages/Home";

const Rotas = () => {
    return (
        <Routes>
            {<Route path="/" element={<Home />} />}
            {<Route path="/registerlogin" element={<RegisterLogin />} />}
            {<Route path="/faq" element={<Faq />} />}
        </Routes>
    );
};

export default Rotas;
