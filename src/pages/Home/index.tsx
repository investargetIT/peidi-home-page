import React from 'react';
import { Button } from 'antd';
import BannerBg from './images/banner.webp';
import './index.less';
export default function Home() {
  return <div className="home-banner-container">
    <img src={BannerBg} alt="banner" className="home-banner-bg" />
    <div className="bg-tip-container">
      <div className="bg-tip-content">
        用全球好产品推动宠物健康标准升级
      </div>
      <div className="bg-tip-btn-container">
        <Button className="bg-tip-btn" type="primary">了解更多</Button>
      </div>
    </div>
  </div>;

} 