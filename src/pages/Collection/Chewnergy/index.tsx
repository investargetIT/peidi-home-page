import React, { useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image21 from './images/2-1.webp';
import Image3 from './images/3.webp';
import Image31 from './images/3-1.webp';
import Image4 from './images/4.webp';
import Image5 from './images/5.webp';
import Image6 from './images/6.webp';

export default function Chewnergy() {
  const [image2Src, setImage2Src] = useState(Image21);
  const [image3Src, setImage3Src] = useState(Image31);

  const handleImage2MouseEnter = () => {
    setImage2Src(Image2);
  };

  const handleImage2MouseLeave = () => {
    setImage2Src(Image21);
  };

  const handleImage3MouseEnter = () => {
    setImage3Src(Image3);
  };

  const handleImage3MouseLeave = () => {
    setImage3Src(Image31);
  };

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="口腔科学" subTitle="宠物专业咀嚼" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">健康从齿开始</h2>
        </div>
        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image1} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                齿能品牌专注咀嚼产品开发30年。佩蒂每年出口美国超过2亿根咀嚼食品，超过80%的美国养宠家庭都使用过佩蒂研发生产的产品。咀嚼习惯关系到宠物的一生健康，齿能品牌希望能够肩负起普及这一科学养宠观念的重任，让中国宠物的健康更长久。
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">齿能产品</h2>
          <div className="productionbase-nz-image-container">
            <div
              className="productionbase-nz-image"
              onMouseEnter={handleImage2MouseEnter}
              onMouseLeave={handleImage2MouseLeave}
            >
              <img src={image2Src} alt="齿能产品展示1" />
            </div>
            <div
              className="productionbase-nz-image"
              onMouseEnter={handleImage3MouseEnter}
              onMouseLeave={handleImage3MouseLeave}
            >
              <img src={image3Src} alt="齿能产品展示2" />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">技术专利</h2>
          <p className="productionbase-nz-desc">30年专注宠物牙齿健康 全球32项先进技术专利</p>
          <div className="productionbase-nz-image">
            <img src={Image4} alt="齿能产品展示3" />
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">市场引导</h2>
          <p className="productionbase-nz-desc">
            《宠物食品-狗咬胶》中国国标起草单位，第5代宠物咀嚼产品市场引导者
          </p>
          <div className="productionbase-nz-image">
            <img src={Image5} alt="齿能产品展示4" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">体系认证</h2>
          <p className="productionbase-nz-desc">
            宠物口腔医学专家刘朗博士推荐 中检产品追溯体系认证
          </p>
          <div className="productionbase-nz-image">
            <img src={Image6} alt="齿能产品展示5" />
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
