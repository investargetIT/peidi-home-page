import './index.less';
import SolutionBanner from './images/history.jpg';
import StockInfo from '../components/StockInfo';

export default function Solution() {
  // 公司历史事件
  const historyEvents = [
    {
      year: '2011年3月',
      content: '公司引入PE中山联动第一期股权投资中心（有限合伙），优化股权结构。'
    },
    {
      year: '2014年12月',
      content: '温州佩蒂动物营养科技有限公司正式更名佩蒂动物营养科技股份有限公司，完成股改。'
    },
    {
      year: '2015年4月23日',
      content: '公司股票在全国股转系统（"新三板"）挂牌，为国内宠物行业第一家挂牌企业。'
    },
    {
      year: '2015年12月',
      content: '公司定向发行200万股，引入股东北京泓石股权投资管理中心（有限合伙）。'
    },
    {
      year: '2015年12月',
      content: '公司完成上市辅导备案。'
    },
    {
      year: '2016年5月9日',
      content: '公司向证监会报送申请材料，正式启动IPO申报。'
    },
    {
      year: '2017年5月10日',
      content: '中国证券监督管理委员会创业板发行审核委员会2017年第40次发审委会， 公司IPO获通过。'
    },
    {
      year: '2017年6月9日',
      content: '中国证券监督管理委员会下发《关于核准佩蒂动物营养科技股份有限公司首次 公开发行股票的批复》（证监许可[2017]888号），核准佩蒂动物营养科技股份有限公司向社会 公众公开发行人民币普通股（A股）2,000万股。'
    },
    {
      year: '2017年7月11日',
      content: '公司股票在深交所创业板上市，股票简称：佩蒂股份，股票代码：300673， 成为国内宠物行业第一家上市公司。'
    }
  ].reverse();

  return (
    <div className="market-solution">
      {/* 股票信息区域 */}
      <StockInfo stockName="佩蒂股份" stockCode="300673" />

      {/* 内容标题区域 */}
      <div className="section-title-area">
        <div className="section-title-container">
          <div className="section-title-box">
            <div className="section-title-underline"></div>
            <h2 className="section-title">资本市场综述</h2>
          </div>
        </div>
      </div>

      {/* 公司介绍内容 */}
      <div className="company-intro">
        <div className="company-intro-container">
          <p className="company-intro-text">
            佩蒂动物营养科技股份有限公司最早成立于2002年10月21日，是中国最早专业从事宠物食品 的企业之一。公司上市历程中主要里程碑事件如下：
          </p>

          {/* 时间线 */}
          <div className="timeline">
            {historyEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-year">{event.year}</h3>
                  <p className="timeline-event">{event.content}</p>
                </div>
              </div>
            ))}
            <img src={SolutionBanner} alt="solution-banner" />
          </div>
        </div>
      </div>
    </div>
  );
} 