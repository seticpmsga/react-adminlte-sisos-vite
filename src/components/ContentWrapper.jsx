import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideNav from "./SideNav";
import Footer from "./Footer";
import Header from "./Header";

import Dashboard from "../pages/Dashboard";
import OrdenServico from "../pages/OrdenServico";
import TiposServico from "../pages/TiposServico";
import Secretarias from "../pages/Secretarias";
import Clientes from "../pages/Clientes";
import Orgao from "../pages/Orgao";

function ContentWrapper() {
    return (
        <Router>
        <Header/>
            <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/ordenservico" element={<OrdenServico/>}/>
            <Route path="/tiposservico" element={<TiposServico/>}/> 
            <Route path="/secretarias" element={<Secretarias/>}/>
            <Route path="/clientes" element={<Clientes/>}/>
            <Route path="/orgao" element={<Orgao/>}/>
            </Routes> 
        <SideNav/>
        <Footer/>
        </Router>
    );
}

export default ContentWrapper;
