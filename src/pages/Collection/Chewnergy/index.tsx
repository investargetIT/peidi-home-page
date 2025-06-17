import React from 'react';
import { Button } from 'antd';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import ChewableBanner from '@/pages/Home/HomeBanner/images/chewnergy.jpg';
import LogoChewable from '@/pages/Home/HomeBanner/images/chew-logo.png';
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

export default function Chewnergy() {
  const bannerData = {
    title: '宠物咀嚼标准定义者',
    subTitle: '专注咀嚼产品30年+',
    image: ChewableBanner,
    logo: LogoChewable,
    btnText: '立即查看',
  };

  const imagesList = [
    {
      image: Image1,
      hoverImage: Image1Hover,
      title: 'Chewnergy 产品1',
    },
    {
      image: Image2,
      hoverImage: Image2Hover,
      title: 'Chewnergy 产品2',
    },
    {
      image: Image3,
      hoverImage: Image3Hover,
      title: 'Chewnergy 产品3',
    },
    {
      image: Image4,
      hoverImage: Image4Hover,
      title: 'Chewnergy 产品4',
    },
    {
      image: Image5,
      hoverImage: Image5Hover,
      title: 'Chewnergy 产品5',
    },
    {
      image: Image6,
      hoverImage: Image6Hover,
      title: 'Chewnergy 产品6',
    },
    {
      image: Image7,
      hoverImage: Image7Hover,
      title: 'Chewnergy 产品7',
    },
    {
      image: Image8,
      hoverImage: Image8Hover,
      title: 'Chewnergy 产品8',
    },
    {
      image: Image9,
      hoverImage: Image9Hover,
      title: 'Chewnergy 产品9',
    },
  ];

  return (
    <div className="philosophy-page">
      {/* 使用类似HomeBanner的样式 */}
      <div className="meaty-banner-container">
        <div className="banner-container">
          <div className="banner-slide" style={{ backgroundImage: `url(${bannerData.image})` }}>
            <div className="banner-content default-layout">
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
              <h2>齿能</h2>
              <p>
                齿能作为宠物咀嚼标准的定义者，专注咀嚼产品研发30年+，致力于为宠物提供安全、健康、有趣的咀嚼体验。通过科学的产品设计和严格的质量控制，齿能不仅满足宠物的咀嚼天性，更有助于宠物的口腔健康和心理健康，让每一次咀嚼都成为宠物快乐成长的一部分。
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
