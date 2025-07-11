import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image from './images/1.webp';

export default function CorporatePhilosopy() {
  return (
    <div className="corporate-philosophy-page">
      <BannerContainer bannerImage={Banner} title="企业理念" />

      <div className="corporate-philosophy-content">
        <div className="corporate-philosophy-header">
          <h2 className="corporate-philosophy-title">佩蒂旨在成为中国领先的宠物健康生态集团</h2>
          <p className="corporate-philosophy-subtitle">使命：用全球好产品推动宠物健康标准升级</p>
          <p className="corporate-philosophy-main-text">
            公司自1992年创立之初就以独特的ODM模式和创新的产品来服务全球宠物用户，迄今30余年，深度参与了海外成熟宠物市场健康标准的历次升级。公司于2017年成为中国宠物行业首家上市公司。我们以推动全球宠物健康标准升级为己任，未来不仅将继续为海外市场打造好产品，同时，也会持续将全球好产品带回给中国用户。
          </p>
        </div>

        <div className="corporate-philosophy-container">
          <div className="corporate-philosophy-text-content">
            <div className="corporate-philosophy-values">
              <p>愿景：做人宠和谐健康生态的卓越建设者</p>
              <p>
                我们认为宠物作为伴侣动物，是能够治愈人心的健康使者，它们是人类美好生活的
                重要组成部分，我们将通过好产品为宠物带来健康，通过伴侣动物治愈赋能人类
                心理健康，持续构建人宠和谐健康生态，推动行业的可持续性发展。
              </p>
            </div>
          </div>

          <div className="corporate-philosophy-image">
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
