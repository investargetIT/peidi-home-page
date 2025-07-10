import './index.less';
import BannerContainer from '@/components/BannerContainer';
import Banner from './images/banner.webp';
import { useState, useRef } from 'react';
import Bg1 from './images/1-bg.webp';
import Bg2 from './images/2-bg.webp';
import Bg3 from './images/3-bg.webp';
import Bg4 from './images/4-bg.webp';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';

export default function Video() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const videoList = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/88497bf71018772300497649.mp4?width=1280&height=720',
      title: '佩蒂成立30周年',
      // The poster URL should be a real image URL in your project
      poster: Bg1,
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/a0b11b721008597875286728.mp4?width=1280&height=720',
      title: '新西兰KCPF品牌',
      poster: Bg2,
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/44a1ad471008597875286746.mp4?width=1920&height=1080',
      title: '爵宴原生风干犬粮',
      poster: Bg3,
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/2f9ceb4a1013546935906276.mp4?width=1920&height=1080',
      title: '爵宴美食家系列罐头',
      poster: Bg4,
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
    <div className="video-page">
      <BannerContainer bannerImage={Banner} title="企业视频" />
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
      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
