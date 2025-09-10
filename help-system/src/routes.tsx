import { Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import Faq from "./pages/Faq";

const Rotas = () => {
    return (
        <Routes>
            {<Route path="/" element={<RegisterLogin />} />}
            {<Route path="/faq" element={<Faq />} />}
        </Routes>
    );
};

export default Rotas;
