/**
 * 页脚导航组件
 * 展示网站底部的导航链接区域
 */
import './index.less';
import { Link } from 'react-router-dom';
import BrandLogo from './images/banner.webp';

export default function FooterNav() {
  return (
    <div className="footer-nav-wrapper">
      <div className="footer-nav-logo-wrapper">
        <img src={BrandLogo} alt="佩蒂创新" className="footer-nav-logo" />
      </div>
      <div className="footer-nav-container">
        {/* 佩蒂创新导航栏 */}
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">佩蒂创新</h3>
          <ul className="footer-nav-links">
            <li>
              <Link to="/pages/production-base">生产基地</Link>
            </li>
            <li>
              <Link to="/pages/production-capacity">生产能力</Link>
            </li>
            <li>
              <Link to="/pages/r-d-capabilities">研发能力</Link>
            </li>
            <li>
              <Link to="/pages/order-process">订单流程</Link>
            </li>
            <li>
              <Link to="/pages/quality-control">质量管理</Link>
            </li>
            <li>
              <Link to="/pages/product-center">产品中心</Link>
            </li>
          </ul>
        </div>

        {/* 主菜单导航栏 */}
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">主菜单</h3>
          <ul className="footer-nav-links">
            <li>
              <Link to="/pages/company-culture">企业文化</Link>
            </li>
            <li>
              <Link to="/pages/development-path">发展历程</Link>
            </li>
            <li>
              <Link to="/products">品牌产品</Link>
            </li>
            <li>
              <Link to="/blogs/news">新闻中心</Link>
            </li>
            <li>
              <Link to="/contact-us">联系我们</Link>
            </li>
          </ul>
        </div>

        {/* 品牌产品导航栏 */}
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">品牌产品</h3>
          <ul className="footer-nav-links">
            <li>
              <Link to="/collection/meatyway">爵宴</Link>
            </li>
            <li>
              <Link to="/collection/health">好适嘉</Link>
            </li>
            <li>
              <Link to="/collection/chewnergy">齿能</Link>
            </li>
            <li>
              <Link to="/collection/smartbones">SmartBones</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
