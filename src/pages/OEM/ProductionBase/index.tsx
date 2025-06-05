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
        <div className="container">
          <h2 className="productionbase-nz-title">新西兰Alphine</h2>
          <p className="productionbase-nz-desc">
            成立于1996年，2018年加入佩蒂集团，占地面积约2400平方米，年产量约2000吨高品质宠物零食。厂区内装配有先进的风干粮制作产线，以及臭氧气味处理系统。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image3} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">越南德信</h2>
          <p className="productionbase-nz-desc">
            好嚼、德信生产基地2015年投入使用，总投资1400万美元，占地面积约4万平方米拥有1万吨宠物零食产能，工厂配备了行业领先的污水生物处理系统和辐照灭菌生产线。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image4} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">越南巴啦啦</h2>
          <p className="productionbase-nz-desc">
            巴啦啦生产基地建立于2017年总投资200万美元，占地面积约11000平方米，拥有5000吨宠物零食产能。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image5} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">柬埔寨爵味食品</h2>
          <p className="productionbase-nz-desc">
            爵味生产基地2022年投入使用，总投资8000万美元，占地面积约8万平方米，现有年产能约1.12万吨。厂区产线配置全面，涵盖了畜皮咀食品和植物咀嚼食品，营养肉质零食。同时配备有行业领先的辐照产线和污水处理系统。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image6} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">温州佩蒂</h2>
          <p className="productionbase-nz-desc">
            温州佩蒂工厂于2002年正式成立，占地面积约33000平方米，目前拥有9000吨宠物零食产能，另有3万吨新型主粮产能在建。主要生产动物皮嚼食、无皮嚼食、营养肉类零食、罐头食品等，拥有完善的生产和检测体系，工厂配有辐照灭菌生产线、污水处理系统、自动包装生产线，并具备微生物、理化指标分析、兽药残留等自检能力。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image7} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">江苏康贝</h2>
          <p className="productionbase-nz-desc">
            江苏康贝成立于2010年，总投资7500万人民币，占地约100亩，年产量约6000吨，主要生产风干食品、冻干食品、膨化食品、营养肉类零食、鸟食及可食用小动物玩具，以及各类咀嚼食品。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image8} alt="新西兰KCPF工厂全景" />
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
