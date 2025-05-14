import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CompanyCulture from '../pages/About/CompanyCulture';
import CorporatePhilosopy from '../pages/About/CorporatePhilosopy';
import DevelopmentPath from '../pages/About/DevelopmentPath';
import GroupStructure from '../pages/About/GroupStructure';
import ProductionBase from '../pages/OEM/ProductionBase';
import ProductionCapacity from '../pages/OEM/ProductionCapacity';
import ResearchCapabilities from '../pages/OEM/ResearchCapabilities';
import QualityControl from '../pages/OEM/QualityControl';
import OrderProcess from '../pages/OEM/OrderProcess';
import ProductCenter from '../pages/OEM/ProductCenter';
import Meatyway from '../pages/Collection/Meatyway';
import Health from '../pages/Collection/Health';
import Chewnergy from '../pages/Collection/Chewnergy';
import SmartBones from '../pages/Collection/SmartBones';
import OEMIntro from '../pages/OEMIntro';
import ODMIntro from '../pages/ODMIntro';
import ProductsDog from '../pages/ProductsDog';
import ProductsCat from '../pages/ProductsCat';
import NewsCompany from '../pages/NewsCompany';
import NewsIndustry from '../pages/NewsIndustry';
import Contact from '../pages/Contact';
import News from '../pages/NewsCenter/News';
import Video from '../pages/NewsCenter/Video';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/corporate-philosophy'" element={<CorporatePhilosopy />} />
      <Route path="/pages/company-culture" element={<CompanyCulture />} />
      <Route path="/pages/development-path" element={<DevelopmentPath />} />
      <Route path="/pages/group-structure" element={<GroupStructure />} />
      <Route path="/pages/production-base" element={<ProductionBase />} />
      <Route path="/pages/production-capacity" element={<ProductionCapacity />} />
      <Route path="/pages/research-capabilities" element={<ResearchCapabilities />} />
      <Route path="/pages/quality-control" element={<QualityControl />} />
      <Route path="/pages/order-process" element={<OrderProcess />} />
      <Route path="/pages/product-center" element={<ProductCenter />} />
      <Route path="/collection/meatyway" element={<Meatyway />} />
      <Route path="/collection/health" element={<Health />} />
      <Route path="/collection/chewnergy" element={<Chewnergy />} />
      <Route path="/collection/smartbones" element={<SmartBones />} />
      <Route path="/oem/intro" element={<OEMIntro />} />
      <Route path="/odm/intro" element={<ODMIntro />} />
      <Route path="/products/dog" element={<ProductsDog />} />
      <Route path="/products/cat" element={<ProductsCat />} />
      <Route path="/news/company" element={<NewsCompany />} />
      <Route path="/news/industry" element={<NewsIndustry />} />
      <Route path="/blogs/news" element={<News />} />
      <Route path="/blogs/video" element={<Video />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
} 