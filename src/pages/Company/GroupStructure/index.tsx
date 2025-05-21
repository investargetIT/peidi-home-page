import React from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import Structure from './images/structure.webp';

export default function GroupStructure() {
  return (
    <div className="philosophy-page">
      <div className="banner-container">
        <img src={Banner} alt="banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">关于佩蒂——集团架构</h1>
        </div>
      </div>

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">组织结构图</h2>
          <div className="philosophy-image">
            <img src={Structure} alt="人与宠物的温馨互动" />
          </div>
        </div>
      </div>

      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
