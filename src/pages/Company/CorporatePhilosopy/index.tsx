import React from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';

export default function CorporatePhilosopy() {
  return (
    <div className="philosophy-page">
      <div className="banner-container">
        <img src={Banner} alt="banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">关于佩蒂——企业理念</h1>
        </div>
      </div>

      <div className="philosophy-content">
        {/* Additional content will go here */}
      </div>
      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
} 