import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideNav from "./SideNav";
import Footer from "./Footer";
import Header from "./Header";

import Dashboard from "../pages/dashboard/Content";
import OrdenServico from "../pages/ordenservico/DataTableOs";
import TiposServico from "../pages/tiposservico/DataTableTiposServico";
import Secretarias from "../pages/secretarias/ContentClientes";
import Clientes from "../pages/clientes/ContentClientes";
import Orgao from "../pages/orgao/DataTableOrgao";

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
