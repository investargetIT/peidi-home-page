import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';

import InnerRoom from './images/inner_room.webp';
import Image11 from './images/1-1.webp';
import Image12 from './images/1-2.webp';
import Image13 from './images/1-3.webp';
import Image14 from './images/1-4.webp';
import Image21 from './images/2-1.webp';
import Image22 from './images/2-2.webp';
import Image23 from './images/2-3.webp';
import Image24 from './images/2-4.webp';
import Image31 from './images/3-1.webp';
import Image32 from './images/3-2.webp';
import Image33 from './images/3-3.webp';
import Image34 from './images/3-4.webp';

export default function QualityControl() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="质量管理" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">质量管控</h2>
          <p className="productionbase-nz-desc">
            质量管控始终是佩蒂的生产工作的重点，一款好吃的产品必须要卫生、健康。佩蒂用认证的HACCP管理方法，以畜皮咀嚼食品为例，我们自己的生产线从洗皮开始，到生产、烘干、检验、辐照，做好每一个工序的内控，把产品质量管控落实到生产的方方面面。
          </p>

          {/* 4张图片横向排列展示 */}
          <div className="quality-control-grid">
            <div className="quality-control-item">
              <div className="productionbase-nz-image">
                <img src={Image1} alt="沉浸体验" />
              </div>
              <h3 className="quality-control-label">洗皮转鼓</h3>
            </div>

            <div className="quality-control-item">
              <div className="productionbase-nz-image">
                <img src={Image2} alt="烘房" />
              </div>
              <h3 className="quality-control-label">烘房</h3>
            </div>

            <div className="quality-control-item">
              <div className="productionbase-nz-image">
                <img src={Image3} alt="辐照" />
              </div>
              <h3 className="quality-control-label">辐照</h3>
            </div>

            <div className="quality-control-item">
              <div className="productionbase-nz-image">
                <img src={Image4} alt="实验室" />
              </div>
              <h3 className="quality-control-label">实验室/实验人员</h3>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">内部实验室</h2>
          <p className="productionbase-nz-desc">
            我们在每一个生产基地都有一个内部实验室，可测试项目包括营养分析，微生物分析，农残药残等30余个项目，为产品质量安全管控提供强有力的技术支持。
          </p>
          <div className="productionbase-nz-image">
            <img src={InnerRoom} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">质量认证</h2>
          <p className="productionbase-nz-desc">
            佩蒂严格按照国际标准进行生产管理，获得了多项权威认证，确保产品质量和安全性。
          </p>

          {/* 认证图片网格展示 */}
          <div className="certification-grid">
            <div className="certification-item">
              <img src={Image11} alt="ISO9001认证" />
            </div>
            <div className="certification-item">
              <img src={Image12} alt="FDA认证" />
            </div>
            <div className="certification-item">
              <img src={Image13} alt="BRC认证" />
            </div>
            <div className="certification-item">
              <img src={Image14} alt="CFIA认证" />
            </div>

            <div className="certification-item">
              <img src={Image21} alt="ISO45001认证" />
            </div>
            <div className="certification-item">
              <img src={Image22} alt="FSMA认证" />
            </div>
            <div className="certification-item">
              <img src={Image23} alt="欧盟认证" />
            </div>
            <div className="certification-item">
              <img src={Image24} alt="GMP认证" />
            </div>

            <div className="certification-item">
              <img src={Image31} alt="ISO14001认证" />
            </div>
            <div className="certification-item">
              <img src={Image32} alt="HACCP认证" />
            </div>
            <div className="certification-item">
              <img src={Image33} alt="APPA认证" />
            </div>
            <div className="certification-item">
              <img src={Image34} alt="ISO22000认证" />
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
