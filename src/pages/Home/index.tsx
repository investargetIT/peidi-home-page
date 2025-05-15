import { Button } from 'antd';
import BannerBg from './images/banner.webp';
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
  </>
} 