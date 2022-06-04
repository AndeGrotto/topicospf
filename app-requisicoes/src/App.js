import "./App.css";
<<<<<<< HEAD
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));

function App() {

  return (
    <BrowserRouter>
      <Menu/>      

      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );

}
export default App;
=======
import Menu from './Menu';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const TipoRequisicaoCon = lazy(() => import('./pages/tiporequisicao/TipoRequisicaoCon'));
const RequisicaoCon = lazy(() => import('./pages/requisicao/RequisicaoCon'));

function App() {
  return (
    <BrowserRouter >
      <Menu />
      <Suspense fallback={<div>Carregando ... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/solicitante" element={<SolicitanteCon />} />
          <Route path="/requisicao" element={<RequisicaoCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}
export default App;
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
