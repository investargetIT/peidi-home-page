import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import AboutUs from './AboutUs';
import CompanyCulture from './CompanyCulture';
import CultureIcons from './CultureIcons';
import FactoryIntro from './FactoryIntro';
import FactoryShowcase from './FactoryShowcase';
import ProductInnovation from './ProductInnovation';
import ResearchDevelopment from './ResearchDevelopment';
import FooterNav from './FooterNav';
import CopyrightFooter from './CopyrightFooter';
import './index.less';

export default function Home() {
  return <>
    <HomeBanner onLearnMoreClick={() => console.log('Learn more clicked')} />
    <BrandTip />
    <AboutUs onLearnMoreClick={() => console.log('About us learn more clicked')} />
    <CompanyCulture />
    <CultureIcons />
    <FactoryIntro onLearnMoreClick={() => console.log('Factory intro learn more clicked')} />
    <FactoryShowcase />
    <ProductInnovation onLearnMoreClick={() => console.log('Product innovation learn more clicked')} />
    <ResearchDevelopment />
    <FooterNav />
    <CopyrightFooter />
  </>
} 