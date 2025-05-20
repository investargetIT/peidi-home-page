/**
 * 工厂展示组件
 * 展示公司全球各地工厂的轮播图和详细信息
 */
import { useState, useEffect } from 'react';
import FactoryWenzhou from '../images/factory-wenzhou.webp';
import FactoryVietnam from '../images/factory-vietnam.webp';
import FactoryCambodia from '../images/factory-cambodia.webp';
import FactoryNewZealand from '../images/factory-new-zealand.webp';
import './index.less';

export default function FactoryShowcase() {
  // 当前活动轮播项的索引
  const [activeSlide, setActiveSlide] = useState(0);

  // 工厂图片和信息数据
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

  // 设置自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % factoryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [factoryImages.length]);

  // 处理指示器点击事件
  const handleIndicatorClick = (index: number): void => {
    setActiveSlide(index);
  };

  return (
    <div className="factory-showcase-wrapper">
      <div className="factory-showcase-container">
        {/* 工厂信息左侧区域 */}
        <div className="factory-showcase-left">
          {/* 工厂标题 */}
          <h2 className="factory-showcase-title">{factoryImages[activeSlide].alt}</h2>

          {/* 工厂详细信息内容 */}
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

        {/* 工厂图片右侧区域 */}
        <div className="factory-showcase-right">
          <div className="factory-showcase-carousel">
            {/* 轮播图片容器 */}
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

            {/* 轮播指示器 */}
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
  );
} 