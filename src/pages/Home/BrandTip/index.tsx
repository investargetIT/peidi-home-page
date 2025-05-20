/**
 * 品牌提示组件
 * 展示公司的主要宠物食品品牌信息和品牌图标
 */
import MeatIcon from './images/meat.webp';
import HealthIcon from './images/health.webp';
import ChewIcon from './images/chew.webp';
import SmartIcon from './images/smart.webp';
import './index.less';

export default function BrandTip() {
  return (
    <>
      {/* 品牌信息描述区域 */}
      <div className="brand-tip-wrapper">
        <div className="brand-tip-container">
          {/* 品牌小标题 */}
          <div className="brand-tip-title">宠食品牌</div>

          {/* 品牌主标题 */}
          <div className="brand-tip-subtitle">主要品牌</div>

          {/* 品牌详细介绍 */}
          <div className="brand-tip-content">
            佩蒂旗下拥有爵宴、好适嘉、齿能等主要品牌，其中，爵宴品牌坚持天然成就美味的理念，面向中高端市场，满足毛孩子们的肉食需求；好适嘉秉持精准营养主义，构建健康主食新标准；齿能品牌致力于维护宠物口腔健康，是全球首个宠物分龄定制专业咀嚼品牌。
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