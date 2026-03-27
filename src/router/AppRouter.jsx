import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Features from "../pages/Features";
import { Routes, Route } from "react-router-dom";
import Community from "../pages/Community";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
