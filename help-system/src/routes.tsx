import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";

const Rotas = () => {
    return (
        <Routes>
            {<Route path="/" element={<RegisterLogin />} />}
        </Routes>
    );
};

export default Rotas;
