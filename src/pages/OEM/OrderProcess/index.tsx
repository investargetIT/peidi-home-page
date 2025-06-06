import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image5 from './images/5.webp';
import Image6 from './images/6.webp';
import Image7 from './images/7.webp';
import Image8 from './images/8.webp';
import { useState, useEffect } from 'react';
import { Modal } from 'antd';

export default function OrderProcess() {
  // 重视研发投入图片轮播
  const imagesInvest = [Image6, Image7, Image8];
  const [investIndex, setInvestIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setInvestIndex(prev => (prev + 1) % imagesInvest.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 图片预览相关状态
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  // 处理图片预览
  const handlePreview = (imageSrc: string, title: string) => {
    setPreviewImage(imageSrc);
    setPreviewTitle(title);
    setPreviewVisible(true);
  };

  // 关闭预览
  const handlePreviewCancel = () => {
    setPreviewVisible(false);
  };

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="订单流程" />

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
              <img
                src={Image1}
                alt="订单流程图片1"
                onClick={() => handlePreview(Image1, '订单流程图片1')}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="order-process-item">
              <img
                src={Image2}
                alt="订单流程图片2"
                onClick={() => handlePreview(Image2, '订单流程图片2')}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="order-process-item">
              <img
                src={Image3}
                alt="订单流程图片3"
                onClick={() => handlePreview(Image3, '订单流程图片3')}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">追求卓越</h2>
        </div>
        {/* 追求卓越图片轮播，每行一张，5秒切换 */}

        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image5} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                研发团队作为主要参与者，参与起草了国家标准《宠物食品
                狗咬胶》（GBT23185-2008），为宠物咬胶制定高标准，不仅惠及国内消费者，也在全球范围产生连锁反应。通过率先研发5代宠物咬胶食品，并不断迭代更新，为全球宠物营养和安全树立了新标杆。这种对卓越的追求确保全球宠物都能获得最优质的产品，体现了团队在行业的领先地位和专业性。目前，我们拥有52项国内专利和5项国际专利。
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="productionbase-nz-title">重视研发投入</h2>
          <p className="productionbase-nz-desc">
            我们每年投入2.06%的研发经费，在创新的同时，更注重产品品质和营养价值的保障。我们在新产品稳定性测试、适口性测试、消化率测试等方面拥有行业领先的能力，确保产品符合最高标准。通过精心设计的检测流程和严格的质量控制，我们努力开发出配方科学、营养丰富、符合健康标准的优质产品，满足宠物对健康和品质的需求。我们的团队不断创新，旨在为宠物提供最好的营养健康产品，让它们的生活更健康、更快乐。
          </p>
        </div>
        {/* 重视研发投入图片轮播，每行一张，5秒切换，支持圆点切换 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div className="productionbase-nz-image" style={{ maxWidth: '80vw' }}>
            <img
              src={imagesInvest[investIndex]}
              alt="重视研发投入图片"
              style={{ cursor: 'pointer' }}
              onClick={() => handlePreview(imagesInvest[investIndex], '重视研发投入图片')}
            />
          </div>

          {/* 圆点指示器 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
              gap: '6px',
            }}
          >
            {imagesInvest.map((image, index) => (
              <button
                key={index}
                onClick={() => setInvestIndex(index)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  background: investIndex === index ? '#ff6b35' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: investIndex === index ? 'scale(1.2)' : 'scale(1)',
                  boxShadow: 'none',
                  padding: 0,
                  outline: 'none',
                }}
                aria-label={`切换到第${index + 1}张图片`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 图片预览Modal */}
      <Modal
        open={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handlePreviewCancel}
        width="90vw"
        style={{ top: 20 }}
        centered
        className="image-preview-modal"
      >
        <div className="preview-image-container">
          <img
            src={previewImage}
            alt={previewTitle}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />
        </div>
      </Modal>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
