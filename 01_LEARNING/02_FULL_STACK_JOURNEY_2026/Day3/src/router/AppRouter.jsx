import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/SimpleForm";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SimpleForm from "../pages/SimpleForm";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SimpleForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
