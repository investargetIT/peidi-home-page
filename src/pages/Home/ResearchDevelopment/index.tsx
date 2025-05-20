import './index.less';

export default function ResearchDevelopment() {
  return (
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
  );
} 