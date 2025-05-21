import React, { useState } from 'react';
import './index.less';
import StockInfo from '../components/StockInfo';
import Banner1 from './images/1.jpg';
import Banner2 from './images/2.jpg';
import Banner3 from './images/3.jpg';
import Banner4 from './images/4.jpg';

export default function Finance() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imgArr = [
    {
      src: Banner1,
      title: '每天一根 健康从齿开始'
    },
    {
      src: Banner2,
      title: '2019佩蒂春季新品发布会 3月13日 北京 鸟巢见'
    },
    {
      src: Banner3,
      title: '全球珍稀食材 真正猎食肉类'
    },
    {
      src: Banner4,
      title: '全球好产品 推动行业健康标准升级'
    }
  ];

  return (
    <div className="market-page">
      <StockInfo stockName="佩蒂股份" stockCode="300673" />

      <div className="section-title-area">
        <div className="section-title-container">
          <div className="section-title-box">
            <div className="section-title-underline"></div>
            <h2 className="section-title">新闻图集</h2>
          </div>
        </div>
      </div>

      <div className="gallery-container">
        {/* Main large image */}
        <div className="main-image-container">
          <img
            src={imgArr[activeIndex].src}
            alt={imgArr[activeIndex].title}
            className="main-image"
          />
          <h3 className="image-title">{imgArr[activeIndex].title}</h3>
        </div>

        {/* Thumbnails */}
        <div className="thumbnails-container">
          {imgArr.map((item, index) => (
            <div
              key={index}
              className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.src} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 