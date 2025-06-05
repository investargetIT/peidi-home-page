import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';

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
              <img src={Image1} alt="全球资源展示" />
            </div>
            <div className="productionbase-nz-image">
              <img src={Image2} alt="全球资源展示" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">全球制造</h2>
          <div className="production-capacity-table">
            <table className="capacity-table">
              <thead>
                <tr>
                  <th>宠物类别</th>
                  <th>类别</th>
                  <th>首席运营官</th>
                  <th>月产能（吨）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3} className="pet-category">
                    小狗
                  </td>
                  <td>干粮</td>
                  <td>新西兰、中国</td>
                  <td>3,350</td>
                </tr>
                <tr>
                  <td>湿粮</td>
                  <td>中国</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>咀嚼物和零食</td>
                  <td>新西兰、柬埔寨、越南、中国</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td rowSpan={3} className="pet-category">
                    猫
                  </td>
                  <td>干粮</td>
                  <td>新西兰、中国</td>
                  <td>3,350</td>
                </tr>
                <tr>
                  <td>湿粮</td>
                  <td>中国</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>零食</td>
                  <td>新西兰、柬埔寨、越南、中国</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="pet-category">
                    鸟类
                  </td>
                  <td>可食用的玩具</td>
                  <td>中国</td>
                  <td>三十</td>
                </tr>
                <tr>
                  <td>零食</td>
                  <td>柬埔寨、越南、中国</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td rowSpan={2} className="pet-category">
                    小动物
                  </td>
                  <td>可食用的玩具</td>
                  <td>中国</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>零食</td>
                  <td>柬埔寨、越南、中国</td>
                  <td>三十</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">全球营销</h2>
        </div>
        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image2} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                我们的客户遍布全球多个国家和地区，佩蒂在为宠物连锁店、超市、批发店、在线供应商、进口商和经销商等不同渠道的客户提供产品和服务方面拥有丰富的经验，与全球领先的宠物产品供应商建立了长期的合作关系，我们可靠的产品质量、专业的服务和行业领先的新产品开发能力确保了我们业务的共同繁荣。
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
