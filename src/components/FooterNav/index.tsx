/**
 * 页脚导航组件
 * 展示网站底部的导航链接区域
 */
import './index.less';

export default function FooterNav() {
  return (
    <div className="footer-nav-wrapper">
      <div className="footer-nav-container">
        {/* 佩蒂创新导航栏 */}
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

        {/* 主菜单导航栏 */}
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

        {/* 品牌产品导航栏 */}
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
  );
} 