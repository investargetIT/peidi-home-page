import React from 'react';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import HealthyBanner from '@/pages/Home/HomeBanner/images/health.jpg';
import LogoHealthy from '@/pages/Home/HomeBanner/images/health-logo.png';
import Image1 from './images/1.png';
import Image2 from './images/2.png';
import Image3 from './images/3.png';
import Image4 from './images/4.png';
import Image5 from './images/5.png';
import Image6 from './images/6.png';
import Image7 from './images/7.png';
import Image8 from './images/8.png';
import Image9 from './images/9.png';
import Image10 from './images/10.png';
import Image11 from './images/11.png';
import Image12 from './images/12.png';
import Image13 from './images/13.png';
import Image14 from './images/14.png';
import Image15 from './images/15.png';
import Image16 from './images/16.png';
import Footer1 from './images/footer1.png';
import Footer2 from './images/footer2.png';

import BannerImage from './images/banner-image.png';

export default function Health() {
  const bannerData = {
    title: '健康主食新标准',
    subTitle: '精准营养主义',
    image: HealthyBanner,
    logo: LogoHealthy,
    btnText: '立即查看',
  };

  const imageList = [
    {
      src: Image1,
      title: '98K猫主食罐',
      link: 'https://detail.tmall.com/item.htm?id=712059517905&pisk=gbixvxxBOQAcbqnYEx8ls1wZPFStMUD42jkCj5Vc5bh-CjN0sPsbFTw4pZ_ffAw_XbGM3SD6gfnTNoaZo5V06lHZ9LAHxHDq3lrXtBxnYdQqvk7_CG1gNgw4X-aliUoj3lr6tTj6-HHqg0rWQsw_FLegBN_j1Gs7F7yGcGG_Gz17pJr_ffa_P_wUH-s1l-NWeJwTC5wflgZ7d-F1lfZ6ezwgKlNs1r9-Ff5fD5BbTG33nonKnQYFRwi8HrFOj7Stz0j3zWiYNGO1g8axnxNRfGirW2xogSTFE5r0gvwx_HS4cP3smuiXNhZI8bnTRkLM3rMtyfrmVd_bOqc0Sm4JA_erPx0s0jBOf-omxPFUydsaSui3R2GAQpk7cRGa8cAF0SMsLDu3vnCUH4ML2g8KxDngG6q4OZ9JeN7al8z2sJsGGGAqa8FHUb7N7zezeWvRDN7alyy8tL-A7Nz5T&spm=a21xtw.29178619.0.0',
    },
    {
      src: Image2,
      title: '黄金罐',
      link: 'https://detail.tmall.com/item.htm?id=755154798716&pisk=gRftvrV7Vkqgebf9-NynmmTVd-lAWJbw9G7SinxihMIdlGtMmKG6R2TwyAMsGZTXMMs07hbbbiCvAC9VInxMDIQV2yquZ7bN7IR_quVlarHNwQu65AiDApTvMF9njJ517IRbq2cbE7QNb6kCjcTXRyLDkxM1cjGBRH8mCnsXfpiByURXGi9XdDTyWFGjCFtQJUT-CFT6cDNB7U8shiObJBT2WItfcdadRX1t6n364jBkSCCRSxZhkZ1pWdK5J8lmgAYEqH_1TjhvvRvvV3xKGj1p7ZIZnec8n36yjLx1AWc9MwTAvLXT2fIAlaWXpsn_SgsCHiTFLoHv2t_GU6vElzt5_w1yOpV7yw1FjN5doqNX-gxC71OYNzR91hOp8sqE1nBCh1vwgcZv06QC1tIyY_fRihik_3M_JyHq3dTeQoYSicG0bM8pqySE3xJp8eKuJfHq3d9yJ34U_xk2d05..&spm=a21xtw.29178619.0.0&sku_properties=147956252%3A7067547',
    },
    {
      src: Image3,
      title: '黄金罐',
      link: 'https://detail.tmall.com/item.htm?id=908726569144&pisk=g2FqAjO9tsCq7fixn7Gw4nGMX8gjafSCu5isSP4ilmmmc5ZaSVupshAioQAok0O1kj6t_lozXmMji5yJ_yUTGZh1kjUx6fjCA6Nakrh9ifwNSS8kqVzoSK0GFb24oh5CA61Qkt0x1zjQ1jphnquBsfDmnLAo2qvDslDMZzm-WVxmSIbPz03sSnmMnb0ol2RmsKcMr30ZRKvMnx0or03isI0gjzbr50miOSkiLQutnNh-UTA1yEpiYrmysCVc6xnF5m3-R7ljnDDDcIAmBqkqxrmRmHKKcY4tQ5L9_Yz0pl33mnjZX7zuiJqhVKi0LVzQQrfDZjNYoJDgtGpgkjn4jAyRYBgqG8kUg-Q9qrqI0JcY5eSbzvyrp4Dk7KcbdyNtKSf2v0MK7ukQ3MR4xg7WX4Vkb5Upldkmy4oCza54pORqlph7Fdpth33rAZbDBdH0M4oCz9J9BxGxzD_4b&spm=a21xtw.29178619.0.0&sku_properties=147956252%3A7923519',
    },
    {
      src: Image4,
      title: '全价鲜肉烘焙猫粮',
      link: 'https://detail.tmall.com/item.htm?id=834134482294&pisk=gGHxvavBRUYmlrDYqmRlSNZZNCWTMQm4eqoCIP4c143-fqa0S56bVgZ4vs1fCcZ_B4gM0rm6uVHTP-NZiP40WRnZJ3YHKpmq0RyX-evnLhCqpJ71Cl_gNzZTBoNloQkj0Ry6-gX6tpnquY7C_ZZ_V3EgX11j5O67VzrGGPg_l7_7vky_CVN_NaZUDo61GoaW2orNCoab5us7XljfCVw628ZajRas5St-VXscHPIb8Oh3m-HKmnBLZ7k8DSUI2B5AGiEl-ribQOBTyGV_Ry4RCOM80c3VsuXpsyGUoW4jPLXYB0ZtyWcvJt3tfDl_wAQXm2gS6VZraFCTJfimTYVPfHaI30MUF7vBv0Mromk-jG9_q24S0xw9dHyYhrw84AYPhPhS1xV4QZTT7YnShfIPLvDKIr_33y1X23CN_SZzgFqCIZ6Mu4r8-3uP_1P84uUH2tCN_SNU2yxy315aNw5..&spm=a21xtw.29178619.0.0&sku_properties=122216494%3A132179',
    },
    {
      src: Image5,
      title: '冰宴冻干双拼犬粮',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=626826020061&pisk=gb7nJ8fXGM-ItNw9XNTQ0swmbnJkOeTWNT3JeUpzbdJ6eMILFzvlg6vJ4LCpr7X6Bwpd9eJkrs6cppK-vNYwMIDrLBRU7FRyBT3R9ajsrs15JWT8Oe1BPUyYHrQlO6TSyuD2MwmZbBCwT4oUXFuGMt9gHrUAskRBy1yAyeibkBdxzU-e4F8wCQ3yTT-e7cJ6NQkezpPgsdOS4XJyUVzwGInezQ-rbfRkMLRyzUow7dOyzLWyz5YwCQl1rJJFzwQaBOUqSlsR-NAHxK5gc4ulAqKe399Zz-7MtK9VTd0ryp1GeXfG9J0f6e_hnIBL72XcassyjaDanL_G_wSP1vVwo1jODHjgL4vOJdtA892nApSdInOwbb4X6tpNOwSgNA5FHpYe_hU4i1-PXwtfJRuHui1pJgW4BDpFmQSPecoVKXuW2-SKV0te1CvYAh6KxxaCjxPgsmvWYCOeH5ViVZte1CYTs5m0lHR6tfC&rn=a04661a8a72c3b970597de280bcf3342&spm=a1z10.5-b-s.w4011-23128975965.51.72f57140DLNykO',
    },
    {
      src: Image6,
      title: '全价主食冻干生骨肉猫粮',
      link: 'https://detail.tmall.com/item.htm?id=915623689560&pisk=grREvWN8iXhEphsdKC1zbk1u2d_CU_oj8Qs5rUYlRMjhAQtyra7YZuVl-5VGJGNSJ6MRa3Sw2M6CtQJTaELJO2CSJ6Ldw_mjcjOyJeC8t_9rrBPgIwTgt8VnC1ve-uljcjGXJvbdNFmXN6H0XwbbZ_XhKRVGXw23Z3XusFjOyaqhrW0Z7GQ5rkjuK1bGRZPhZJX3sRbPy8quKw2MSGQlZwXhqV8GXa5lqXLdEtPNy90R6OkgN0m_mi8hb7VktbCl0xjVWaOZa9j2-C8wkC-ALiYhb7iCNYCC4GdmfA89YpxCW3lqbsvvbQWcaXrA8dYVsM1m3R5e5HdVtIoUON1OvtbMi4wAfCSBqBWilSW5sI6ctdMtAT1Fu3ApYzPkmFTX9Odr0ljJdZCGzQ30UgWl4TZRSCqywEUQU9bO7igZ7XJxUW7QH19_e8BQXNSj-228e9Ad7igZ38eRd6QNc2-P.&skuId=5781236524518&spm=a21xtw.29178619.0.0',
    },
    {
      src: Image7,
      title: '全价主食冻干生骨肉犬粮',
      link: 'https://detail.tmall.com/item.htm?id=920002436224&pisk=gM5ZAlcxZ5FZ21-9I6OqYcOmD9T6nIr77stXoZbD5hxMfssVoE8-imcDSXcHWHGbWCwvgi-FDh96ssWKgaQA1PdbWCQ9MIq7V71VWNdxsI64o1ln-UQHojv0dBXNSmP7V7N5WRY9Gwq5GCeuVF8SiIvMIvcHvFDiiivmtwxpkEmMof4U8HLXocxmIBYH5UlMiAvc-wYvljcMoKvH-HLDiEvcmw4elHxmOrvDUX8vIrdpLJcj8kwpVNxEijfgMIxrR3Ypu6-vI3viRfG6HFJwqNxLj0nJfpbv3s3xgp7GeiLljcq2D67hsTjuAAtGUE753NVitC1OSTvcZoHcWCKNmKWL4bTw19JP_OUxxNjWbTAOl4r18LWeeevnuAA1Fa1vE1VZ2H9JuMJ5QulNqg5SDefn0sQ-5xJMJe-78yPNe-lw5YdCdxHvCDLeVP4iHxpG6e-788kxHdO983aN0&spm=a21xtw.29178619.0.0&sku_properties=122216494%3A137841548',
    },
    {
      src: Image8,
      title: '鲭鱼罐',
      link: 'https://detail.tmall.com/item.htm?abbucket=6&id=680538862881&pisk=glZxJojCO_f0UGExE-7ksC1NpvtTXa2qNSyBjfcD57F8QWe0jrf21GwZZh0cu5XTy5Nroj1VuAtTO7kMn-gXV3MqLETXlqG7ySyIo5eN3AG_15hgoaj33-oZf6VOxM2q84BX-ShXlg6sIvD1Eq6vfCISf6fhXUvSusm_sjWBLgTSLbMjCqG1e4MEBcMj5x6-NAHE1nN_1ThSpxK6fxTjFUMnNFOsfxGWFxknCCtslTeSaAis15gfe8G6Tnh9hX-T-xbANwxgaht_2x35r-GWtqErHmhLhoK6fAkxkXwja6AiKBg7QVEwQh38hyPZdSOf6fr8FoaQO_YmGyHTKPefc3i00-aI5k1w5-oqM5gTz6KnHm4-JoUVQQwbtjUI0Rvdi83Ly2kSPdLjmy23b2ZfDBlo8AF--rCpDWsPzkqLjjOn0XTfeTLw7qMru1DBjFiUhLH-tTPy7Fu-UYhhenLw7qgEeXXP0F8ZPB5..&rn=a04661a8a72c3b970597de280bcf3342&spm=a1z10.5-b-s.w4011-23128975965.49.72f57140DLNykO&sku_properties=147956252%3A47791',
    },
    {
      src: Image9,
      title: '沙丁鱼罐',
      link: 'https://detail.tmall.com/item.htm?abbucket=2&detail_redpacket_pop=true&id=923131639542&ltk2=175005936546663e5ofg5ewdflf91mf1nqh&ns=1&priceTId=213e033817500593524428741e1cf4&query=%E5%A5%BD%E9%80%82%E5%98%89%E6%B2%99%E4%B8%81%E9%B1%BC%E7%BD%90&skuId=5969760983775&spm=a21n57.1.hoverItem.5&utparam=%7B%22aplus_abtest%22%3A%2210c65986430a486f6ac6ca016da5c371%22%7D&xxc=taobaoSearch',
    },
    {
      src: Image10,
      title: '冻干零食系列',
      link: 'https://detail.tmall.com/item.htm?id=872874499999&pisk=gxDivki7VfP1I8TL9vw6a0a2hiacBRwboqBYk-U2TyzCBqeTHW7UVl7V_lrNYXmSoPKX1Rh3o2u37qmXfozquq4x6Bp-fcwb3U3DeLn1V2w-GVXV_D-4muB2v5opu5jQ3ULJe6IU1FeqkPsyke5UVyraborwxMr84-r4b--38oq5gNuquHVUmu6Vb5z2L9r48Z7agt7UYuZGbG5N_HmURoqNQqy2xJzQ0XEw7PkqBv8KJ7zrcc6CDlNgzczhEDGzbgzpFkX4LvrasY8uytRKKlVgzcHkdzcLYvH3wWIvkJoS9Vr3Edb7jXouQoDX4s40iAw3-4vPhkGZSvPmpn9oARcnKRHwl_iKxPPupXdBWSeiSba7_BTIoD4tuAVFSeUxwDHat48dKqNmgAeEQeJl4W5FaVjNhSLr6s1b_kZ3yCNIW1VCppnJxHful5rQbzKHxsM7_kZ3pHxhZLNaAljd.&spm=a21xtw.29178619.0.0',
    },
    {
      src: Image11,
      title: '烘干牛肉粒',
      link: 'https://detail.tmall.com/item.htm?abbucket=2&detail_redpacket_pop=true&id=842205506301&ltk2=17500586728971e10rxa4q8r2o9g6dxbbcp&ns=1&priceTId=2150464317500584205952311e1ce2&query=%E5%A5%BD%E9%80%82%E5%98%89%E7%83%98%E7%84%99%E7%8A%AC%E7%B2%AE&skuId=5864158599839&spm=a21n57.1.hoverItem.42&utparam=%7B%22aplus_abtest%22%3A%2292e86e630e33f089501102efb6c7f85c%22%7D&xxc=taobaoSearch',
    },
    {
      src: Image12,
      title: '牛皮卷棒',
      link: 'https://detail.tmall.com/item.htm?abbucket=2&detail_redpacket_pop=true&id=892211241014&ltk2=1750059750790bgo1b97o57o39iey00lqg4&ns=1&priceTId=2150429417500594990358264e1d94&query=%E5%A5%BD%E9%80%82%E5%98%89%E7%89%9B%E7%9A%AE%E5%8D%B7&skuId=5738438304514&spm=a21n57.1.hoverItem.1&utparam=%7B%22aplus_abtest%22%3A%228687b9979c7cb7a476198f821efabfd5%22%7D&xxc=taobaoSearch',
    },
    {
      src: Image13,
      title: '果蔬清口棒',
      link: 'https://item.jd.com/10139111126202.html',
    },
    {
      src: Image14,
      title: '猫条',
      link: 'https://detail.tmall.com/item.htm?id=730573170873&pisk=gsHmAliQAjPb1qT8wYwXTDawCGaGD-w_SVBTWRUwazz5HVeYB77zAo7NgorV4bmISrK6G-huS4uuuVm6clzZ7V4tMQpKcmw_Qe3MppnfA4wK1qqagz-ablUw2SoJ7Sj7QeLpp_IzGEeZWr9FxQ5zAzr40lr2qgrLYRra0R-uzlqC_ZuZ73Vzjk6N0SzwUTrazZW4Qo7zzlEQ7NW4u3mzPozaQRuaU3qsOxT4uAkxUU38Tyo_pILucS4E0zXnVXr2xr9Q2O8qUomD8DakwQHumS4L_V3xmxu-bxHbNC5gC0hnSfueysUqtk0u9jYhn20bbcqZops3zxmiESGRv9ooqclLZYKed-24ufejXMYxqx0xcYmOb_y0HbVnnJJCuPh-xAqiCF9o-coI_7DGogRFa6uc0ON98jC11Sr7qydbNqC0NTp-v3xltPN4Vozpq3fsdSr7q8Kkq6vQguZc2&spm=a21xtw.29178619.0.0',
    },
    {
      src: Image15,
      title: '猫砂',
      link: 'https://detail.tmall.com/item.htm?id=840053044729&pisk=g5ljAdxKtijXHsVO5-YPNsuJzYwdlURehNat-VCVWSFYXNi-WPIYX1QRwyzCXREwncwsb02tgSuqVZcSA152mK0O15P9YHReTqb0s5KExc8FEi40RZdaH1U8iPSWgUjeTq00sZs98YdF50f_NNBTXcF8wyaQ6GUYXUw88PFOMRCAegEu25UTBsUJwPzdktExXaU8SPBAM5ETygU_l5EtXRdJPPq8k5FtOz97yKZrlE8HtRiHcNdzq1CtNrwJUcZ82lYaV-iKlutTPfzjtk3YV1CaA28g-4g2c60zijiQ8mRRGDgt-AeS1gKQjbg-MA3lcUFIPYkUhYtA1ul4qJlxcn60Dxo7KzeR5B4rYu3mMYTG2qnUcSU8UBLIyRHriJc22sNKKqPqBDKP3oHQWgkATk18iOO311a7YUT5IO4yoeB9ujVpj-Uurw8WP9WgHz4SQUT5II2Yrz2wPU63o&spm=a21xtw.29178619.0.0&skuId=5605563989612',
    },
    {
      src: Image16,
      title: '宠物除臭喷雾',
      link: 'https://detail.tmall.com/item.htm?id=844147061503&spm=a21xtw.29178619.0.0&pisk=gxamvGNIOoobB9W-2zgfYWMN5CMMDqgsIRLtBVHN4YkWkR3xW0JrOjJw0jl2auVQIxC1cqEoI8yo3RV1GfkaQRDTDgQLGSgs79eGJwFXO8gLf-cqQ75Z6XJVwmPRQmAS79BdJ3drct3aBx_zJT-rOYlqgflVZQlKTVlZgV5oUfcBbKyaQ_mrsXTwgmkNzUlZUd8ZQmlyUfGKgnuZ3_VrFfGwgRuNZ4kS_XKO3xzakzW8eDkU1RRG0jimLSkk-7ZEgNDcRb8ahzGqmy--CFS8rjmmLSUhPvq-azUov0dOB4PQ2-lo-ZvIiuPnuf41ThDijrgoEJbe5bZ4nzogy1_3NqqurqUVCHN8ZxonyuI5Hc30nkMI0g67I7DYQrmynTHTv7UqqJWJrRigbr3zuT7h4B-yY-A25cBUDhts0bGopii7HnmWyaFdZ_xnCmlSgvClZhaI0bGoy_fkxwiqNjAR',
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
              <h2>好适嘉</h2>
              <p>
                秉持"精准营养主义"的品牌理念，好适嘉始终坚持以宠物的需求为先，化繁为简，不去刻意追求吸睛的概念、猎奇的成分，而是着手打造真正贴合宠物日常饮食需求的产品。
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
          <h2 className="productionbase-nz-title">爵宴——敬你的最佳拍档</h2>
          <p className="productionbase-nz-desc">
            爵宴认为宠物不仅是被呵护的家人，更是非凡的同行者，你们将一同解锁新体验甚至新成就，而TA将在这段旅程中成为与你相配的最佳拍档。
          </p>
          <div className="productionbase-nz-image">
            <img src={Footer1} alt="爵宴品牌形象" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">天然有爱，天然宠爱。</h2>
          <p className="productionbase-nz-desc">
            宠物赋予人更积极、快乐的体验，而自然是给TA最好的款待，在每一个欢乐时刻，愿总有爵宴相伴。
          </p>
          <div className="productionbase-nz-image">
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
