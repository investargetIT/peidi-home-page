import React from 'react';
import './index.less';

export default function Pets() {
  return (
    <div className="pet-industry-fund">
      {/* 股票信息区域 */}
      <div className="stock-info">
        <div className="stock-info-container">
          <span className="stock-name">佩蒂股份</span>
          <span className="stock-code">[300673]</span>
          <span className="stock-currency">元</span>
        </div>
      </div>

      {/* 内容标题区域 */}
      <div className="section-title-area">
        <div className="section-title-container">
          <div className="section-title-box">
            <div className="section-title-underline"></div>
            <h2 className="section-title">佩蒂股份·关于签署成立产业基金框架协议的公告</h2>
          </div>
        </div>
      </div>

      {/* 股票走势图 */}
      <div className="stock-chart-container">
        <div className="stock-chart-wrapper">
          <img
            src="https://image.sinajs.cn/newchart/daily/n/sz300673.gif"
            alt="佩蒂股份股票走势图"
            className="stock-chart"
          />
        </div>
      </div>

      {/* 证券信息 */}
      <div className="stock-details">
        <div className="stock-details-container">
          <div className="stock-detail-item">
            <span className="detail-label">证券代码:</span>
            <span className="detail-value">300673</span>
          </div>

          <div className="stock-detail-item">
            <span className="detail-label">证券简称:</span>
            <span className="detail-value">佩蒂股份</span>
          </div>

          <div className="stock-detail-item">
            <span className="detail-label">公告编号:</span>
            <span className="detail-value">2018-083</span>
          </div>
        </div>
      </div>

      {/* 公告内容 */}
      <div className="announcement-content">
        <div className="announcement-container">
          <div className="announcement-header">
            <div className="company-name">佩蒂动物营养科技股份有限公司</div>
            <div className="announcement-title">关于签署成立产业基金框架协议的公告</div>
          </div>

          <div className="announcement-text">
            <p className="text-paragraph">本公司及董事会全体成员保证公告内容的真实、准确和完整，没有虚假记载、误导性陈述或者重大遗漏。</p>

            <p className="text-subtitle">重要提示：</p>

            <ol className="announcement-list">
              <li>本协议为合作双方就本次拟共同发起设立宠物产业并购基金事项达成的初步合作意向，存在较大不确定性。具体实施将以签订的正式协议为准。</li>
              <li>本次交易不构成关联交易，也不构成重大资产重组。</li>
              <li>公司不存在最近三年被警的同类框架协议无进展或进展未达预期的情况。</li>
              <li>风险提示：产业基金具有投资周期长、流动性较低的特点，公司本次投资可能面临较长的投资回收期；产业基金在投资运作过程中将受宏观经济、行业特点、投资标的、交易方案等诸多因素影响，存在投资失败或亏损不能实现预期收益的风险，请投资者注意投资风险。</li>
            </ol>

            <p className="text-subtitle">一、框架协议的基本情况</p>
            <p className="text-paragraph">
              宠物产业在发达国家已有百余年的历史，伴随着宠物的完整生命周期，形成了一条完整的产业链。目前已形成一个成熟的市场。近年来，我国宠物产业呈爆发式的快速发展，产业总量上升较快，但存在市场集中度低、国产品牌影响力小等特点。为积极响应国家大力支持民营企业发展社会的趋势，提升公司在宠物行业的竞争力，佩蒂动物营养科技股份有限公司（以下称"公司"或"佩蒂股份"）与湖海华美（上海）股权投资基金管理有限公司（以下称"湖海华美"）于2018年12月5日签署了《佩蒂动物营养科技股份有限公司与湖海华美（上海）股权投资基金管理有限公司合作框架协议》（以下称"框架协议"），双方拟联合发起宠物产业并购基金（以下称"收购基金"），对国内外优质宠物行业目标企业进行投资，获取目标企业股权、与目标企业成立合资公司或其他有助于公司在宠物行业发展的投资机会。
            </p>

            <p className="text-paragraph">
              本次签署的为框架协议，后续如进入实施阶段将签署正式协议。公司将根据《深圳证券交易所创业板股票上市规则》、《创业板信息披露业务备忘录第21号：上市公司与专业投资机构合作事项》、《公司章程》、《对外投资管理制度》等相关规定履行审批程序和信息披露义务。
            </p>

            <p className="text-paragraph">
              本事项不构成关联交易，也不构成《上市公司重大资产重组管理办法》规定的重大资产重组。
            </p>

            <p className="text-subtitle">二、合作方基本情况</p>

            <ol className="partner-info-list">
              <li>名称：湖海华美（上海）股权投资基金管理有限公司</li>
              <li>统一社会信用代码：91310000086198858X2</li>
              <li>企业类型：有限责任公司(中外合资)</li>
              <li>住所：中国（上海）自由贸易试验区业盛路188号A-868H室</li>
              <li>法定代表人：周冰</li>
              <li>注册资本：人民币3000.0000万</li>
              <li>成立日期：2013年12月16日</li>
              <li>营业期限：2013年12月16日至2043年12月15日</li>
              <li>经营范围：受股权投资企业委托，从事投资管理及相关咨询服务业务。【依法须经批准的项目，经相关部门批准后方可开展经营活动】</li>
            </ol>

            <p className="text-paragraph">
              湖海华美已依照《私募投资基金监督管理暂行办法》及《私募投资基金管理人登记和基金备案办法（试行）》履行登记备案程序，私募基金管理人登记证书编号：P1003081。
            </p>

            <p className="text-paragraph">
              截至本公告披露日，湖海华美与公司不存在关联关系或利益安排，与公司控股股东、实际控制人、董事、监事、高级管理人员之间不存在关联关系或利益安排，当前直接或间接持有公司股份。
            </p>

            <p className="text-subtitle">三、框架协议的主要内容</p>

            <ol className="agreement-content-list">
              <li>拟议基金规模：拟议基金拟定总规模为10亿元人民币，基金首期规模拟定为拟议基金总规模的30%。在首期基金完成募集之后，拟议基金即开展投资，并同时募集剩余资金。</li>

              <li>拟议基金募集：佩蒂股份(或其有资格的关联方，下同)拟作为有限合伙人认缴不低于拟议基金总规模的30%，湖海华美（或其有资格的关联方，下同）负责募集剩余资金。</li>

              <li>拟议基金期限：拟议基金存续期5年；其中，投资期3年，退出期2年；存续期届满，普通合伙人可根据基金投资和退出情况延长基金存续期2次，每次1年。</li>

              <li>拟议基金管理：佩蒂股份与湖海华美将分别委派拟议基金的普通合伙人，其中湖海华美将担任拟议基金的执行事务合伙人。</li>

              <li>拟议基金投资决策：拟议基金的投资（包括退出）决策由基金投资决策委员会作出。</li>
            </ol>

            <p className="text-paragraph">
              基金投资决策委员会由5名成员组成：其中，湖海华美有权委派2名成员，佩蒂股份有权委派2名成员，其他有限合伙人有权委派1名成员。基金投资决策委员会的决议需要超过4名成员同意方可通过。
            </p>

            <ol className="agreement-content-list" start={6}>
              <li>管理费：管理费将按照市场化费率收取，投资期内为基金认缴规模的2%/年，投资期终止后，为每一基金投资人尚未退出的投资项目的投资成本中分摊的金额的2%。管理费用最终标准以各投资人签署的正式协议为准。管理费由基金管理人收取。</li>

              <li>收益分配：拟议基金扣除基金费用后的可分配收益首先满足有限合伙人一定的收益率，具体收益率以合伙人协议约定的收益率为准；之后有限合伙人和普通合伙人按80%：20%的比例分配剩余可分配收益。收益分配最终以拟议基金各合伙人签署的正式协议为准。</li>
            </ol>

            <p className="text-subtitle">四、对上市公司的影响</p>

            <p className="text-paragraph">
              公司此次与湖海华美合作发起产业投资基金，是为发挥双方在从业经验、专业管理团队等各方面优势，提高公司对投资标的相关运作的专业性，提升投资效率。公司此次与合作方联合发起设立产业投资基金，有利于公司积极把握宠物行业未来发展机会。通过产业基金延伸行业的上、下游，扩大和完善公司在国内外的产业布局，符合公司战略规划，有利于提升公司未来竞争力，符合全体股东利益。
            </p>

            <p className="text-paragraph">
              本事项对公司2018年度业绩无重大影响。
            </p>

            <p className="text-subtitle">五、后续进展情况的披露</p>

            <p className="text-paragraph">
              公司将审慎判断本次合作事项的进展或重大变化，严格履行审批程序和信息披露义务。
            </p>

            <p className="text-subtitle">六、风险提示及相关情况说明</p>

            <ol className="risk-notice-list">
              <li>本协议为合作双方就本次拟共同发起设立宠物产业并购基金事项达成的初步合作意向，存在较大不确定性。具体实施将以签订的正式协议为准。</li>

              <li>本次交易不构成关联交易，也不构成重大资产重组。</li>

              <li>公司本次拟投资的资金来源、支付方式、支付安排等具体内容尚待正式协议予以约定。</li>

              <li>公司不存在最近三年被披露的同类框架协议无进展或进展未达预期的情况。</li>

              <li>未来三个月内，公司不存在控股股东、持股5%以上股东所持限售股份将解除限售或减持的情况。</li>

              <li>产业基金具有投资周期长、流动性较低的特点，公司本次投资可能面临较长的投资回收期；产业基金在投资运作过程中将受宏观经济、行业特点、投资标的、交易方案等诸多因素影响，存在投资失败或亏损等不能实现预期收益的风险，请投资者注意投资风险。</li>
            </ol>

            <p className="text-subtitle">七、备查文件</p>

            <ol className="reference-docs-list">
              <li>《佩蒂动物营养科技股份有限公司与湖海华美（上海）股权投资基金管理有限公司合作框架协议》；</li>

              <li>深圳证券交易所要求的其他文件。</li>
            </ol>

            <div className="announcement-footer">
              <p className="footer-text">特此公告。</p>

              <p className="company-name" style={{ marginBottom: '8px' }}>佩蒂动物营养科技股份有限公司</p>
              <p className="board-name">董事会</p>
              <p className="announcement-date">二〇一八年十二月六日</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 