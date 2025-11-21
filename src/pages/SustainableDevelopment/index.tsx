import Banner from './images/banner.jpg';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.png';

export default function SustainableDevelopment() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="可持续发展" />
      <div className="sustainable-development-section">
        <div className="container">
          <h2 className="sustainable-development-title">我们的战略</h2>
          <p className="sustainable-development-desc">
            公司结合宠物行业特点和企业发展阶段，不断将可持续发展理念融入企业经营活动，在致力于“成为人宠和谐健康生态的卓越建设者”的战略愿景指引下，以“用全球好产品推动宠物健康标准升级”为使命，坚定推行“人宠和谐，幸福有我”的
            ESG 战略目标。
          </p>
          <div className="sustainable-development-image">
            <img src={Image1} alt="可持续发展战略" />
          </div>
        </div>

        <div className="container">
          <h2 className="sustainable-development-title">成果与报告</h2>
          <p className="sustainable-development-desc">
            <a
              href="https://www.peidibrand.com/assets/media/%E4%BD%A9%E8%92%82%E8%82%A1%E4%BB%BD2024%E5%B9%B4%E5%BA%A6%E7%8E%AF%E5%A2%83%E3%80%81%E7%A4%BE%E4%BC%9A%E5%92%8C%E5%85%AC%E5%8F%B8%E6%B2%BB%E7%90%86%EF%BC%88ESG%EF%BC%89%E6%8A%A5%E5%91%8A20250424V5.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              佩蒂股份2024年度环境、社会和公司治理（ESG）报告
            </a>
          </p>
        </div>
      </div>
      <NewFooterNav />
      <CopyrightFooter />
    </div>
  );
}
