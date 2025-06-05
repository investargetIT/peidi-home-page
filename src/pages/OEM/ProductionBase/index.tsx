import React, { useEffect, useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';
import Image5 from './images/5.webp';
import Image6 from './images/6.webp';
import Image7 from './images/7.webp';
import Image8 from './images/8.webp';
import playIcon from './images/play-icon.svg';
export default function ProductionBase() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="关于佩蒂——生产基地" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">新西兰KCPF</h2>
          <p className="productionbase-nz-desc">
            2024年投产，生产基地占地面积约48000平方米。拥有全球最先进的宠物主粮产线，年产量约4万吨高品质干粮，为亚太地区最大单条产线。占据新西兰地理优势，选取天然新鲜的原料，打造世界级品质的宠物粮食。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image1} alt="新西兰KCPF工厂全景" />
          </div>
          <div className="productionbase-nz-video" style={{ backgroundImage: `url(${Image2})` }}>
            <div className="video-overlay">
              <div className="video-play-btn">
                <img src={playIcon} alt="播放按钮" />
              </div>
            </div>
            <video
              src="//media.cdn.ishopastro.com/764222003171040/media/video/a2ee094e1043131291425520.mp4?width=1280&amp;height=720"
              controls
              controlsList="nodownload"
              className="productionbase-nz-video-content"
              style={{ display: 'none' }}
            ></video>
          </div>
        </div>
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
