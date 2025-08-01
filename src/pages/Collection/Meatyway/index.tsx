import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
// import MeatyBanner from '@/pages/Home/HomeBanner/images/meatyway.jpg';
import MeatyBanner from './images/banner-meaty.jpg';
import LogoMeaty from '@/pages/Home/HomeBanner/images/meaty-logo.png';

import Dry from './images/dry.png';
import TrueMeat from './images/trueMeat.png';
import NZFood from './images/nz-food.png';
import Fruit from './images/fruit.png';
import NiceFood from './images/niceFood.png';
import Cold from './images/cold.jpg';
import Footer1 from './images/footer1.png';
import Footer2 from './images/footer2.png';
import BannerImage from './images/banner-image.jpg';
import Bg3 from './images/3-bg.jpg';
import Bg4 from './images/4-bg.jpg';
import { useState, useRef } from 'react';

export default function Meatyway() {
  const [playingVideo, setPlayingVideo] = useState<string[]>([]);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const bannerData = {
    title: '天然成就美味',
    subTitle: '天然膳食标准引领者',
    image: MeatyBanner,
    logo: LogoMeaty,
    btnText: '立即查看',
  };

  const videoList1 = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/44a1ad471008597875286746.mp4?width=1920&height=1080',
      title: '爵宴原生风干犬粮',
      poster: Bg3,
    },
  ];

  const videoList2 = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/2f9ceb4a1013546935906276.mp4?width=1920&height=1080',
      title: '爵宴美食家系列罐头',
      poster: Bg4,
    },
  ];
  const handlePlayVideo = (src: string) => {
    setPlayingVideo(prev => prev.includes(src) ? prev : [...prev, src]);

    if (videoRefs.current[src]) {
      videoRefs.current[src]?.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  };

  const setVideoRef = (el: HTMLVideoElement | null, src: string) => {
    videoRefs.current[src] = el;
  };

  return (
    <div className="philosophy-page">
      {/* 使用类似HomeBanner的样式 */}
      <div className="meaty-banner-container">
        <div className="banner-container">
          <div
            className="banner-slide"
            style={{ backgroundImage: `url(${bannerData.image})` }}
          ></div>
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
                狗狗是我们爱的家人，美食和陪伴是我们爱它的方式。它们是天然美食家，简单纯净才是它们的心之所爱。所以我们严选优质的天然食材，更少程度地加工，保留营养和原始味蕾体验。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 产品分类展示区域 - 使用container样式 */}
      <div className="meatyway-section">
        <div className="container">
          <h2 className="meatyway-title">风干粮系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?abbucket=6&id=779237393226&pisk=ghQ-Jga_C-2luO7Ji_rmK6P4BTuLnofyhT5s-pvoAtBATOCl-g2rdy1en2xu49VdD962qLwz4BgdCtRnZ_tShqOpNYOIPH1fDT56q9CUaB9Cd9phqo4Ga_8eRRXLSPfrdSjUiTKBRnNB9B9Qi3ZgajpkRR2gJmcX48YCKBkJgriX_KOWO3t7MnO9OeOWVHNvhBdwd46CdSLXOQnBN0tIcmOyhYMSVH9jhBO-PBtBOSCX3BTBd9t7MsGOb4pKNdudjqUTG9lMW2gCkQKYm_9f-wPHN3p1NKEabZpw2d1WH226yw06pK7_noCVeg6kg9UTHFsNHwK6JzHwwi19lLY_XmLRiT79PNe-rIY2UhOf5WmwnZpldaKbsVKHlNx6Piq4EHYJ69_PeX3CCsfGzn7LBx9FqC8X9wPsvpKC43QGWwvSIUJsVSFxYD-Wg3yH12mB7_GvMdVV3DoeDIRvIS3-YD-WbIpggznEYnMN.&rn=11e52dbc785b0ead6e56652032442128&spm=a1z10.3-b-s.w4011-23129053535.48.7c11627cfpzYPi&sku_properties=122216494%3A120039'
                );
              }}
            >
              <img src={Dry} alt="Meatyway 鸭肉干零食" className="meatyway-product-image" />
            </div>
          </div>
        </div>

        <div className="video-content" style={{ display: 'block' }} >
          {videoList1.map(item => (
            <div className="video-item" key={item.src}>
              <div className="video-container">
                <video
                  ref={el => setVideoRef(el, item.src)}
                  src={item.src}
                  poster={item.poster}
                  controls={playingVideo.includes(item.src)}
                  controlsList="nodownload"
                  preload="none"
                />

                {!playingVideo.includes(item.src) && (
                  <div className="video-overlay" onClick={() => handlePlayVideo(item.src)}>
                    <div className="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="rgba(0, 0, 0, 0.5)" />
                        <path d="M16 12L10 16V8L16 12Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="video-title">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="container">
          <h2 className="meatyway-title">甄肉系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?abbucket=6&id=620844478461&pisk=gafsJWqRZcm__bdxld4EOSW-fjvRfyPyXqTArZhZkCdOkjsN2N5Z_A7AdajQSISVknsfYHfaSnzici_f5dLt6FpKJULqXFLAkqTAYCpcQn-wcI_cVyrza77GSIAT4uPzC8vl3QmxMIn2vpLvGFEPv0bVSIAYc2lYU7_GjtPfFALvJyT2uFKADK3K9HYXWxIvXpnpoEAvMiKOJvLwlnHvDELLRUT2DmKvDenpSUHvWidYRWKHkILADIh9vJTLCH7_7s3UjVMLXN-IMjCBRoxR5sTHS69pB3KpsjeFOF962N5gw22vJ65BUpu40BQlLGLBN5ik59QW6E10yxtXh1ABAgN-ieXOf6pfTrV5-C6COC5TmYbFRhpWT9y3bKR1fTxkBJqhcwtND19Kfk-VUw59dgEEOivfH1Rd6kF54YhyVXdih7AjGetzRyMmnezgyxCqzrvWBeYnzyaIUxv9-e64RyM0sdLH-KzQRYYG.&rn=be0e57a926819f4646fc266dae25f69e&spm=a1z10.3-b-s.w4011-23129053535.56.2d01627cyG9CKo&sku_properties=147956252%3A3814968'
                );
              }}
            >
              <img src={TrueMeat} alt="Meatyway 姜黄鸡肉干" className="meatyway-product-image" />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="meatyway-title">果蔬系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?abbucket=6&id=690835141425&pisk=gG4iJnNSNlo14a6Kvyg14ZzWqVDD5VgjG-LxHqHVYvkIHlEOhZD0a5Dx0xFtos2IpPHT6Vkmo7wuBAnvXy0Eabc23Fo2L2lrp-LY6rqBo7NbW1gA1VNslqWReaU015gju_HH5PYF8bVE_noVv2P16QlGeaQ8tGlskWW8kmatjfhJuqoZ02PEdjpZg-oZ8XkIGjJZuA5htvGv7xoZQBkEMfvquj-aTBlqZf8qbxoe8vGquxyqu6mEdjl9gOkauPUFpGv2pxhuaycijYPFVE8DPfJ-E5u2oE0qsccT_vY2uyZQxk6oQgOKhVH_af2fPFgZmozt8PWFu4r7KrmrriCsbSq3hVUFghkzXRnYWDbyKXZU6oz_IIYq1PU-mYihgEix8znz4RAfNWuZg-i7kTTsQSP7Pu3lSLGgY70h4aKe4RAwlmBzXntjbXGneGiQBhv55kvPt6xohclI_YChtnaSbXGnJ6fHqaiZOfAd.&rn=ec145cba012940d343c720a9c9247aaa&spm=a1z10.3-b-s.w4011-23129053535.52.67db627c9QhHNw&sku_properties=147956252%3A3334588'
                );
              }}
            >
              <img
                src={Fruit}
                alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜"
                className="meatyway-product-image"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="meatyway-title">新西兰系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?abbucket=6&id=739451027866&pisk=gOyZ-UvvEOBNBv3tsJM28Ztl2unspx7WI-gjmoqmfV0ihGBq0Pav5hMbmm24lyDjiNH_3yz0uKN_CAGcn2i2SCcDnecnqmRmi-gb3heUzK91W1ED3xMcPa65FlKtHxb5b7CodFnqcmXjSqqnBmMmKTHPFlEtkh8cVWXW0XGCmnAmorDntmimnmvDIMkn0cDDIjvgx20K-xvinmXnKmnWnI00oe0nf0AijxcD-HmrVx00ofDhYm3nmxDmsJhmapoxsiKGM4TWJ6kErl0enLx-bfjzfI9WFAmi_o2K861QLclZPXaNXzwgRo2_BXCDgxEQarP0rwOsS7oz8bNNzdzzWmqqmPWJ422a0JlTO39uYkr0NXyCqTHZIVVjBotP5kya5leUcnAnQANEaRkleF0bOuyq0-QALzr02ScU3FSz7En3KEyY2hOqsDnEPMSFQ7C2QK1XTXdvMfTKY4sGjIdxsRnEPM5yMIhsBDu5br5..&rn=be0e57a926819f4646fc266dae25f69e&spm=a1z10.3-b-s.w4011-23129053535.60.2d01627cyG9CKo&sku_properties=147956252%3A3334588'
                );
              }}
            >
              <img
                src={NZFood}
                alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜"
                className="meatyway-product-image"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="meatyway-title">美食家罐头系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?abbucket=6&id=716545637060&pisk=g1RIJfmvikqCB718P90a1Ymd8MBvNVlVvz_JoUFUy6Cpy7teDeRUTJ8JCExs-_-yygtWbGAE-gu3V3TWR9QL9wBTWZQzvwFJyz_Jb6BkLgSFV_TkcVoqgj8H-_fK0mlqvSlgfsbL2aEPB5Q5Nwn2iH6y-_f-VPP-3jTHxBkU4JQRWV_PzgUp2TFO6Gb5JgKRvOEOrafRw3BRXOQAogUdvwQt5ZQ7eJIRJRIOkaeR23C-5lIGy_Qp2_h_mA_tdG8I80JpdTulyeI_w7dKZ9sX_8P7NeQddITGfRyw1w6C0O-I-nRpbUdetOD8F_Ywh39JDcyFvK_XftJIcWtXxaL5yHG0lGdBPC6HQrPv5FTJ3OOZkjfC9MpPtUzjYFOBYeA6zzeOO6J1hB1xikIyQEO5PQmo1nTJoLB6NksyuSSb662Si_N55ius582l720YeQzqrt6dSN4q5Vw4E9QG5Lus58chpNbGeVg_nwf..&rn=431bdf87c5f0d8373b4fb5d0b4568097&spm=a1z10.3-b-s.w4011-23129053535.43.6394627cZZjaK2'
                );
              }}
            >
              <img
                src={NiceFood}
                alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜"
                className="meatyway-product-image"
              />
            </div>
          </div>
        </div>

        <div className="video-content" style={{ display: 'block' }} >
          {videoList2.map(item => (
            <div className="video-item" key={item.src}>
              <div className="video-container">
                <video
                  ref={el => setVideoRef(el, item.src)}
                  src={item.src}
                  poster={item.poster}
                  controls={playingVideo.includes(item.src)}
                  controlsList="nodownload"
                  preload="none"
                />

                {!playingVideo.includes(item.src) && (
                  <div className="video-overlay" onClick={() => handlePlayVideo(item.src)}>
                    <div className="play-button">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="rgba(0, 0, 0, 0.5)" />
                        <path d="M16 12L10 16V8L16 12Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="video-title">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="container">
          <h2 className="meatyway-title">冻干系列</h2>

          <div className="meatyway-product-container">
            <div
              className="meatyway-product-item active"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                window.open(
                  'https://detail.tmall.com/item.htm?detail_redpacket_pop=true&id=824066994691&ltk2=175021214275037dtadd6w5majhiv8bw5wb&ns=1&priceTId=213e04ff17502121311282535e1273&query=%E5%86%BB%E5%B9%B2&skuId=5541840017617&spm=a21n57.1.hoverItem.10&utparam=%7B%22aplus_abtest%22%3A%22d275d392621d537afbdef6252bdb748e%22%7D&xxc=ad_ztc'
                );
              }}
            >
              <img
                src={Cold}
                alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜"
                className="meatyway-product-image"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="meatyway-title">爵宴——敬你的最佳拍档</h2>
          <p className="meatyway-desc">
            爵宴认为宠物不仅是被呵护的家人，更是非凡的同行者，你们将一同解锁新体验甚至新成就，而TA将在这段旅程中成为与你相配的最佳拍档。
          </p>
          <div className="meatyway-image">
            <img src={Footer1} alt="爵宴品牌形象" />
          </div>
        </div>
        <div className="container">
          <h2 className="meatyway-title">天然有爱，天然宠爱。</h2>
          <p className="meatyway-desc">
            宠物赋予人更积极、快乐的体验，而自然是给TA最好的款待，在每一个欢乐时刻，愿总有爵宴相伴。
          </p>
          <div className="meatyway-image">
            <img src={Footer2} alt="爵宴品牌理念" />
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
