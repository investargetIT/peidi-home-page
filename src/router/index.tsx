import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutProfile from '../pages/AboutProfile';
import AboutHistory from '../pages/AboutHistory';
import AboutCulture from '../pages/AboutCulture';
import OEMIntro from '../pages/OEMIntro';
import ODMIntro from '../pages/ODMIntro';
import ProductsDog from '../pages/ProductsDog';
import ProductsCat from '../pages/ProductsCat';
import NewsCompany from '../pages/NewsCompany';
import NewsIndustry from '../pages/NewsIndustry';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/profile" element={<AboutProfile />} />
      <Route path="/about/history" element={<AboutHistory />} />
      <Route path="/about/culture" element={<AboutCulture />} />
      <Route path="/oem/intro" element={<OEMIntro />} />
      <Route path="/odm/intro" element={<ODMIntro />} />
      <Route path="/products/dog" element={<ProductsDog />} />
      <Route path="/products/cat" element={<ProductsCat />} />
      <Route path="/news/company" element={<NewsCompany />} />
      <Route path="/news/industry" element={<NewsIndustry />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
} 