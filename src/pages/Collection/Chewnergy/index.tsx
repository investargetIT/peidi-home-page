import React from 'react';
import { Button } from 'antd';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import ChewableBanner from '@/pages/Home/HomeBanner/images/chewnergy.jpg';
import LogoChewable from '@/pages/Home/HomeBanner/images/chew-logo.png';
import BannerImage from './images/image-banner.png';
import Image1 from './images/1.png';
import Image2 from './images/2.png';
import Image3 from './images/3.png';
import Image4 from './images/4.png';
import Footer1 from './images/footer1.png';
import Footer2 from './images/footer2.png';
import Footer3 from './images/footer3.png';

export default function Chewnergy() {
  const bannerData = {
    title: '宠物咀嚼标准定义者',
    subTitle: '专注咀嚼产品30年+',
    image: ChewableBanner,
    logo: LogoChewable,
    btnText: '立即查看',
  };

  const imageList = [
    {
      src: Image1,
      title: '健齿环',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=653933462392&pisk=g_e-RhX15ZbogG2-mu5D-e9IkDpLvsqrlzr6K20kOrUYYPEuK7byR9ZEopclayjLMyaqZ4_PaD9L5roHquGWlKiKVUiBFXMbMzrsZyEF4DgQRy33ZsXg4ukEdN4dIOqrk8KYzWnWdosIvcjmV1ALl1HEdNbpipGPBvzSzmkJNIijuDnIVvaIloiKl09IdygjGciBFvaQRjtjqcmBdLMChIgqjQ9WN4gjccnHF3GQRosxYqgIdbaQcfj2e2KS7pFiq3msjZvB6Cex2b3pKqpLR-JigVaIlp__t0eZ5ugvdp0zDyx8DubJQoDzePngrt98WkZaOjeplN3UHow7Oo8RcAEYi5c8Ma9Ko80qs8aRyQu7ZrhZcjtdQm4iluy7MM8bVP0-FmGcCGEjOS2r_8bXeANaqYVQ5ZAoP5nC4gygBJ0WSYu6NiIvTBlS0b7nfpAIQutxDVj4uBREMmoxSipJTBlS_m3G0TReTjTN.&rn=caeadf2d0751e60314b9b7e490ccd40f&spm=a1z10.3-b-s.w4011-23129053535.54.6be6627cwmKadq',
    },
    {
      src: Image2,
      title: '洁齿骨',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=655871626469&pisk=g1sZJamxqlEaDUA9SMtqTfNhIF96XnPSjiOXntXDCCAMcRE2311x1AtfnKjVG6xXo5K1065cgm_1fhT0mB9qsVYmmXYHEK9MoiOf0AIFami_6PBm0nt0N7Z7VOH9DnV5jZHI9fpDIjqXsdXHXKtj35buVOB9MAl0FwqS363vPA0DisxH-K9DmcxDoJ-H3LxmjEmGKBAptnvmmV0H-LpJiAvci2mHFdcMIKYm-pvyQnAciE2FKBp2mIctmEYrYKLgHHhITv3-gedlIBom4YpwS_rJOmcfxdWeNOXxmmjeQFIXKaTeSF_ceUI1LoopfT7HxKSYEqR2zZj6xGV3qeLcx6vh1-gvLZWc2hLthmtNo1I2WNkYe9xG9adJSyFpLGsWuQLEt5XCLCYPu1NKmC_PK685AXiWqaCF0Uxl4NlvKMcVDTHsuFvpLQwULl78ucobl28KkqLs9pR7IR0xkFj9LQwUzq3v5hpeNR5V.&rn=caeadf2d0751e60314b9b7e490ccd40f&spm=a1z10.3-b-s.w4011-23129053535.62.6be6627cwmKadq&skuId=4902751482176',
    },
    {
      src: Image3,
      title: 'OK洁骨',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=714867217978&pisk=gAAsJ8mJZlq6OWCYlO0UO5SkOt6Jh2lPXr_vrEFak1C9kStw2FRa_R8vdUxISs-2kitXYMAZSiugcnTX5OQT6NBLJaQ4XZB9kr_vY1BDQiSNcsTDV2orab8MSsft40lrfvv9w_VYMZEVpJQGGN3zhfHWSsfxcyPxUbTMjBjnKRQAJ2_VuNIvDGLdpMbfWRKAX9EdoZfAMnBYJXQ5uSEOMReKRaQbMoQY69CdyNZTDnCxReIhksQ9DshTtv_KCM8s74YJDGmKuFjQMSdCJmjJ5Z7hRB_ABgBdASHeON612FRiwyDAJBRCU9zq06LkLhQCNfZl5pL56ZOmy-sfhCfCA3G8iwv9fBBXTqcW-19BO1Rtm8YeRGB5Tpknbt56fLjlBvmHceswDC6LfDS2UeROd3nUOnXXHC5p6Dh54YFPVWCghbfbGwsrR2w0nwuiy-d4zqX5Bwb3z2gQU-XO-w9qR2wmsOQh-tuIR8bG.&rn=caeadf2d0751e60314b9b7e490ccd40f&spm=a1z10.3-b-s.w4011-23129053535.52.6be6627cwmKadq',
    },
    {
      src: Image4,
      title: '经典结骨',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=634412166455&pisk=gVyS-v_TIUY5MHHpAbj2hLughXGtdiWZyHiLjkpyvYH8vpazWuyyUQrLGl4fqvzUv2aQuq2Pq2SkRyZQVbnJe0hvDcneyDh8vHiLuYh3a2urRvZ35i7NQOruqvDR7NWNPsV8BYn-Jbndvqns2ioR_BaA1vDd7wO2pbXsKz3oSCOJMm3mADn-py3YDDgx2LnLJqhxXDp-pyUKMnnrbDppevBvMqmwep3KwjHxfcJpw0ULDiisk2HKwyExs95jD_g4VgSgXy3k_nqZlppLhmQnWu_9Lmw-Vmg_28ODiXmSNVE-oN8EbFhYxXwHxpGb254nXzLRR22bD8FTWZRry5iQbWZReKHzEuFt9RQH9uDoPyhQiN9ZVYPj18NlxEE874NtEk-1zoG_GfmxMHO-U5raKfeRFF0qsDaj_7_6FPIz2du6HYACIv9IcVSfcBAn0gj99J-NxfG-mmxNciOwtbnmcWSfcBXowmmmTisXs0f..&rn=caeadf2d0751e60314b9b7e490ccd40f&spm=a1z10.3-b-s.w4011-23129053535.68.6be6627cwmKadq',
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
                咀嚼是狗的天性，咀嚼习惯关系到狗狗一生的健康，齿能品牌致力于在不同场景下通过创新的咀嚼产品解决狗狗不同生理心理问题，科学守护狗狗健康。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 产品展示区域 */}
      <div className="health-product-grid-section">
        <div className="health-product-grid">
          {imageList.map((item, index) => (
            <div key={index} className="health-product-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="health-product-image">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="health-product-title">
                  <h3>{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">30多年专注宠物牙齿健康 全球57项先进技术专利</h2>

          <div className="productionbase-nz-image">
            <img src={Footer1} alt="爵宴品牌形象" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">
            《宠物食品-狗咬胶》中国国标起草单位，第5代宠物咀嚼产品市场引导者
          </h2>

          <div className="productionbase-nz-image">
            <img src={Footer2} alt="爵宴品牌理念" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">
            宠物口腔医学专家刘朗博士推荐 中检测产品追溯体系认证
          </h2>

          <div className="productionbase-nz-image">
            <img src={Footer3} alt="爵宴品牌理念" />
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
