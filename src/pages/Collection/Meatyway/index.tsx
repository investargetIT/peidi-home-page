import React from 'react';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import MeatyBanner from '@/pages/Home/HomeBanner/images/meatyway.jpg';
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

export default function Meatyway() {
  const bannerData = {
    title: '天然成就美味',
    subTitle: '天然膳食标准引领者',
    image: MeatyBanner,
    logo: LogoMeaty,
    btnText: '立即查看',
  };

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
              <h2>爵宴</h2>
              <p>
                狗狗是我们爱的家人，美食和陪伴是我们爱它的方式。它们是天然美食家，简单纯净才是它们的心之所爱。所以我们严选优质的天然食材，更少程度地加工，保留营养和原始味蕾体验。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 产品分类展示区域 - 使用container样式 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">风干粮系列</h2>
          <p className="productionbase-nz-desc">
            采用新西兰优质原料，通过低温风干工艺，最大程度保留食材的营养成分和天然风味，为宠物提供健康美味的主食选择。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://peidicwyp.tmall.com/category-1752872720.htm?spm=a1z10.3-b-s.w5001-25306308228.8.79cd627clOdoAE&tsearch=y&scene=taobao_shop#TmshopSrchNav'
              );
            }}
          >
            <img src={Dry} alt="Meatyway 鸭肉干零食" />
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">甄肉系列</h2>
          <p className="productionbase-nz-desc">
            精选天然食材制作的宠物零食，无添加防腐剂，口感丰富，营养均衡，是宠物日常训练和奖励的最佳选择。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://peidicwyp.tmall.com/category-1752872716.htm?spm=a1z10.3-b-s.w5001-25306308228.4.34d7627cnPd84p&tsearch=y&scene=taobao_shop#TmshopSrchNav'
              );
            }}
          >
            <img src={TrueMeat} alt="Meatyway 姜黄鸡肉干" />
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">果蔬系列</h2>
          <p className="productionbase-nz-desc">
            新鲜食材制作的湿粮产品，水分含量高，口感丰富，易于消化吸收，为宠物提供全面均衡的营养补充。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://peidicwyp.tmall.com/category-1752872717.htm?spm=a1z10.3-b-s.w5001-25306308228.5.77c0627c4S80Vm&search=y&tsearch=y&scene=taobao_shop#TmshopSrchNav'
              );
            }}
          >
            <img src={NZFood} alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">新西兰系列</h2>
          <p className="productionbase-nz-desc">
            新鲜食材制作的湿粮产品，水分含量高，口感丰富，易于消化吸收，为宠物提供全面均衡的营养补充。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://peidicwyp.tmall.com/category-1752872719.htm?spm=a1z10.3-b-s.w5001-25306308228.7.79cd627clOdoAE&tsearch=y&scene=taobao_shop#TmshopSrchNav'
              );
            }}
          >
            <img src={Fruit} alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">美食家罐头系列</h2>
          <p className="productionbase-nz-desc">
            新鲜食材制作的湿粮产品，水分含量高，口感丰富，易于消化吸收，为宠物提供全面均衡的营养补充。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://detail.tmall.com/item.htm?abbucket=6&id=716545637060&pisk=g1RIJfmvikqCB718P90a1Ymd8MBvNVlVvz_JoUFUy6Cpy7teDeRUTJ8JCExs-_-yygtWbGAE-gu3V3TWR9QL9wBTWZQzvwFJyz_Jb6BkLgSFV_TkcVoqgj8H-_fK0mlqvSlgfsbL2aEPB5Q5Nwn2iH6y-_f-VPP-3jTHxBkU4JQRWV_PzgUp2TFO6Gb5JgKRvOEOrafRw3BRXOQAogUdvwQt5ZQ7eJIRJRIOkaeR23C-5lIGy_Qp2_h_mA_tdG8I80JpdTulyeI_w7dKZ9sX_8P7NeQddITGfRyw1w6C0O-I-nRpbUdetOD8F_Ywh39JDcyFvK_XftJIcWtXxaL5yHG0lGdBPC6HQrPv5FTJ3OOZkjfC9MpPtUzjYFOBYeA6zzeOO6J1hB1xikIyQEO5PQmo1nTJoLB6NksyuSSb662Si_N55ius582l720YeQzqrt6dSN4q5Vw4E9QG5Lus58chpNbGeVg_nwf..&rn=431bdf87c5f0d8373b4fb5d0b4568097&spm=a1z10.3-b-s.w4011-23129053535.43.6394627cZZjaK2'
              );
            }}
          >
            <img src={NiceFood} alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">冻干系列</h2>
          <p className="productionbase-nz-desc">
            新鲜食材制作的湿粮产品，水分含量高，口感丰富，易于消化吸收，为宠物提供全面均衡的营养补充。
          </p>
          <div
            className="order-process-item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(
                'https://peidicwyp.tmall.com/category-1752872719.htm?spm=a1z10.3-b-s.w5001-25306308228.7.79cd627clOdoAE&tsearch=y&scene=taobao_shop#TmshopSrchNav'
              );
            }}
          >
            <img src={Cold} alt="Meatyway Foodie Dog 罐头鸭肉和山药/鸡肉和南瓜/牛肉胡萝卜" />
          </div>
        </div>
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
