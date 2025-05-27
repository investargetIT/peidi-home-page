import React, { useEffect, useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image4 from './images/4.webp';
import BannerImage from './images/banner-image.webp';
export default function Meatyway() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="天然成就美味" />

      <div className="philosophy-content">
        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={BannerImage} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <h2>爵宴</h2>
              <p>
                爵宴秉持着“只选用天然食材，天然成就美味”的理念，依托全球原料供应链体系和生产基地的优势，十年遍访北美、澳洲、东南亚等地，始终坚持以百里挑一的匠心严选狗狗的美味佳肴。未来，爵宴将持续网罗全球高品质天然食材，致力于让狗狗「吃好」。
              </p>
            </div>
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
