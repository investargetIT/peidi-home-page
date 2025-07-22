/**
 * 版权信息组件
 * 展示网站底部的版权声明信息
 */
import './index.less';
import PoliceIcon from './images/police-icon.png';

export default function CopyrightFooter() {
  return (
    <div className="copyright-footer">
      {/* 分割线 */}
      <div className="copyright-divider"></div>

      {/* 版权文本信息 */}
      <div className="copyright-text">
        <div className="license-info">
          <img src={PoliceIcon} alt="Police" className="bottom-police-icon" />
          <span className="bottom-security-license" >浙公网安备 33032602100082号</span>
          <span className="bottom-icp-license" style={{ cursor: 'pointer' }} onClick={() => window.open('https://beian.miit.gov.cn/', '_blank')}>浙ICP备13035411号</span>
        </div>
        <div className="copyright-info">
          Copyright © 2025 佩蒂动物营养科技股份有限公司 All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
