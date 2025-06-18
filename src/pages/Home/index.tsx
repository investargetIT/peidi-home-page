/**
 * Home页面主组件
 * 整合了各个模块组件，构成完整的首页
 */
import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContent from './BannerContent';
import './index.less';

export default function Home() {
  return (
    <>
      {/* 首页顶部banner区域 */}
      <HomeBanner />

      {/* 品牌提示与图标展示区域 */}
      <BrandTip />

      {/* 轮播图区域 */}
      <BannerContent />

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </>
  );
}
