import React from "react";
import { Route, Routes } from "react-router-dom";
import "./css/index.css";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from './pages/Contact'


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
