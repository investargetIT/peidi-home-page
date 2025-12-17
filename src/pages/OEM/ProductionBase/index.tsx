import React, { useEffect, useState, useRef } from 'react';
import Banner from './images/banner.jpg';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import Image5 from './images/5.jpg';
import Image6 from './images/6.jpg';
import Image7 from './images/7.jpg';
import Image8 from './images/8.jpg';
import playIcon from './images/play-icon.svg';
import Bg2 from './images/2-bg.jpg';
import Image360VR from './images/360VR.png';
export default function ProductionBase() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videoList = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/a0b11b721008597875286728.mp4?width=1280&height=720',
      title: '新西兰KCPF品牌',
      poster: Bg2,
    },
  ];

  const handlePlayVideo = (src: string) => {
    setPlayingVideo(src);

    if (videoRefs.current[src]) {
      videoRefs.current[src]?.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  };

  const setVideoRef = (el: HTMLVideoElement | null, src: string) => {
    videoRefs.current[src] = el;
  };

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="生产基地" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">新西兰KCPF</h2>
          <p className="productionbase-nz-desc">
            2024年投产，生产基地占地面积约48000平方米，拥有全球最先进的宠物主粮产线，为亚太地区最大单条产线。占据新西兰地理优势，选取天然新鲜的原料，打造世界级品质的宠物粮食。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image1} alt="新西兰KCPF工厂全景" />
          </div>
        </div>

        <div className="video-content" style={{ display: 'block' }}>
          {videoList.map(item => (
            <div className="video-item" key={item.src}>
              <div className="video-container">
                <video
                  ref={el => setVideoRef(el, item.src)}
                  src={item.src}
                  poster={item.poster}
                  controls={playingVideo === item.src}
                  controlsList="nodownload"
                  preload="none"
                />

                {playingVideo !== item.src && (
                  <div className="video-overlay" onClick={() => handlePlayVideo(item.src)}>
                    <div className="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="rgba(0, 0, 0, 0.5)" />
                        <path d="M16 12L10 16V8L16 12Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="video-title">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">新西兰Alphine</h2>
          <p className="productionbase-nz-desc">
            成立于1996年，2018年加入佩蒂集团，占地面积约2400平方米，厂区内装配有先进的风干粮制作产线，以及臭氧气味处理系统。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image3} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">越南德信</h2>
          <p className="productionbase-nz-desc">
            好嚼、德信生产基地2015年投入使用，总投资1400万美元，占地面积约4万平方米，工厂配备了行业领先的污水生物处理系统和辐照灭菌生产线。
          </p>
          <div
            className="productionbase-nz-image"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://momento360.com/e/uc/79c6de4a1dc546cb859913abf0d5ba75?utm_campaign=embed&utm_source=other&size=medium&display-plan=true'
              );
            }}
          >
            <img className="productionbase-nz-360vr-bg" src={Image4} alt="新西兰KCPF工厂全景" />
            <img className="productionbase-nz-360vr" src={Image360VR} alt="点击查看 360° 全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">越南巴啦啦</h2>
          <p className="productionbase-nz-desc">
            巴啦啦生产基地建立于2017年总投资200万美元，占地面积约11000平方米。
          </p>
          <div
            className="productionbase-nz-image"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://momento360.com/e/uc/4f2940f59ab948668c334f1178abb7b0?utm_campaign=embed&utm_source=other&size=large&display-plan=true'
              );
            }}
          >
            <img className="productionbase-nz-360vr-bg" src={Image5} alt="新西兰KCPF工厂全景" />
            <img className="productionbase-nz-360vr" src={Image360VR} alt="点击查看 360° 全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">柬埔寨爵味食品</h2>
          <p className="productionbase-nz-desc">
            爵味生产基地2022年投入使用，总投资8000万美元，占地面积约8万平方米，厂区产线配置全面，涵盖了畜皮咀食品和植物咀嚼食品，营养肉质零食。同时配备有行业领先的辐照产线和污水处理系统。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image6} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">温州佩蒂</h2>
          <p className="productionbase-nz-desc">
            温州佩蒂工厂于2002年正式成立，占地面积约33000平方米，主要生产动物皮嚼食、无皮嚼食、营养肉类零食、罐头食品等，拥有完善的生产和检测体系，工厂配有辐照灭菌生产线、污水处理系统、自动包装生产线，并具备微生物、理化指标分析、兽药残留等自检能力。
          </p>
          <div
            className="productionbase-nz-image"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.720yun.com/vr/819jz7wvea0');
            }}
          >
            <img className="productionbase-nz-360vr-bg" src={Image7} alt="新西兰KCPF工厂全景" />
            <img className="productionbase-nz-360vr" src={Image360VR} alt="点击查看 360° 全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">江苏康贝</h2>
          <p className="productionbase-nz-desc">
            江苏康贝成立于2010年，总投资7500万人民币，占地约100亩，主要生产风干食品、冻干食品、膨化食品、营养肉类零食、鸟食及可食用小动物玩具，以及各类咀嚼食品。
          </p>
          <div
            className="productionbase-nz-image"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.720yun.com/vr/5f3jz7wasf3');
            }}
          >
            <img className="productionbase-nz-360vr-bg" src={Image8} alt="新西兰KCPF工厂全景" />
            <img className="productionbase-nz-360vr" src={Image360VR} alt="点击查看 360° 全景" />
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
