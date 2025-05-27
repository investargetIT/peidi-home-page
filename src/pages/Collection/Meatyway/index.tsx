import React, { useEffect, useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image1Hover from './images/1-hover.webp';
import Image2 from './images/2.webp';
import Image2Hover from './images/2-hover.webp';
import Image3 from './images/3.webp';
import Image3Hover from './images/3-hover.webp';
import Image4 from './images/4.webp';
import Image4Hover from './images/4-hover.webp';
import Image5 from './images/5.webp';
import Image5Hover from './images/5-hover.webp';
import Image6 from './images/6.webp';
import Image6Hover from './images/6-hover.webp';
import Image7 from './images/7.webp';
import Image7Hover from './images/7-hover.webp';
import Image8 from './images/8.webp';
import Image8Hover from './images/8-hover.webp';
import Image9 from './images/9.webp';
import Image9Hover from './images/9-hover.webp';

import BannerImage from './images/banner-image.webp';
export default function Meatyway() {
  const imagesList = [
    {
      image: Image1,
      hoverImage: Image1Hover,
      title: 'Meatyway 鸭肉干零食',
    },
    {
      image: Image2,
      hoverImage: Image2Hover,
      title: 'Meatyway 鸡肉干零食',
    },
    {
      image: Image3,
      hoverImage: Image3Hover,
      title: 'Meatyway 鲭鱼干宠物零食',
    },
    {
      image: Image4,
      hoverImage: Image4Hover,
      title: 'Meatyway 姜黄鸡肉干',
    },
    {
      image: Image5,
      hoverImage: Image5Hover,
      title: 'Meatyway 新西牛草胃/牛肋骨/羊肝',
    },
    {
      image: Image6,
      hoverImage: Image6Hover,
      title: 'Meatyway 鸭肉红薯卷/鸡肉苹果派/鸡肉胡萝卜卷/鸡肉香蕉卷/鸡肉紫薯卷/鸭肉雪梨卷',
    },
    {
      image: Image7,
      hoverImage: Image7Hover,
      title: 'Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜',
    },
    {
      image: Image8,
      hoverImage: Image8Hover,
      title: 'Meatyway 鸭肉原生风干犬粮',
    },
    {
      image: Image9,
      hoverImage: Image9Hover,
      title: 'Meatyway 宠物零食冻干',
    },
  ];

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
