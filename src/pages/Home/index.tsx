import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import AboutUs from './AboutUs';
import CompanyCulture from './CompanyCulture';
import CultureIcons from './CultureIcons';
import FactoryIntro from './FactoryIntro';
import FactoryShowcase from './FactoryShowcase';
import ProductInnovation from './ProductInnovation';
import ResearchDevelopment from './ResearchDevelopment';
import './index.less';

export default function Home() {
  return <>
    <HomeBanner onLearnMoreClick={() => console.log('Learn more clicked')} />
    <BrandTip />
    <AboutUs onLearnMoreClick={() => console.log('About us learn more clicked')} />
    <CompanyCulture />
    <CultureIcons />
    <FactoryIntro onLearnMoreClick={() => console.log('Factory intro learn more clicked')} />
    <FactoryShowcase />
    <ProductInnovation onLearnMoreClick={() => console.log('Product innovation learn more clicked')} />
    <ResearchDevelopment />
    <div className="footer-nav-wrapper">
      <div className="footer-nav-container">
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">佩蒂创新</h3>
          <ul className="footer-nav-links">
            <li><a href="#">生产基地</a></li>
            <li><a href="#">生产能力</a></li>
            <li><a href="#">研发能力</a></li>
            <li><a href="#">订单流程</a></li>
            <li><a href="#">质量管理</a></li>
            <li><a href="#">产品中心</a></li>
          </ul>
        </div>
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">主菜单</h3>
          <ul className="footer-nav-links">
            <li><a href="#">企业文化</a></li>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">品牌产品</a></li>
            <li><a href="#">新闻中心</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">品牌产品</h3>
          <ul className="footer-nav-links">
            <li><a href="#">爵宴</a></li>
            <li><a href="#">好适嘉</a></li>
            <li><a href="#">齿能</a></li>
            <li><a href="#">SmartBones</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright-footer">
      <div className="copyright-text">
        Copyright © 2024 佩蒂 保留所有权利.
      </div>
    </div>
  </>
} 