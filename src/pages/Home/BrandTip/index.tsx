/**
 * 品牌提示组件
 * 展示公司的主要宠物食品品牌信息和品牌图标
 */
import MeatIcon from './images/meat.webp';
import HealthIcon from './images/health.webp';
import ChewIcon from './images/chew.webp';
import SmartIcon from './images/smart.webp';
import './index.less';
import { Button } from 'antd';

export default function BrandTip() {
  const onLearnMoreClick = () => {
    console.log('Learn more clicked');
  };

  return (
    <>
      {/* 品牌信息描述区域 */}
      <div className="brand-tip-wrapper">
        <div className="brand-tip-container">
          {/* 品牌小标题 */}
          <div className="brand-tip-title">ABOUT US</div>

          {/* 品牌主标题 */}
          <div className="brand-tip-subtitle">关于佩蒂</div>

          {/* 品牌详细介绍 */}
          <div className="brand-tip-content">
            待宠如己，每一次宠物把自己的一生都交给主人，它们配得上最好的款待。佩蒂从创办之初，就把对宠物的爱融入了自己的基因，对每一只宠物像爱自己孩子般不计回报。
          </div>
          <div className="brand-about-us-btn-container">
            <Button className="brand-about-us-btn" type="primary" onClick={onLearnMoreClick}>
              了解更多
            </Button>
          </div>
        </div>
      </div>

      {/* 品牌图标展示区域 */}
      <div className="brand-tip-icon-wrapper">
        <div className="brand-tip-icon-container">
          {/* 肉食图标 */}
          <div className="brand-tip-icon-item">
            <img src={MeatIcon} alt="meat" className="brand-tip-icon" />
          </div>

          {/* 健康图标 */}
          <div className="brand-tip-icon-item">
            <img src={HealthIcon} alt="health" className="brand-tip-icon" />
          </div>

          {/* 咀嚼图标 */}
          <div className="brand-tip-icon-item">
            <img src={ChewIcon} alt="chew" className="brand-tip-icon" />
          </div>

          {/* 智能图标 */}
          <div className="brand-tip-icon-item">
            <img src={SmartIcon} alt="smart" className="brand-tip-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
