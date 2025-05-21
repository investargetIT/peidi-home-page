import React from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';

export default function CorporatePhilosopy() {
  return (
    <div className="philosophy-page">
      <div className="banner-container">
        <img src={Banner} alt="banner" className="banner-image" />
        <div className="banner-overlay">
          <h1 className="banner-title">关于佩蒂——企业文化</h1>
        </div>
      </div>

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">30多年来致力于全球宠物健康</h2>
          <p className="philosophy-subtitle">30 多年来佩蒂为全球各地的宠物主创造了数千种最畅销的产品。</p>
          <p className="philosophy-main-text">佩蒂成立于1992年，专注于围绕宠物健康建立科学食品体系，始终坚持用全球好产品不断推动宠物行业健康标准升级。30多年来，佩蒂一直担当全球宠物市场健康升级的助推器，为全球顶级宠物食品公司和宠物主打造了数以千计热销的健康产品。现在，佩蒂希望能赋能中国宠物行业健康升级，充分利用其在全球积累的研发优势、生产优势以及海外优质品牌服务中国市场，全面启动在宠物领域的布局，旨在成为中国第一的宠物健康生态集团。</p>
          <div className="philosophy-image">
            <img src={Image1} alt="人与宠物的温馨互动" />
          </div>
        </div>

        <div className="philosophy-header">
          <h2 className="philosophy-title">董事长寄语</h2>
          <p className="philosophy-subtitle">爱心事业，『信』者无疆</p>
          <p className="philosophy-main-text">“做人讲究的是信用，办企业也一样。” 诚信为本，创新是源，有本有源才能使企业的良性发展成为必然。 中华堂堂礼仪之邦，向来有“重信用、讲诚信”的优良传统。古人有“重然诺，轻生死”之说，其意就是不轻易对人许诺，但一经许诺，就要坚守信用，甚至于能将生死置之度外。</p>

        </div>

        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image2} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>正如孔子先圣所言：“人而无信，不知其可也。” 事业从无坦途，成功须靠拼搏。企业的道德首先是和诚信相连，生产经营与道德的有机结合才能使一个企业真正成为社会所需要的力量。我们相信更多的企业，都会悟到这个发展的真谛，运用自如得法，时时存乎于心。佩蒂企业一路走过的昨天、今天以及明天，正是基于所倡导的“服务社会、实现自我”的企业价值观，坚持“以诚取信，以信立业”，严格履行一个企业对社会、客户和员工应尽的义务，谋求公司与客户、公司与社会、公司与个人的和谐发展。</p>
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