import React from 'react';
import './index.less';
import Banner from './images/ODM.png';

export default function ODM() {
  return (
    <div className="odm-page">
      <div className="odm-content">
        <div className="odm-description">
          <div className="cooperation-header">
            <div className="orange-line"></div>
            <h2>ODM业务</h2>
          </div>

          <div className="brands-section">
            <img src={Banner} alt="Partner Brands" className="brands-image" />
          </div>

          <div className="description-content">
            <p className="description-text chinese">
              佩蒂股份——科学、健康养宠理念的引领者、传播者，凭借卓越的研发能力，坚守科学健康的产品价值，为众多国际一线品牌提供营养丰、好功效、高附加值的ODM产品。
            </p>

            <p className="description-text chinese">
              产品拥有专利32项，其中国内发明专利8项，国外发明专利3项，实用新型专利20项，得益于上市公司的资本助力，佩蒂将继续加大研发力度的投入，以用户为中心，本着科学养宠的产品观，与合作伙伴共创共赢的生态观，健康稳定的发展观，践行"爱心事业，乐宠生活"的理念。
            </p>

            <p className="description-text english">
              Petty Group, the leader and disseminator of the concept of science and health care, adheres to the value of scientific and healthy products by virtue of its outstanding research and development ability, and provides ODM products with high nutrition, good efficacy and high added value for many international first-line brands.
            </p>

            <p className="description-text english">
              The product has 32 patents, including 8 domestic invention patents, 3 foreign invention patents and 20 utility model patents. Thanks to the capital support of listed companies, Petty will continue to increase investment in R&D, focusing on users, in line with the product concept of scientific feeding, creating a win-win ecological concept with partners, healthy and stable development concept, and practicing the concept of "loving cause, loving life".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 