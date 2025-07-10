import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image from './images/1.webp';

export default function CorporatePhilosopy() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="企业理念" />

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">待宠如己，每一只宠物</h2>
          <p className="philosophy-subtitle">把自己的一生都交给主人，它们配得上最好的款待。</p>
          <p className="philosophy-main-text">
            佩蒂从创办之初，就把对宠物的爱融入了自己的基因，对每一只宠物像爱自己孩子般不计回报，从营养均衡的宠物食品和趣味十足的宠物用品，从健康的第一道门户，到全方位的宠物生活服务。
          </p>
        </div>

        <div className="philosophy-container">
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                30多年，变的是配方和技术，不变的是对科学养宠和品质的坚守，对宠物全方位的关爱和呵护。正如佩蒂的logo，用爱心连接宠物与主人的世界，用科学关爱陪伴宠物的一生，质量至诚，源自天性，佩蒂愿成为人与宠物的彼此关爱的纽带，领跑中国宠物的爱心事业。
              </p>
            </div>
          </div>

          <div className="philosophy-image">
            <img src={Image} alt="人与宠物的温馨互动" />
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
