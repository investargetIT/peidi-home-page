import React from 'react';
import './index.less';
import Image1 from './images/image1.webp';
import Image2 from './images/image2.webp';
import Image3 from './images/image3.webp';
import Image4 from './images/image4.webp';
import Image5 from './images/image5.webp';
import Image6 from './images/image6.webp';

export default function News5() {
  return (
    <div className="news-container">
      <div className="news-image-wrapper">
        <img src={Image1} alt="佩蒂公司总部" />
      </div>

      <div className="news-content">
        <div className="news-text">
          <p>
            近日，柬埔寨洪森首相的妹妹洪森妮（HUN SENG
            NY）女士等一行人员莅临佩蒂集团参观指导。佩蒂集团董事长陈振标、执行总经理郑香兰、副总经理唐照波、战略部副总裁陈聂晗等佩蒂高层领导接待了来访贵宾。
          </p>

          <p>
            在双方的交流会议上，佩蒂战略部副总裁陈聂晗介绍了远道而来的来访贵宾，热烈欢迎洪森妮（HUN
            SENG
            NY）一行人员到访佩蒂做考察交流。会上陈董表示，佩蒂领先行业的毛利率、成本控制能力背后离不开全球化布局。柬埔寨是共建“一带一路”的重要合作国家，佩蒂为了优化业务布局，提升公司市场竞争力，去年就在柬埔寨当地投资设立全资子公司柬埔寨爵味食品有限公司，旨在利用当地劳动力成本的优势和较为自由的贸易环境，进一步补充宠物食品、用品产能。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image2} alt="财务数据图表" />
        </div>

        <div className="news-text">
          <p>
            预计柬埔寨公司产能将于2020年年底初步投产，除咬胶外还有水产品、农产品等优势食材资源的布局，有利于产品创新和现有产业布局的进一步协同，巩固佩蒂在宠物行业的综合竞争优势。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image3} alt="财务数据图表" />
        </div>

        <div className="news-text">
          <p>
            同时，佩蒂也愿意把全球工厂向中国市场完全开放，通过园区的配置共享，降低企业成本。产业园内提供公共资源，如厂房、厂区、地方政府公关等，让合作伙伴可以更聚焦于自身业务，从而构建健康、和谐、高效的生态产业园。目前已有部分感兴趣的合作伙伴正陆续加入。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image4} alt="财务数据图表" />
        </div>

        <div className="news-text">
          <p>
            洪森妮（HUN SENG
            NY）女士对佩蒂集团的发展给予了充分的肯定和高度的评价，对中国宠物行业的飞速发展表示惊喜，愿意深度参与到中国宠物行业的战略发展中，并表示愿意给予产业园项目更多的地域支持，以帮助产业园内企业提高生产力和竞争力，更好地参与区域和全球经济一体化。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image5} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image6} alt="财务数据图表" />
        </div>
        <div className="news-text">
          <p>
            最后，陈董感谢洪森家族对佩蒂发展的大力支持，同时也坚定了佩蒂在柬埔寨布局产业的信心。佩蒂也欢迎更多认同我们的理念，有着共同的价值观的行业合作伙伴加入到我们全球产业园的布局中，共享该项目带来的长期红利。
          </p>
        </div>
      </div>
    </div>
  );
}
