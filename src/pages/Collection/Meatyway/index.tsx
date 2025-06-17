import React from 'react';
import { Button } from 'antd';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import MeatyBanner from '@/pages/Home/HomeBanner/images/meatyway.jpg';
import LogoMeaty from '@/pages/Home/HomeBanner/images/meaty-logo.png';
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
  const bannerData = {
    title: '天然成就美味',
    subTitle: '天然膳食标准引领者',
    image: MeatyBanner,
    logo: LogoMeaty,
    btnText: '立即查看',
  };

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
      {/* 使用类似HomeBanner的样式 */}
      <div className="meaty-banner-container">
        <div className="banner-container">
          <div className="banner-slide" style={{ backgroundImage: `url(${bannerData.image})` }}>
            <div className="banner-content alternate-layout">
              <img src={bannerData.logo} alt={`${bannerData.title} Logo`} className="brand-logo" />
              <div className="banner-text">
                <h2>{bannerData.title}</h2>
                <p>{bannerData.subTitle}</p>
                <Button className="banner-btn">{bannerData.btnText}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="philosophy-content">
        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={BannerImage} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <h2>爵宴</h2>
              <p>
                爵宴秉持着"只选用天然食材，天然成就美味"的理念，依托全球原料供应链体系和生产基地的优势，十年遍访北美、澳洲、东南亚等地，始终坚持以百里挑一的匠心严选狗狗的美味佳肴。未来，爵宴将持续网罗全球高品质天然食材，致力于让狗狗「吃好」。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 产品展示区域 */}
      <div className="products-section">
        <div className="products-grid">
          {imagesList.map((item, index) => (
            <div key={index} className="product-item">
              <div className="product-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                  onMouseEnter={e => {
                    e.currentTarget.src = item.hoverImage;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.src = item.image;
                  }}
                />
              </div>
              <h3 className="product-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
