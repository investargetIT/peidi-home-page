/**
 * 品牌提示组件
 * 展示公司的主要宠物食品品牌信息和品牌图标
 */
import './index.less';
import { Button } from 'antd';
import OemIcon from './images/oem.jpg';
import NewsIcon from './images/news.jpg';
import ChannelIcon from './images/channel.jpg';
import AboutIcon from './images/about.jpg';
import { useNavigate } from 'react-router-dom';

export default function BrandTip() {
  const navigate = useNavigate();
  const onLearnMoreClick = () => {
    console.log('Learn more clicked');
    navigate('/pages/corporate-philosophy');
  };

  return (
    <>
      {/* 品牌信息描述区域 */}
      <div className="brand-tip-wrapper">
        <div className="brand-tip-container">
          {/* 品牌小标题 */}

          {/* 品牌主标题 */}
          <div className="brand-tip-subtitle">关于佩蒂</div>

          {/* 品牌详细介绍 */}
          <div className="brand-tip-content">
            公司自1992年创立之初就以独特的ODM模式和创新的产品来服务全球宠物用户，迄今30余年，深度参与了海外成熟宠物市场健康标准的历次升级。公司于2017年成为中国宠物行业首家上市公司。我们以推动全球宠物健康标准升级为己任，未来不仅将继续为海外市场打造好产品，同时，也会持续将全球好产品带回给中国用户。
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
          {/* OEM&ODM卡片 */}
          <div
            className="brand-tip-card"
            onClick={() => {
              navigate('/pages/production-base');
            }}
          >
            <img src={OemIcon} alt="OEM&ODM" className="brand-tip-card-image" />
          </div>

          {/* 新闻中心卡片 */}
          <div
            className="brand-tip-card"
            onClick={() => {
              navigate('/blogs/news');
            }}
          >
            <img src={NewsIcon} alt="新闻中心" className="brand-tip-card-image" />
          </div>

          {/* 购买渠道卡片 */}
          <div
            className="brand-tip-card"
            onClick={() => window.open('https://peidicwyp.tmall.com/shop/view_shop.htm')}
          >
            <img src={ChannelIcon} alt="购买渠道" className="brand-tip-card-image" />
          </div>

          {/* 关注佩蒂卡片 */}
          <div
            className="brand-tip-card"
            onClick={() => {
              navigate('/contact-us');
            }}
          >
            <img src={AboutIcon} alt="关注佩蒂" className="brand-tip-card-image" />
          </div>
        </div>
      </div>
    </>
  );
}
