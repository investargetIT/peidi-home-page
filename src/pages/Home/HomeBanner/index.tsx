/**
 * 首页Banner组件
 * 展示网站的主横幅图片、口号和行动按钮
 */
import { Button } from 'antd';
import BannerBg from './images/banner.webp';
import './index.less';

/**
 * HomeBanner组件属性接口
 * @interface HomeBannerProps
 * @property {Function} onLearnMoreClick - 可选的"了解更多"按钮点击事件处理函数
 */
interface HomeBannerProps {
  onLearnMoreClick?: () => void;
}

export default function HomeBanner({ onLearnMoreClick }: HomeBannerProps) {
  return (
    <div className="home-banner-container">
      {/* 主Banner背景图 */}
      <img src={BannerBg} alt="banner" className="home-banner-banner" />

      {/* Banner提示信息容器 */}
      <div className="banner-tip-container">
        {/* 提示文本内容 */}
        <div className="banner-tip-content">
          用全球好产品推动宠物健康标准升级
        </div>

        {/* 按钮容器 */}
        <div className="banner-tip-btn-container">
          <Button
            className="banner-tip-btn"
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