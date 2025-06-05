import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';

export default function ProductionCapacity() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="生产能力" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">全球资源</h2>
          <div className="productionbase-nz-image-container">
            <div className="productionbase-nz-image">
              <img src={Image1} alt="新西兰KCPF工厂全景" />
            </div>
            <div className="productionbase-nz-image">
              <img src={Image2} alt="新西兰KCPF工厂全景" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">全球制造</h2>
        </div>
        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image2} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                正如孔子先圣所言："人而无信，不知其可也。"
                事业从无坦途，成功须靠拼搏。企业的道德首先是和诚信相连，生产经营与道德的有机结合才能使一个企业真正成为社会所需要的力量。我们相信更多的企业，都会悟到这个发展的真谛，运用自如得法，时时存乎于心。佩蒂企业一路走过的昨天、今天以及明天，正是基于所倡导的"服务社会、实现自我"的企业价值观，坚持"以诚取信，以信立业"，严格履行一个企业对社会、客户和员工应尽的义务，谋求公司与客户、公司与社会、公司与个人的和谐发展。
              </p>
            </div>
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
