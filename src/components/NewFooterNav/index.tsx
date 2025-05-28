/**
 * 页脚导航组件
 * 展示网站底部的导航链接区域
 */
import './index.less';
import { Link } from 'react-router-dom';
import BrandLogo from './images/banner.png';
import InfinityLogo from './images/we-chat.jpg';
import QRCode from './images/we-chat.jpg';
import WeiboIcon from './images/weibo.jpg';

export default function FooterNav() {
  return (
    <>
      <div className="footer-nav-wrapper">
        <div className="footer-nav-logo-wrapper">
          <img src={BrandLogo} alt="佩蒂创新" className="footer-nav-logo" />
        </div>
      </div>

      {/* Copyright Footer Section */}
      <div className="copyright-footer">
        <div className="copyright-divider"></div>

        <div className="copyright-content">
          <div className="copyright-info">
            <p>Copyright © 2018 佩蒂动物营养科技股份有限公司 All Rights Reserved.</p>
            <p className="license-info">
              <span className="security-license">浙公网安备 33032602100082号</span>
              <span className="icp-license">浙ICP备13035411号</span>
              <span>佩蒂动物营养科技股份有限公司 保留所有权利</span>
            </p>
          </div>

          <div className="copyright-contact">
            <div className="social-qrcode">
              <img src={QRCode} alt="QR Code" className="qrcode" />
              <img src={WeiboIcon} alt="Weibo" className="weibo-icon" />
            </div>
            <div className="contact-phone">400-836-1508</div>
          </div>
        </div>
      </div>
    </>
  );
}
