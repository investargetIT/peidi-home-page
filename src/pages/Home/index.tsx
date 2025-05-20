import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import AboutUs from './AboutUs';
import CompanyCulture from './CompanyCulture';
import CultureIcons from './CultureIcons';
import FactoryIntro from './FactoryIntro';
import FactoryShowcase from './FactoryShowcase';
import ProductInnovation from './ProductInnovation';
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
    <div className="research-development-wrapper">
      <div className="research-development-container">
        <div className="research-column">
          <div className="research-item">
            <h3 className="research-title">研发投入</h3>
            <div className="research-content">
              每年将超过3%的营业收入（行业平均水平为0.3%）用于研发新产品、新技术、新工艺
            </div>
          </div>
          <div className="research-item">
            <h3 className="research-title">国家标准</h3>
            <div className="research-content">
              主持并制定了中国首个狗咬胶国家标准
            </div>
          </div>
        </div>
        <div className="research-column">
          <div className="research-item">
            <h3 className="research-title">企业专利</h3>
            <div className="research-content">
              拥有有效专利57个，其中包括3个国际发明专利、8个国家发明专利。
            </div>
          </div>
          <div className="research-item">
            <h3 className="research-title">全球领先的研究中心</h3>
            <div className="research-content">
              佩蒂聘请了多名美国UC davis兽医大学、新西兰梅西大学等国内外顶尖学术机构，联合全球范围内行业专家及学术权威，创建了堪称全球领先的研究中心
            </div>
          </div>
        </div>
      </div>
    </div>
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