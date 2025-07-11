import { Routes, Route } from 'react-router-dom';
// 首页
import Home from '../pages/Home';
// 关于佩蒂
import CompanyCulture from '../pages/Company/CompanyCulture';
import CorporatePhilosopy from '../pages/Company/CorporatePhilosopy';
import DevelopmentPath from '../pages/Company/DevelopmentPath';
import GroupStructure from '../pages/Company/GroupStructure';
// OEM/ODM 业务
import ProductionBase from '../pages/OEM/ProductionBase';
import ProductionCapacity from '../pages/OEM/ProductionCapacity';
import ResearchCapabilities from '../pages/OEM/ResearchCapabilities';
import QualityControl from '../pages/OEM/QualityControl';
import OrderProcess from '../pages/OEM/OrderProcess';
import ProductCenter from '../pages/OEM/ProductCenter';
// 品牌产品
import AllProducts from '../pages/Collection/AllProducts';
import Meatyway from '../pages/Collection/MeatyWay';
import Health from '../pages/Collection/Health';
import Chewnergy from '../pages/Collection/Chewnergy';
import SmartBones from '../pages/Collection/SmartBones';
// 联系我们
import Contact from '../pages/Contact';
// 新闻中心
import News from '../pages/NewsCenter/News';
import Video from '../pages/NewsCenter/Video';
import RenderNews from '../pages/NewsCenter/News/RenderNews';
// 投资关系
import InvestorRelations from '../pages/InvestorRelations';
// 全球行业业务
import GlobalBusiness from '../pages/GlobalBusiness';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* todo,后续接入时路径需要调整 */}
      <Route path="/homepage" element={<Home />} />
      {/* 关于佩蒂 */}
      <Route path="/pages/corporate-philosophy" element={<CorporatePhilosopy />} />
      <Route path="/pages/company-culture" element={<CompanyCulture />} />
      <Route path="/pages/development-path" element={<DevelopmentPath />} />
      <Route path="/pages/group-structure" element={<GroupStructure />} />
      {/* OEM/ODM 业务 */}
      <Route path="/pages/production-base" element={<ProductionBase />} />
      <Route path="/pages/production-capacity" element={<ProductionCapacity />} />
      <Route path="/pages/research-capabilities" element={<ResearchCapabilities />} />
      <Route path="/pages/quality-control" element={<QualityControl />} />
      <Route path="/pages/order-process" element={<OrderProcess />} />
      <Route path="/pages/product-center" element={<ProductCenter />} />
      {/* 品牌产品 */}
      <Route path="/products" element={<AllProducts />} />
      <Route path="/collection/meatyway" element={<Meatyway />} />
      <Route path="/collection/health" element={<Health />} />
      <Route path="/collection/chewnergy" element={<Chewnergy />} />
      <Route path="/collection/smartbones" element={<SmartBones />} />
      {/* 新闻中心 */}
      <Route path="/blogs/news" element={<News />} />
      <Route path="/blogs/video" element={<Video />} />
      <Route path="/blogs/news/:id" element={<RenderNews />} />
      {/* 联系我们 */}
      <Route path="/contact-us" element={<Contact />} />
      {/* 投资关系 */}
      <Route path="/investor-relations" element={<InvestorRelations />} />
      {/* 全球行业业务 */}
      <Route path="/global-industry-business" element={<GlobalBusiness />} />
    </Routes>
  );
}
