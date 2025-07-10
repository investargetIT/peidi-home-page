import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Structure from './images/structure.webp';

export default function GroupStructure() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="集团架构" />

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">组织结构图</h2>
          <div className="philosophy-image">
            <img src={Structure} alt="人与宠物的温馨互动" />
          </div>
        </div>
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
