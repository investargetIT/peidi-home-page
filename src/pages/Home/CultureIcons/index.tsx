import ConceptIcon from './images/concept.jpg';
import CoreIcon from './images/core.jpg';
import MissionIcon from './images/mission.jpg';
import VisionIcon from './images/vision.jpg';
import './index.less';

export default function CultureIcons() {
  return (
    <div className="brand-culture-icon-wrapper">
      <div className="brand-culture-icon-container">
        <div className="brand-culture-item">
          <img src={ConceptIcon} alt="concept" className="brand-culture-icon" />
          <div className="brand-culture-title">愿景</div>
          <div className="brand-culture-desc">成为人宠和谐健康生态卓越建设者</div>
        </div>
        <div className="brand-culture-item">
          <img src={CoreIcon} alt="core" className="brand-culture-icon" />
          <div className="brand-culture-title">理念</div>
          <div className="brand-culture-desc">诚信、创新、发展</div>
        </div>
        <div className="brand-culture-item">
          <img src={MissionIcon} alt="mission" className="brand-culture-icon" />
          <div className="brand-culture-title">核心价值观</div>
          <div className="brand-culture-desc">阳光、保鲜、担当、靠谱</div>
        </div>
        <div className="brand-culture-item">
          <img src={VisionIcon} alt="vision" className="brand-culture-icon" />
          <div className="brand-culture-title">使命</div>
          <div className="brand-culture-desc">用全球好产品推动宠物健康标准升级</div>
        </div>
      </div>
    </div>
  );
} 