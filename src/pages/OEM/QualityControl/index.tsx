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
          <h2 className="productionbase-nz-title">越南德信</h2>
          <p className="productionbase-nz-desc">
            好嚼、德信生产基地2015年投入使用，总投资1400万美元，占地面积约4万平方米拥有1万吨宠物零食产能，工厂配备了行业领先的污水生物处理系统和辐照灭菌生产线。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image4} alt="新西兰KCPF工厂全景" />
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">越南巴啦啦</h2>
          <p className="productionbase-nz-desc">
            巴啦啦生产基地建立于2017年总投资200万美元，占地面积约11000平方米，拥有5000吨宠物零食产能。
          </p>
          <div className="productionbase-nz-image">
            <img src={Image5} alt="新西兰KCPF工厂全景" />
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
