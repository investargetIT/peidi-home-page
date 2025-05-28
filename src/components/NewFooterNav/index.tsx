/**
 * 页脚导航组件
 * 展示网站底部的导航链接区域
 */
import './index.less';
import BrandLogo from './images/banner.png';
import QRCode from './images/we-chat.jpg';
import WeiboIcon from './images/weibo.jpg';
import PoliceIcon from './images/police-icon.png';

export default function FooterNav() {
  return (
    <>
      <div className="footer-nav-wrapper">
        <div className="footer-nav-logo-wrapper">
          <img src={BrandLogo} alt="佩蒂创新" className="footer-nav-logo" />
        </div>
      </div>

      {/* Copyright Footer Section */}
      <div className="bottom-copyright-section">
        <div className="bottom-divider"></div>

        <div className="bottom-content-container">
          <div className="bottom-legal-info">
            <p className="bottom-license-text">
              <img src={PoliceIcon} alt="Police" className="bottom-police-icon" />
              <span className="bottom-security-license">浙公网安备 33032602100082号</span>
              <span className="bottom-icp-license">浙ICP备13035411号</span>
              <span>佩蒂动物营养科技股份有限公司 保留所有权利</span>
            </p>
          </div>

          <div className="bottom-contact-container">
            <div className="bottom-social-media">
              <img src={QRCode} alt="QR Code" className="bottom-qrcode" />
              <img src={WeiboIcon} alt="Weibo" className="bottom-weibo" />
            </div>
            <div className="bottom-phone-number">400-836-1508</div>
          </div>
        </div>
      </div>
    </>
  );
}
