import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';
import Login from './pages/login/LoginForm'

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const AtividadeCon = lazy(() => import('./pages/atividade/AtividadeCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const TipoRequisicaoCon = lazy(() => import('./pages/tiporequisicao/TipoRequisicaoCon'));
const AndamentoCon = lazy(() => import('./pages/andamento/AndamentoCon'));
const RequisicaoCon = lazy(() => import('./pages/requisicao/RequisicaoCon'));

function App() {
  
  const [token, setToken] = useState([])
  
  useEffect(() => {
    setToken(sessionStorage.getItem('token')); 
  }, []);

  if (!token || token <= '') {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Menu/>      

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/atividade" element={<AtividadeCon />} />
          <Route path="/solicitante" element={<SolicitanteCon />} />
          <Route path="/tipoRequisicao" element={<TipoRequisicaoCon />} />
          <Route path="/andamento" element={<AndamentoCon />} />
          <Route path="/requisicao" element={<RequisicaoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
