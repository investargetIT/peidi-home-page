import { Button } from 'antd';
import { useState, useEffect } from 'react';
import HomeBanner from './HomeBanner';
import BrandTip from './BrandTip';
import ConceptIcon from './images/concept.webp';
import CoreIcon from './images/core.webp';
import MissionIcon from './images/mission.webp';
import VisionIcon from './images/vision.webp';
import FactoryWenzhou from './images/factory-wenzhou.webp';
import FactoryVietnam from './images/factory-vietnam.webp';
import FactoryCambodia from './images/factory-cambodia.webp';
import FactoryNewZealand from './images/factory-new-zealand.webp';
import './index.less';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const factoryImages = [
    {
      src: FactoryWenzhou, alt: "中国温州生产基地", config: [
        {
          key: '工厂概况',
          value: '温州佩蒂工厂于2002年正式成立，占地面积约33000平方米，目前拥有9000吨宠物零食产能，另有3万吨新型主粮产能在建。'
        }, {
          key: '设施',
          value: '配备辐照灭菌、废水处理、自动化包装冻水线、实现高效生产。'
        }, {
          key: '检测体系',
          value: '拥有微生物分析、理化指标、兽药残留等完备的检测体系。'
        }
      ]
    },
    {
      src: FactoryNewZealand, alt: "新西兰KCPF生产基地", config: [
        {
          key: '工厂概况',
          value: '2024年投产，生产基地占地面积约48000平方米。拥有全球最先进的宠物主粮产线，年产量约4万吨高品质干粮，为亚太地区最大单条产线。'
        }, {
          key: '优质原料',
          value: '我们使用来自新西兰的天然新鲜原料来制作优质宠物食品'
        }
      ]
    },
    {
      src: FactoryVietnam, alt: "越南德信生产基地", config: [
        {
          key: '工厂概况',
          value: '德信生产基地2015年投入使用，总投资1400万美元，占地面积约4万平方米拥有1万吨宠物零食产能。'
        }, {
          key: '设施先进',
          value: '拥有先进的废水处理系统和辐照灭菌线。'
        }
      ]
    },
    {
      src: FactoryCambodia, alt: "柬埔寨生产基地", config: [
        {
          key: '工厂概况',
          value: '爵味生产基地2022年投入使用，总投资8000万美元，占地面积约8万平方米，现有年产能约1.12万吨。'
        },
        {
          key: '产品范围',
          value: '工厂的生产线包括牲畜皮咀嚼产品、胶原蛋白咀嚼产品、无皮咀嚼产品和营养肉类零食。'
        },
        {
          key: '设施先进',
          value: '拥有行业领先的辐照生产线和废水处理系统。'
        }
      ]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % factoryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [factoryImages.length]);

  const handleIndicatorClick = (index: number): void => {
    setActiveSlide(index);
  };

  return <>
    <HomeBanner onLearnMoreClick={() => console.log('Learn more clicked')} />
    <BrandTip />
    <div className="brand-about-us-wrapper">
      <div className="brand-about-us-container">
        <div className="brand-about-us-title">关于我们</div>
        <div className="brand-about-us-content">佩蒂成立于1992年，是中国宠物行业首家上市公司，服务全球宠物30余年，改变的是配方和技术，不变的是对品质的坚持。佩蒂帮助全球宠物品牌设计、生产产品，业务覆盖欧洲、美国、澳洲、日韩、东南亚等国家，旗下拥有Health+、Meatyway、Chewnergy等自主品牌。</div>
        <div className="brand-about-us-btn-container">
          <Button className="brand-about-us-btn" type="primary">了解更多</Button>
        </div>
      </div>
    </div>
    <div className="brand-factory-wrapper">
      <div className="brand-factory-container">
        <div className="brand-factory-title">企业文化</div>
        <div className="brand-factory-content">我们的核心理念是，人和宠物和谐健康的生态对于幸福充实的生活至关重要。通过与客户、供应商和合作伙伴建立牢固的关系，我们希望为一个更加互联和富有同情心的世界做出贡献，让每个人都能共同繁荣。</div>
      </div>
    </div>
    <div className="brand-culture-icon-wrapper">
      <div className="brand-culture-icon-container">
        <div className="brand-culture-item">
          <img src={ConceptIcon} alt="concept" className="brand-culture-icon" />
          <div className="brand-culture-title">愿景</div>
          <div className="brand-culture-desc">成为人宠和谐健康生态卓越建设者</div>
        </div>
        <div className="brand-culture-item">
          <img src={CoreIcon} alt="core" className="brand-culture-icon" />
          <div className="brand-culture-title">理念</div>
          <div className="brand-culture-desc">诚信、创新、发展</div>
        </div>
        <div className="brand-culture-item">
          <img src={MissionIcon} alt="mission" className="brand-culture-icon" />
          <div className="brand-culture-title">核心价值观</div>
          <div className="brand-culture-desc">阳光、保鲜、担当、靠谱</div>
        </div>
        <div className="brand-culture-item">
          <img src={VisionIcon} alt="vision" className="brand-culture-icon" />
          <div className="brand-culture-title">使命</div>
          <div className="brand-culture-desc">用全球好产品推动宠物健康标准升级</div>
        </div>
      </div>
    </div>
    <div className="brand-factory-wrapper">
      <div className="brand-factory-container">
        <div className="brand-factory-title">工厂介绍</div>
        <div className="brand-factory-content">佩蒂的生产基地遍布中国、越南、柬埔寨、新西兰等全球多个国家，获评国家高新技术企业、浙江省级高新技术企业研发中心、浙江省省级企业研究院、温州市博士创新工作站，有效专利57个，3个国际发明专利、8个国家发明专利。</div>
        <div className="brand-factory-btn-container">
          <Button className="brand-factory-btn" type="primary">了解更多</Button>
        </div>
      </div>
    </div>
    <div className="factory-showcase-wrapper">
      <div className="factory-showcase-container">
        <div className="factory-showcase-left">
          <h2 className="factory-showcase-title">{factoryImages[activeSlide].alt}</h2>
          <div className="factory-showcase-content">
            <ul className="factory-showcase-list">
              {factoryImages[activeSlide].config.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span className="factory-showcase-bullet">•</span>
                  <div className="factory-showcase-text">
                    <strong>{item.key}：</strong>{item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="factory-showcase-right">
          <div className="factory-showcase-carousel">
            <div className="factory-showcase-slides">
              {factoryImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`factory-showcase-image ${index === activeSlide ? 'active' : ''}`}
                />
              ))}
            </div>
            <div className="factory-showcase-indicators">
              {factoryImages.map((_, index) => (
                <span
                  key={index}
                  className={`factory-indicator ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="product-innovation-wrapper">
      <div className="product-innovation-container">
        <h2 className="product-innovation-title">产品创新</h2>
        <Button className="product-innovation-button">了解更多</Button>
      </div>
    </div>
    <div className="research-development-wrapper">
      <div className="research-development-container">
        <div className="research-column">
          <div className="research-item">
            <h3 className="research-title">研发投入</h3>
            <div className="research-content">
              每年将超过3%的营业收入（行业平均水平为0.3%）用于研发新产品、新技术、新工艺
            </div>
          </div>
          <div className="research-item">
            <h3 className="research-title">国家标准</h3>
            <div className="research-content">
              主持并制定了中国首个狗咬胶国家标准
            </div>
          </div>
        </div>
        <div className="research-column">
          <div className="research-item">
            <h3 className="research-title">企业专利</h3>
            <div className="research-content">
              拥有有效专利57个，其中包括3个国际发明专利、8个国家发明专利。
            </div>
          </div>
          <div className="research-item">
            <h3 className="research-title">全球领先的研究中心</h3>
            <div className="research-content">
              佩蒂聘请了多名美国UC davis兽医大学、新西兰梅西大学等国内外顶尖学术机构，联合全球范围内行业专家及学术权威，创建了堪称全球领先的研究中心
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-nav-wrapper">
      <div className="footer-nav-container">
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">佩蒂创新</h3>
          <ul className="footer-nav-links">
            <li><a href="#">生产基地</a></li>
            <li><a href="#">生产能力</a></li>
            <li><a href="#">研发能力</a></li>
            <li><a href="#">订单流程</a></li>
            <li><a href="#">质量管理</a></li>
            <li><a href="#">产品中心</a></li>
          </ul>
        </div>
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">主菜单</h3>
          <ul className="footer-nav-links">
            <li><a href="#">企业文化</a></li>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">品牌产品</a></li>
            <li><a href="#">新闻中心</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
        <div className="footer-nav-column">
          <h3 className="footer-nav-title">品牌产品</h3>
          <ul className="footer-nav-links">
            <li><a href="#">爵宴</a></li>
            <li><a href="#">好适嘉</a></li>
            <li><a href="#">齿能</a></li>
            <li><a href="#">SmartBones</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright-footer">
      <div className="copyright-text">
        Copyright © 2024 佩蒂 保留所有权利.
      </div>
    </div>
  </>
} 