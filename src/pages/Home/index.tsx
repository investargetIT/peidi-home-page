import { Button } from 'antd';
import BannerBg from './images/banner.webp';
import ChewIcon from './images/chew.webp';
import HealthIcon from './images/health.webp';
import MeatIcon from './images/meat.webp';
import SmartIcon from './images/smart.webp';
import './index.less';
export default function Home() {
  return <>
    <div className="home-banner-container">
      <img src={BannerBg} alt="banner" className="home-banner-banner" />
      <div className="banner-tip-container">
        <div className="banner-tip-content">
          用全球好产品推动宠物健康标准升级
        </div>
        <div className="banner-tip-btn-container">
          <Button className="banner-tip-btn" type="primary">了解更多</Button>
        </div>
      </div>
    </div>
    <div className="brand-tip-wrapper">
      <div className="brand-tip-container">
        <div className="brand-tip-title">宠食品牌</div>
        <div className="brand-tip-subtitle">主要品牌</div>
        <div className="brand-tip-content">佩蒂旗下拥有爵宴、好适嘉、齿能等主要品牌，其中，爵宴品牌坚持天然成就美味的理念，面向中高端市场，满足毛孩子们的肉食需求；好适嘉秉持精准营养主义，构建健康主食新标准；齿能品牌致力于维护宠物口腔健康，是全球首个宠物分龄定制专业咀嚼品牌。</div>
      </div>
    </div>
    <div className="brand-tip-icon-wrapper">
      <div className="brand-tip-icon-container">
        <div></div>
        <img src={MeatIcon} alt="meat" className="brand-tip-icon" />
        <img src={HealthIcon} alt="health" className="brand-tip-icon" />
        <img src={ChewIcon} alt="chew" className="brand-tip-icon" />
        <img src={SmartIcon} alt="smart" className="brand-tip-icon" />
        <div></div>
      </div>

      <div className="brand-about-us-wrapper">
        <div className="brand-about-us-container">
          <div className="brand-about-us-title">关于我们</div>
          <div className="brand-about-us-content">佩蒂成立于1992年，是中国宠物行业首家上市公司，服务全球宠物30余年，改变的是配方和技术，不变的是对品质的坚持。佩蒂帮助全球宠物品牌设计、生产产品，业务覆盖欧洲、美国、澳洲、日韩、东南亚等国家，旗下拥有Health+、Meatyway、Chewnergy等自主品牌。</div>
          <div className="brand-about-us-btn-container">
            <Button className="brand-about-us-btn" type="primary">了解更多</Button>
          </div>
        </div>
      </div>
      <div className="brand-factory-wrapper">
        <div className="brand-factory-container">
          <div className="brand-factory-title">工厂介绍</div>
          <div className="brand-factory-content">佩蒂的生产基地遍布中国、越南、柬埔寨、新西兰等全球多个国家，获评国家高新技术企业、浙江省级高新技术企业研发中心、浙江省省级企业研究院、温州市博士创新工作站，有效专利57个，3个国际发明专利、8个国家发明专利。</div>
          <div className="brand-factory-btn-container">
            <Button className="brand-factory-btn" type="primary">了解更多</Button>
          </div>
        </div>
      </div>
    </div>
  </>
} 