import "./App.css";
import Menu from './Menu';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));

function App() {
  return (
    <BrowserRouter >
      <Menu />
      <Suspense fallback={<div>Carregando ... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}
export default App;