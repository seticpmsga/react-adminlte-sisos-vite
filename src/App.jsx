import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import OrdenServico from "./pages/OrdenServico";
import TiposServico from "./pages/TiposServico";
import Secretarias from "./pages/Secretarias";
import Clientes from "./pages/Clientes";
import Orgao from "./pages/Orgao";

function App() {

  return (
    <>

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
      
    </>

  )
}

export default App
