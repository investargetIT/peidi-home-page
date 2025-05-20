import { Button } from 'antd';
import './index.less';

interface AboutUsProps {
  onLearnMoreClick?: () => void;
}

export default function AboutUs({ onLearnMoreClick }: AboutUsProps) {
  return (
    <div className="brand-about-us-wrapper">
      <div className="brand-about-us-container">
        <div className="brand-about-us-title">关于我们</div>
        <div className="brand-about-us-content">
          佩蒂成立于1992年，是中国宠物行业首家上市公司，服务全球宠物30余年，改变的是配方和技术，不变的是对品质的坚持。佩蒂帮助全球宠物品牌设计、生产产品，业务覆盖欧洲、美国、澳洲、日韩、东南亚等国家，旗下拥有Health+、Meatyway、Chewnergy等自主品牌。
        </div>
        <div className="brand-about-us-btn-container">
          <Button
            className="brand-about-us-btn"
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