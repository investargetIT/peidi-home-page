import React, { useRef } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';

export default function DevelopmentPath() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="关于佩蒂——发展历程" />

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">佩蒂30余年发展历程</h2>
        </div>
        {/* todo ,此处展示及动画效果，后续投入优化 */}
        <div className="company-history-section">
          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-track">
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
            </div>

            <div className="timeline-navigation">
              <button className="timeline-nav-btn prev-btn" onClick={handlePrevClick}>
                ←
              </button>
              <button className="timeline-nav-btn next-btn" onClick={handleNextClick}>
                →
              </button>
            </div>

            <div className="timeline-cards">
              <div className="timeline-card top-card card-2002">
                <div className="card-content">
                  <h3 className="card-year">2002</h3>
                  <h4 className="card-subtitle">行业一大步</h4>
                  <p className="card-text">"宠物"进目录，温州佩蒂宠物公司注册成立。</p>
                </div>
              </div>

              <div className="timeline-card bottom-card card-1992">
                <div className="card-content">
                  <h3 className="card-year">1992年</h3>
                  <h4 className="card-subtitle">佩蒂成立</h4>
                  <p className="card-text">3万元创业，平阳县佩蒂皮件制品厂注册成立。</p>
                </div>
              </div>

              <div className="timeline-card top-card card-2010">
                <div className="card-content">
                  <h3 className="card-year">2010</h3>
                  <h4 className="card-subtitle">蓬勃发展</h4>
                  <p className="card-text">
                    江苏佩蒂更名为江苏康贝，荣获"省级农业化龙头企业"称号。
                  </p>
                </div>
              </div>

              <div className="timeline-card bottom-card card-2008">
                <div className="card-content">
                  <h3 className="card-year">2008</h3>
                  <h4 className="card-subtitle">创立标准</h4>
                  <p className="card-text">制定《宠物食品-狗咬胶》国家标准。</p>
                </div>
              </div>

              <div className="timeline-card bottom-card card-2013">
                <div className="card-content">
                  <h3 className="card-year">2013</h3>
                  <h4 className="card-subtitle">全球化第一站</h4>
                  <p className="card-text">
                    响应国家"一带一路"顶层合作倡议，佩蒂成功走出去，建立越南工厂。
                  </p>
                </div>
              </div>
            </div>
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
