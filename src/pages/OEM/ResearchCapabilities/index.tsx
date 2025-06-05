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
import { useState, useEffect } from 'react';

export default function ProductionCapacity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3, Image4]; // 使用Image1到Image4

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(images.length / 2));
    }, 5000); // 5秒切换一次

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="研发能力" />

      {/* 新西兰KCPF区块 */}
      <div className="productionbase-nz-section">
        <div className="container">
          <h2 className="productionbase-nz-title">多元化团队</h2>
          <p className="productionbase-nz-desc">
            研发中心团队是一个多元化且充满活力的团队，致力于创新和卓越。海外研发团队在确保我们产品的本地化和文化适应性、弥合不同制造基地设施之间的环境和气候差距、增强我们的全球影响力方面发挥着至关重要的作用。他们与当地研发团队的无缝合作实现了高效的知识转移，并确保研究顺利转化为高质量的批量生产。这种密切的协调使我们能够开发出不仅符合国际标准而且符合当地品味和偏好的产品，最终推动我们在全球市场上的竞争优势。
          </p>
          <div className="productionbase-nz-image-container">
            <div className="slideshow-container">
              <div
                className="slides-wrapper"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="slide-group">
                  <div className="productionbase-nz-image">
                    <img src={Image1} alt="研发团队展示" />
                  </div>
                  <div className="productionbase-nz-image">
                    <img src={Image2} alt="研发团队展示" />
                  </div>
                </div>
                <div className="slide-group">
                  <div className="productionbase-nz-image">
                    <img src={Image3} alt="研发团队展示" />
                  </div>
                  <div className="productionbase-nz-image">
                    <img src={Image4} alt="研发团队展示" />
                  </div>
                </div>
              </div>
              <div className="slide-indicators">
                {Array.from({ length: Math.ceil(images.length / 2) }, (_, index) => (
                  <button
                    key={index}
                    className={`indicator ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="productionbase-nz-title">追求卓越</h2>
        </div>
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
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
