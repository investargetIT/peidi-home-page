/**
 * Home页面主组件
 * 整合了各个模块组件，构成完整的首页
 */
import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import AboutUs from './AboutUs';
import CompanyCulture from './CompanyCulture';
import CultureIcons from './CultureIcons';
import FactoryIntro from './FactoryIntro';
import FactoryShowcase from './FactoryShowcase';
import ProductInnovation from './ProductInnovation';
import ResearchDevelopment from './ResearchDevelopment';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import './index.less';

export default function Home() {
  return (
    <>
      {/* 首页顶部banner区域 */}
      <HomeBanner onLearnMoreClick={() => console.log('Learn more clicked')} />

      {/* 品牌提示与图标展示区域 */}
      <BrandTip />

      {/* 关于我们介绍区域 */}
      {/* <AboutUs onLearnMoreClick={() => console.log('About us learn more clicked')} /> */}

      {/* 公司文化展示区域 */}
      {/* <CompanyCulture /> */}

      {/* 文化理念图标展示区域 */}
      {/* <CultureIcons /> */}

      {/* 工厂介绍区域 */}
      {/* <FactoryIntro onLearnMoreClick={() => console.log('Factory intro learn more clicked')} /> */}

      {/* 工厂展示轮播区域 */}
      <FactoryShowcase />

      {/* 产品创新区域 */}
      {/* <ProductInnovation
        onLearnMoreClick={() => console.log('Product innovation learn more clicked')}
      /> */}

      {/* 研发能力展示区域 */}
      {/* <ResearchDevelopment /> */}

      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </>
  );
}
