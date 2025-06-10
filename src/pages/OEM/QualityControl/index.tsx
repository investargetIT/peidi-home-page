import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';
import Image5 from './images/5.webp';

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

import R11 from './images/r-1-1.webp';
import R12 from './images/r-1-2.webp';
import R13 from './images/r-1-3.webp';
import R14 from './images/r-1-4.webp';
import R15 from './images/r-1-5.webp';
import R16 from './images/r-1-6.webp';
import R17 from './images/r-1-7.webp';
import R18 from './images/r-1-8.webp';
import R19 from './images/r-1-9.webp';

import H1 from './images/h-1.jpg';
import H2 from './images/h-2.jpg';
import H3 from './images/h-3.webp';
import H4 from './images/h-4.webp';
import H5 from './images/h-5.webp';
import H6 from './images/h-6.webp';
import H7 from './images/h-7.webp';
import H8 from './images/h-8.webp';
import H9 from './images/h-9.webp';
import H10 from './images/h-10.webp';
import H11 from './images/h-11.webp';
import H12 from './images/h-12.webp';
import H13 from './images/h-13.webp';
import H14 from './images/h-14.webp';
import H15 from './images/h-15.webp';
import H16 from './images/h-16.webp';

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
            佩蒂严格按照国际标准进行生产管理，获得了多项权威认证，确保产品质量和安全性。这些认证涵盖了质量管理、食品安全、环境保护等多个方面，体现了佩蒂对品质的不懈追求和对消费者负责的态度。
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
        <div className="container">
          <h2 className="productionbase-nz-title">社会责任</h2>
          <p className="productionbase-nz-desc">
            佩蒂积极履行企业社会责任，关注员工福利、环境保护和社区发展。我们致力于可持续发展，通过各种公益活动和环保措施，为社会创造更多价值，与社区共同成长，推动行业的健康发展。
          </p>

          {/* 社会责任图片网格展示 - 5列布局 */}
          <div className="social-responsibility-grid">
            <div className="social-responsibility-item">
              <img src={R11} alt="社会责任1" />
            </div>
            <div className="social-responsibility-item">
              <img src={R12} alt="社会责任2" />
            </div>
            <div className="social-responsibility-item">
              <img src={R13} alt="社会责任3" />
            </div>
            <div className="social-responsibility-item">
              <img src={R14} alt="社会责任4" />
            </div>
            <div className="social-responsibility-item">
              <img src={R15} alt="社会责任5" />
            </div>

            <div className="social-responsibility-item">
              <img src={R16} alt="社会责任6" />
            </div>
            <div className="social-responsibility-item">
              <img src={R17} alt="社会责任7" />
            </div>
            <div className="social-responsibility-item">
              <img src={R18} alt="社会责任8" />
            </div>
            <div className="social-responsibility-item">
              <img src={R19} alt="社会责任9" />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">内部实验室</h2>
          <div className="philosophy-container">
            <div className="philosophy-image">
              <img src={Image5} alt="人与宠物的温馨互动" />
            </div>
            <div className="philosophy-text-content">
              <div className="philosophy-values">
                <p>
                  佩蒂致力于通过优化生产过程和供应链管理来减少能源消耗和二氧化碳排放。这些举措不仅有助于降低环境影响，还促进整体资源效率的提升。
                </p>
                <p>此外，佩蒂在环保领域积极引领创新，推出多款环保型产品和解决方案。</p>
                <p>
                  为了确保在环保方面持续改进，佩蒂积极寻求并获得了ISO
                  14001环境管理体系认证。这一认证确保在运营过程中严格遵守最严格的环保法规和最佳实践标准，以确保公司的环保行动符合全球环保标准。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">公司荣誉</h2>
          <p className="productionbase-nz-desc">
            佩蒂凭借优秀的产品质量和管理水平，获得了众多权威机构的认可和荣誉。
          </p>

          {/* 公司荣誉图片网格展示 - 4列布局 */}
          <div className="company-honor-grid">
            <div className="company-honor-item">
              <img src={H1} alt="公司荣誉1" />
            </div>
            <div className="company-honor-item">
              <img src={H2} alt="公司荣誉2" />
            </div>
            <div className="company-honor-item">
              <img src={H3} alt="公司荣誉3" />
            </div>
            <div className="company-honor-item">
              <img src={H4} alt="公司荣誉4" />
            </div>

            <div className="company-honor-item">
              <img src={H5} alt="公司荣誉5" />
            </div>
            <div className="company-honor-item">
              <img src={H6} alt="公司荣誉6" />
            </div>
            <div className="company-honor-item">
              <img src={H7} alt="公司荣誉7" />
            </div>
            <div className="company-honor-item">
              <img src={H8} alt="公司荣誉8" />
            </div>

            <div className="company-honor-item">
              <img src={H9} alt="公司荣誉9" />
            </div>
            <div className="company-honor-item">
              <img src={H10} alt="公司荣誉10" />
            </div>
            <div className="company-honor-item">
              <img src={H11} alt="公司荣誉11" />
            </div>
            <div className="company-honor-item">
              <img src={H12} alt="公司荣誉12" />
            </div>

            <div className="company-honor-item">
              <img src={H13} alt="公司荣誉13" />
            </div>
            <div className="company-honor-item">
              <img src={H14} alt="公司荣誉14" />
            </div>
            <div className="company-honor-item">
              <img src={H15} alt="公司荣誉15" />
            </div>
            <div className="company-honor-item">
              <img src={H16} alt="公司荣誉16" />
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
