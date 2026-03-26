import React from "react";
import MainLayout from "../layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import CommunityPage from "../pages/CommunityPage";
import BlogPage from "../pages/BlogPage";
import PricingPage from "../pages/PricingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
