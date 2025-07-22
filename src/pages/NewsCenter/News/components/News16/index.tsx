import React from 'react';
import './index.less';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';
import Image6 from './images/image6.jpg';
import Image7 from './images/image7.jpg';

export default function News16() {
  return (
    <div className="news-container">
      <div className="news-image-wrapper">
        <img src={Image1} alt="佩蒂公司总部" />
      </div>

      <div className="news-content">
        <div className="news-text">
          <p>11月7日，佩蒂宠物健康营养研究院正式揭牌成立，为宠物产业发展注入科技能量。</p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image2} alt="佩蒂公司总部" />
        </div>

        <div className="news-text">
          <p>
            “30年来，佩蒂一直以‘用全球好产品推动宠物健康标准升级’为企业使命，并持续在精准营养、科学喂养方面加大研发投入，取得了很多可喜的进展。”佩蒂相关负责人告诉记者，佩蒂宠物健康营养研究院将通过建立一个开放性的科技创新平台，重点关注宠物生命全周期营养、生理心理健康、宠物行为研究等领域，丰富营养健康产品供给，实现科学呵护宠物健康的目标。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image3} alt="佩蒂公司总部" />
        </div>

        <div className="news-text">
          <p>
            在此基础上，佩蒂宠物健康营养研究院将围绕针对性的健康营养研究、国内外科技合作、利用最新科技术成果研发新产品、推动市场规则和政策法规的完善等四方面开展工作。构建新型的合作创新机制，高效整合内外资源，推进科技成果产业化，为中国乃至全球宠物提供高品质的产品和服务。
          </p>

          <p>
            成立大会上，佩蒂与宁夏大学的辛国省教授签订了战略合作协议，并发布了最新的研究成果。未来佩蒂将通过战略合作的方式，把科研与生产相结合，夯实产品开发的科学基础，提升产品功能的可验证性。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image4} alt="佩蒂公司总部" />
        </div>

        <div className="news-text">
          <p>
            平阳县科技局局长白荣涛先生和水头镇党委书记周春珍女士，一起见证了佩蒂宠物健康营养研究院的成立。白局长认为，研究院汇聚智力、整合资源、科技创新的三大平台功能将重构科技创新机制，有效推动科技创新战略的实施。周书记在致辞中说：“二十大闭幕不过十天，很快就成立了佩蒂宠物健康营养研究院，是用实际行动贯彻党的二十大精神，是推动佩蒂高质量发展的重要举措。这也为宠物小镇的高质量发展吹响了号角”。
          </p>
        </div>
      </div>

      <div className="news-image-wrapper">
        <img src={Image5} alt="研究院揭牌仪式" />
      </div>
      <div className="news-image-wrapper">
        <img src={Image6} alt="研究院揭牌仪式" />
      </div>
      <div className="news-text">
        <p>
          佩蒂集团董事长陈振标先生在成立大会上强调：“佩蒂股份已经明确‘用全球好产品推动宠物健康标准升级’的企业使命。要靠科技创新去定义产品价值钉，要靠科技创新去研制好产品，要靠科技创新去保障高质量。高质量才能支撑好品牌。”佩蒂宠物健康营养研究院的成立是背负着佩蒂的使命，运用科技的力量，为宠物带来更多更好的产品。
        </p>
      </div>
      <div className="news-image-wrapper">
        <img src={Image7} alt="研究院揭牌仪式" />
      </div>
      <div className="news-text">
        <p>
          “佩蒂不仅仅是好产品生产者，更是健康营养理念的传递者。”佩蒂相关负责人介绍，面向未来，佩蒂将继续用实际行动打造健康、营养、科学的高品质产品，满足宠物营养健康需求，持续提升宠物健康水平。
        </p>
      </div>
      <h3 className="news-subtitle">结论</h3>
      <div className="news-text">
        <p>
          揭开佩蒂宠物健康与营养研究院是宠物行业在科技创新推动下取得的关键进步。通过专注于有针对性的健康和营养研究，促进国内外合作，并利用最新的科学成果，佩蒂将重新定义宠物护理领域。该研究院致力于整合智慧、资源和创新，旨在提高宠物产品的质量和功效。凭借以技术创新和高质量标准为基础的战略眼光，佩蒂有望引领行业满足宠物不断变化的健康和营养需求，确保它们在未来几年的福祉。
        </p>
      </div>
    </div>
  );
}
