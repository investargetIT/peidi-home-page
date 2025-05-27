import React from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';
import { Link } from 'react-router-dom';
export default function CorporatePhilosopy() {
  const imageArr = [
    {
      url: Image1,
      title: '爵宴',
      subTitle: '蛋白质+优质膳食纤维，只采用天然成分。',
      link: '/collection/meatyway',
    },
    {
      url: Image2,
      title: '好适嘉',
      subTitle: '每个毛茸茸的孩子都是独一无二的，他们的营养需求自然也不同。适合自己的才是最好的。',
      link: '/collection/health',
    },
    {
      url: Image3,
      title: '齿能',
      subTitle: '齿能希望肩负起普及这种科学宠物护理理念的重任，让宠物保持更长久的健康。',
      link: '/collection/chewnergy',
    },
    {
      url: Image4,
      title: 'SmartBones',
      subTitle: '帮助狗狗清洁牙齿，清新口气，锻炼牙齿，保持牙齿健康快乐。',
      link: '/collection/smartbones',
    },
  ];

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="佩蒂——所有品牌" />

      {/* 产品卡片区域 */}
      <div className="product-cards-section">
        <div className="product-cards-container">
          {imageArr.map((item, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={item.url} alt={item.title} />
              </div>
              <h3 className="product-title">{item.title}</h3>
              <p className="product-description">{item.subTitle}</p>
              <Link to={item.link} className="product-link">
                阅读更多
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
