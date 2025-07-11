import Banner from './images/banner.png';
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
import { useState, useEffect } from 'react';
import { Modal } from 'antd';

export default function ProductionCapacity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3, Image4]; // 使用Image1到Image4

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(images.length / 2));
    }, 5000); // 5秒切换一次

    return () => clearInterval(interval);
  }, [images.length]);

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
      <BannerContainer bannerImage={Banner} title="研发能力" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">佩蒂营养研究院</h2>
          <p className="productionbase-nz-desc">
            研究院拥有40多位核心专职研究人员，与中国农业大学、华中农业大学、浙江大学、华南农业大学、浙江农林科技大学、浙江农科院、宁夏大学、美国加州大学、新西兰梅西大学等大学和科研机构，以及ACVIM美国兽医内科学会认证宠物营养专家、加州大学戴维斯分校认证临床营养专家Dr.Sarah
            Wilson建立了良好的合作关系。
          </p>
          <div className="productionbase-nz-image-container">
            <div className="slideshow-container">
              <div
                className="slides-wrapper"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="slide-group">
                  <div className="productionbase-nz-image">
                    <img
                      src={Image1}
                      alt="研发团队展示"
                      onClick={() => handlePreview(Image1, '研发团队展示 - 图片1')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="productionbase-nz-image">
                    <img
                      src={Image2}
                      alt="研发团队展示"
                      onClick={() => handlePreview(Image2, '研发团队展示 - 图片2')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
                <div className="slide-group">
                  <div className="productionbase-nz-image">
                    <img
                      src={Image3}
                      alt="研发团队展示"
                      onClick={() => handlePreview(Image3, '研发团队展示 - 图片3')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="productionbase-nz-image">
                    <img
                      src={Image4}
                      alt="研发团队展示"
                      onClick={() => handlePreview(Image4, '研发团队展示 - 图片4')}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </div>
              </div>

              {/* 左箭头 */}
              <button
                className={`arrow-btn arrow-left ${currentSlide === 0 ? 'disabled' : ''}`}
                onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
                disabled={currentSlide === 0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* 右箭头 */}
              <button
                className={`arrow-btn arrow-right ${currentSlide === Math.ceil(images.length / 2) - 1 ? 'disabled' : ''}`}
                onClick={() =>
                  setCurrentSlide(prev => Math.min(Math.ceil(images.length / 2) - 1, prev + 1))
                }
                disabled={currentSlide === Math.ceil(images.length / 2) - 1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
            国内外研发团队超百人，每年超过3%的营业收入用于创新研发，近五年研发投入持续增长，2024
            年投入近3000万元，位居行业前列。
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
