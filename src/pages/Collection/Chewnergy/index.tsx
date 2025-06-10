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
import Image6 from './images/6.webp';
import Image7 from './images/7.webp';
import Image8 from './images/8.webp';
import Image9 from './images/9.webp';
export default function Chewnergy() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="口腔科学" subTitle="宠物专业咀嚼" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">常规产品</h2>
          <p className="productionbase-nz-desc">
            客户选品下单、双方签订合同、客户支付预付款、工厂采购原材料、工厂生产、工厂检验发货、客户支付尾款、工厂安排发货。
          </p>
          {/* 三张图片一行展示 */}
          <div className="order-process-grid">
            <div className="order-process-item">
              <img src={Image1} alt="订单流程图片1" />
            </div>
            <div className="order-process-item">
              <img src={Image2} alt="订单流程图片2" />
            </div>
            <div className="order-process-item">
              <img src={Image3} alt="订单流程图片3" />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">普通定制产品</h2>
          <p className="productionbase-nz-desc">
            客户提供需求、工厂研发根据市场调研反馈制定配方、工厂研发制样、客户确认样品、客户下单、双方签订合同、客户支付预付款、工厂采购原材料、工厂生产、工厂检验发货、客户支付尾款、工厂安排发货。
          </p>
          {/* 三张图片一行展示 */}
          <div className="order-process-grid">
            <div className="order-process-item">
              <img src={Image4} alt="普通定制产品图片1" />
            </div>
            <div className="order-process-item">
              <img src={Image5} alt="普通定制产品图片2" />
            </div>
            <div className="order-process-item">
              <img src={Image6} alt="普通定制产品图片3" />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">高级定制产品</h2>
          <p className="productionbase-nz-desc">
            客户提供需求、工厂研发根据市场调研反馈制定配方、工厂研发制样、客户确认样品、客户下单、双方签订合同、客户支付预付款、工厂采购原材料、工厂生产、工厂检验发货、客户支付尾款、工厂安排发货。
          </p>
          {/* 三张图片一行展示 */}
          <div className="order-process-grid">
            <div className="order-process-item" style={{ height: 300 }}>
              <img src={Image7} alt="高级定制产品图片1" />
            </div>
            <div className="order-process-item" style={{ height: 300 }}>
              <img src={Image8} alt="高级定制产品图片2" />
            </div>
            <div className="order-process-item" style={{ height: 300 }}>
              <img src={Image9} alt="高级定制产品图片3" />
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
