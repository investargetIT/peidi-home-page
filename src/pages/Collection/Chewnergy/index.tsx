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
              <img
                src={image2Src}
                alt="齿能产品展示1"
                onClick={() => {
                  window.open(
                    'https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-23129053535.66.732e627c4Y8mCI&id=653933462392&rn=9a7a52e930d2b8cf9ea12737fc5b06ac&abbucket=6&pisk=g-ftJAN7Vkqg5N19-Nynm245aAcYxJbwAG7SinxihMIdugQGiOqZcS_2xjvgQi4ApiseIhZaQEGAVM8mSN9sAXTv5cTj1KOCpG7WIiQ47EtfciKcIJVl7NR2GujYZ7bajR_osGhXGvaXlEY_-dwuIMZ9GuquMv0BQlAfmGuF6WMBzHT6ldObJHT2oIT6CEapAELycfsfcydBkUmsfAGXdwTvAxM6fAtBAU8klfM6hyQBYEOXci9_JwGs2fKx53lAELFhKtnphjGf9FpQKNtI9EfBWLtR56mIAt89B3_6YumDr09CuKCqujpd5TS2PGi_Dn5dR165VkDMfTLArtQ_1XOG_N6Wh_ZqhNRwXi9ALuhkWCXpe1BauD_1qhBW_Z08jwpRpL8BdqH6sTblgL1_60-HUEIpEOE-6gszz_fRihik_3M_JyHq3dTeQoYSixOP52LpqySE3xJp8eKuJfHq3d9yJ34U_xk2d05..',
                    '_blank'
                  );
                }}
              />
              <p className="productionbase-nz-image-title">齿能1号健齿环</p>
            </div>
            <div
              className="productionbase-nz-image"
              onMouseEnter={handleImage3MouseEnter}
              onMouseLeave={handleImage3MouseLeave}
            >
              <img
                src={image3Src}
                alt="齿能产品展示2"
                onClick={() => {
                  window.open(
                    'https://detail.tmall.com/item.htm?abbucket=6&id=714867217978&pisk=gl1mJG_BRtJXN0EJe_ObLtoPcEKicIO65Gh9XCKaU3-WXtBYf5xG8Zx9QhQvsPjW2sKAkI-MswshDnptH_Ay8eYZbjJZ4L892GhOk1XSsw_1MrOTlI_X1CrLvWCGlZO6h7D9Dsxyzeby7qJaeQJXnU_UvWFdr-8X6ard6s1KFELK_CJ2QQ7yVFtw7GJ2U0-W5Fo2_nzur3TM7Alqg7uySF8w_jJ2z48HRF8qgxorz3Tw_hSw_zAyVFlOAo-V_sCz2126PtWjWsYDnH720ZQAagmpAZ-tsfxR8KbAu3cZ__65ETZH0JgJfIKf8Ej_OjO2IO5vasrz_BWCq1vetRUX3NXlfICz7x-FHipOMLVEqU6PkO5fmVcwlsCpIH9u7f99a6pFLi0_RaR27G9C6kGX0N7CO9d3iDTcUwAl4gHrLi0q1dEFHAM63UTkv-95DxmQGTmUrzDHfK8WuHUurA1B3UTkwz4oKW92PE0R.&rn=9a7a52e930d2b8cf9ea12737fc5b06ac&spm=a1z10.3-b-s.w4011-23129053535.52.732e627c4Y8mCI',
                    '_blank'
                  );
                }}
              />
              <p className="productionbase-nz-image-title">齿能OK结骨</p>
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
