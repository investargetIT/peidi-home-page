import Banner from './images/banner.jpg';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image from './images/1.jpg';
import Bg1 from './images/1-bg.jpg';
import { useState, useRef } from 'react';

export default function CorporatePhilosopy() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videoList = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/88497bf71018772300497649.mp4?width=1280&height=720',
      title: '佩蒂成立30周年',
      // The poster URL should be a real image URL in your project
      poster: Bg1,
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
    <div className="corporate-philosophy-page">
      <BannerContainer bannerImage={Banner} title="企业理念" />

      <div className="corporate-philosophy-content">
        <div className="corporate-philosophy-header">
          <h2 className="corporate-philosophy-title">佩蒂旨在成为中国领先的宠物健康生态集团</h2>
          <p className="corporate-philosophy-subtitle">使命：用全球好产品推动宠物健康标准升级</p>
          <p className="corporate-philosophy-main-text">
            公司自1992年创立之初就以独特的ODM模式和创新的产品来服务全球宠物用户，迄今30余年，深度参与了海外成熟宠物市场健康标准的历次升级。公司于2017年成为中国宠物行业首家上市公司。
          </p>
        </div>

        <div className="video-content">
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

        <div className="corporate-philosophy-container">
          <div className="corporate-philosophy-text-content">
            <div className="corporate-philosophy-values">
              <p>愿景：做人宠和谐健康生态的卓越建设者</p>
              <p>
                我们认为宠物作为伴侣动物，是能够治愈人心的健康使者，它们是人类美好生活的重要组成部分，我们将通过好产品为宠物带来健康，通过伴侣动物治愈赋能人类心理健康，持续构建人宠和谐健康生态，推动行业的可持续性发展。
              </p>
            </div>
          </div>

          <div className="corporate-philosophy-image">
            <img src={Image} alt="人与宠物的温馨互动" />
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
