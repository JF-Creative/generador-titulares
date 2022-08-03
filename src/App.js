import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Header} from './components/Header';

import{GeneradorTitulares} from './components/GeneradorTitulares';
import{Tips} from './components/Tips';
import {Info} from './components/Info';
import { NotFoud } from "./components/NotFound";
import { Footer } from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<GeneradorTitulares/>}/>
        <Route path="/tips" element={<Tips/>}/>
        <Route path="/about" element={<Info/>}/>
        <Route path="*" element={<NotFoud/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
