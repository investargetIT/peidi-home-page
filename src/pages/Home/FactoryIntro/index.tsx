import { Button } from 'antd';
import './index.less';

interface FactoryIntroProps {
  onLearnMoreClick?: () => void;
}

export default function FactoryIntro({ onLearnMoreClick }: FactoryIntroProps) {
  return (
    <div className="brand-factory-wrapper factory-intro-wrapper">
      <div className="brand-factory-container">
        <div className="brand-factory-title">工厂介绍</div>
        <div className="brand-factory-content">
          佩蒂的生产基地遍布中国、越南、柬埔寨、新西兰等全球多个国家，获评国家高新技术企业、浙江省级高新技术企业研发中心、浙江省省级企业研究院、温州市博士创新工作站，有效专利57个，3个国际发明专利、8个国家发明专利。
        </div>
        <div className="brand-factory-btn-container">
          <Button
            className="brand-factory-btn"
            type="primary"
            onClick={onLearnMoreClick}
          >
            了解更多
          </Button>
        </div>
      </div>
    </div>
  );
} 