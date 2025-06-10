import React, { useEffect, useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';

const timelineData = [
  {
    year: '1992年',
    subtitle: '佩蒂成立',
    text: '3万元创业，平阳县佩蒂皮件制品厂注册成立。',
    position: 'bottom',
    animationBase: 0.1,
  },
  {
    year: '2002',
    subtitle: '行业一大步',
    text: '"宠物"进目录，温州佩蒂宠物公司注册成立。',
    position: 'top',
    animationBase: 0.2,
  },
  {
    year: '2008',
    subtitle: '创立标准',
    text: '制定《宠物食品-狗咬胶》国家标准。',
    position: 'bottom',
    animationBase: 0.7,
  },
  {
    year: '2010',
    subtitle: '蓬勃发展',
    text: '江苏佩蒂更名为江苏康贝，荣获"省级农业化龙头企业"称号。',
    position: 'top',
    animationBase: 0.8,
  },
  {
    year: '2013',
    subtitle: '全球化第一站',
    text: '响应国家"一带一路"顶层合作倡议，佩蒂成功走出去，建立越南工厂。',
    position: 'bottom',
    animationBase: 1.3,
  },
  {
    year: '2017',
    subtitle: '开启资本 扩张之路',
    text: '2015年股份制改革后，佩蒂在新三板挂牌，后于2017年在创业板上市，成为中国宠物行业第一家上市公司，股票代码:300673。',
    position: 'bottom',
    animationBase: 0.1,
  },
  {
    year: '2018年',
    subtitle: '开启品牌运营 实施双轮驱动',
    text: '2018年，佩蒂成立杭州管理中心，正式开启品牌运营事业，进入国内外"双轮驱动"时代。',
    position: 'top',
    animationBase: 0.2,
  },
  {
    year: '2019',
    subtitle: '生态赋能让中国企业借船出海',
    text: '佩蒂柬埔寨东埔寨工业园区开工建设，全能赋服务投入个性模块式帮更多中国企业出海',
    position: 'bottom',
    animationBase: 0.7,
  },
  {
    year: '2023',
    subtitle: '"一体两翼"护航发展',
    text: '佩蒂发布战略2.0，即"一体两翼"战略:稳固ODM业务、发展品牌运营业务、培育创新业务。',
    position: 'top',
    animationBase: 0.8,
  },
  {
    year: '2024',
    subtitle: '发力全球高端主粮赛道',
    text: '佩蒂新西兰工厂主粮产线正式投产积极抢占高端宠物主粮市场。',
    position: 'bottom',
    animationBase: 1.3,
  },
  {
    year: '待续...',
    subtitle: '',
    // text: '待续...',
    position: 'bottom',
    animationBase: 1.5,
  },
];

export default function DevelopmentPath() {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const pageCount = Math.ceil(timelineData.length / pageSize);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [page]);

  const pagedData = timelineData.slice(page * pageSize, (page + 1) * pageSize);
  const getLeftPercent = (idx: number, len: number = pageSize) => `${(idx / (len - 1)) * 100}%`;

  const handlePrev = () => {
    if (page > 0) {
      setIsVisible(false);
      setTimeout(() => setPage(page - 1), 300);
    }
  };
  const handleNext = () => {
    if (page < pageCount - 1) {
      setIsVisible(false);
      setTimeout(() => setPage(page + 1), 300);
    }
  };

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="关于佩蒂——发展历程" />
      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">佩蒂30余年发展历程</h2>
        </div>
        <div className="company-history-section">
          <div className="timeline-abs-container">
            {/* 主轴线 */}
            <div className="timeline-main-line"></div>
            {/* 左右箭头 */}
            <div
              className={`timeline-arrow left${page === 0 ? ' disabled' : ''}`}
              onClick={handlePrev}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16L7 10L13 4"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`timeline-arrow right${page === pageCount - 1 ? ' disabled' : ''}`}
              onClick={handleNext}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 4L13 10L7 16"
                  stroke="#999"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* 主轴点 */}
            {pagedData.map((item, idx) => (
              <div
                className="timeline-point"
                style={{ left: getLeftPercent(idx, pagedData.length) }}
                key={item.year}
              ></div>
            ))}
            {/* 上方卡片 */}
            {pagedData.map((item, idx) =>
              item.position === 'top' ? (
                <div
                  className="timeline-card-abs-wrapper top"
                  style={{ left: getLeftPercent(idx, pagedData.length) }}
                  key={item.year}
                >
                  <div className="timeline-card">
                    <div
                      className={`card-year animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase}s` }}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`card-subtitle animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase + 0.2}s` }}
                    >
                      {item.subtitle}
                    </div>
                    <div
                      className={`card-text animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase + 0.4}s` }}
                    >
                      {item.text}
                    </div>
                  </div>
                  <div className="card-connector-line card-connector-line-top"></div>
                </div>
              ) : null
            )}
            {/* 下方卡片 */}
            {pagedData.map((item, idx) =>
              item.position === 'bottom' ? (
                <div
                  className="timeline-card-abs-wrapper bottom"
                  style={{ left: getLeftPercent(idx, pagedData.length) }}
                  key={item.year}
                >
                  <div className="card-connector-line card-connector-line-bottom"></div>
                  <div className="timeline-card">
                    <div
                      className={`card-year animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase}s` }}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`card-subtitle animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase + 0.2}s` }}
                    >
                      {item.subtitle}
                    </div>
                    <div
                      className={`card-text animate-text${isVisible ? ' visible' : ''}`}
                      style={{ animationDelay: `${item.animationBase + 0.4}s` }}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="detailed-history-section">
          <div className="history-milestone">
            <div className="milestone-date">1992.09</div>
            <div className="milestone-content">平阳佩蒂皮件制品厂注册成立。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2002.10</div>
            <div className="milestone-content">温州佩蒂宠物用品有限公司注册成立。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2003.06</div>
            <div className="milestone-content">
              江苏泰州100亩生产基地投产，成立江苏佩蒂宠物食品有限公司。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2005.11</div>
            <div className="milestone-content">温州佩蒂首次通过ISO9001、HACCP双体系认证。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2006.01</div>
            <div className="milestone-content">温州佩蒂首次通过BRC体系认证。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2008.06</div>
            <div className="milestone-content">温州佩蒂首次通过GSV认证。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2008.12</div>
            <div className="milestone-content">
              温州佩蒂主持制定《宠物食品—狗咬胶》国家标准（GB/T23185-2008）。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2009.03</div>
            <div className="milestone-content">
              温州佩蒂代表中国宠物食品企业接受欧盟"FVO"官员检查并获得官方认可。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2010.11</div>
            <div className="milestone-content">温州佩蒂荣获中国质量诚信企业称号。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2011.09</div>
            <div className="milestone-content">温州佩蒂被认定为国家高新技术企业。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2012.09</div>
            <div className="milestone-content">佩蒂实业庆祝成立20周年。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2013.04</div>
            <div className="milestone-content">越南好嚼有限公司成立。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2013.06</div>
            <div className="milestone-content">温州佩蒂通过ISO14001和ISO18001双体系认证。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2014.12</div>
            <div className="milestone-content">温州佩蒂更名为"佩蒂动物营养科技有限公司"。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2015.04</div>
            <div className="milestone-content">佩蒂股份在新三板挂牌上市，股票代码"832362"。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2017.03</div>
            <div className="milestone-content">越南巴拉拉食品有限公司成立。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2017.07</div>
            <div className="milestone-content">佩蒂股份在深圳创业板上市，股票代码"300673"。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2018.04</div>
            <div className="milestone-content">佩蒂智创（杭州）宠物科技有限公司成立。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2018.05.11</div>
            <div className="milestone-content">
              佩蒂通过全资子公司新西兰北岛完成对BOP Industries Limited
              100%股权的收购。据悉，BOP的主要资产为其持有的新西兰宠物食品公司Alpine Export NZ
              Limited 100%的股权，该公司在新西兰主要从事宠物食品业务。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2019.03.13</div>
            <div className="milestone-content">
              在北京国家体育场金色大厅举行的"新标佩"发布会上，佩蒂股份宣布全面发力国内市场。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2019.04</div>
            <div className="milestone-content">
              栗瑞森首相的妹妹洪生妮女士（HUN SENG NY）等人员在临佩蒂集团参观指导。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2019.10.18</div>
            <div className="milestone-content">
              由大众证券报主办的第十四届中国上市公司竞争力与公信力调查评选颁奖高峰论坛在成都举行，佩蒂股份（股票代码：300673）以其良好的市场前景和管理理念入选最佳创业板上市公司。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2021.1</div>
            <div className="milestone-content">
              佩蒂集团入选浙江省之江跨国公司研究院、浙江省境外投资企业协会联合发布的"2020年浙江本土民营企业跨国经营50强"之一。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2022.09</div>
            <div className="milestone-content">佩蒂成立 30 周年。</div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2023.1</div>
            <div className="milestone-content">
              佩蒂集团被浙江省经济和信息化厅评选为第二批制造业"云化企业"。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2023.1</div>
            <div className="milestone-content">
              佩蒂集团通过浙江省温州市经济和信息化局考核认证，成为2022年度浙江省专精特新型中小企业之一。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2023.4</div>
            <div className="milestone-content">
              佩蒂集团发布战略2.0，宣布未来佩蒂将坚持稳固ODM/OEM业务、重点发展OBM、培育创新业务的发展战略。
            </div>
          </div>

          <div className="history-milestone">
            <div className="milestone-date">2023.08</div>
            <div className="milestone-content">
              佩蒂股份与亮牌中国共同宣布，佩蒂温州生产基地已完成SGS认证，正式取得碳中和核证，成为中国宠物行业首家零碳数字化智能工厂。
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
