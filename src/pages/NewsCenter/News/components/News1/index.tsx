import React from 'react';
import './index.less';
import Image1 from './images/image1.webp';
import Image2 from './images/image2.webp';
export default function News1() {
  return (
    <div className="news-container">
      <div className="news-image-wrapper">
        <img src={Image1} alt="佩蒂公司总部" />
      </div>

      <div className="news-content">
        <h2 className="news-title">佩蒂股份2024年三季报：利润爆增630%，毛利连续7季度提升</h2>
        <div className="news-date">2024-10-30</div>

        <div className="news-text">
          <p>
            10月23日，佩蒂股份披露2024年三季报。前三季度，公司累计实现营业收入为13.23亿元，同比增长44.34%；归母净利润1.56亿元，同比增长630.85%。
          </p>

          <p>
            其中，公司第三季度实现营业收入4.77亿元，同比增长12.61%；实现归属上市公司股东的净利润0.57亿元，同比增长319.98%。从单季度来看，自2023年第四季度开始，佩蒂股份业绩回升，归母净利润连续四个季度实现翻倍增长！
          </p>

          <p>
            过去三个季度，公司坚持"一体两翼"战略，持续开拓创新，不仅实现海外ODM业务的大幅增长，国内市场自有品牌建设也取得突破性进展。同时作为行业领军企业，公司积极履行社会责任，致力于探索人与宠物和谐共存以及人文关怀的新途径，以期为社会带来更多积极的影响。
          </p>
        </div>

        <h3 className="news-subtitle">毛利连续7个季度提升</h3>
      </div>

      <div className="news-image-wrapper">
        <img src={Image2} alt="财务数据图表" />
      </div>
    </div>
  );
}
