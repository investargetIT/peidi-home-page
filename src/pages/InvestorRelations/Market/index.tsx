import React from 'react';
import './index.less';
import StockInfo from '../components/StockInfo';

export default function Market() {
  return (
    <div className="market-page">
      <StockInfo stockName="佩蒂股份" stockCode="300673" />
      <div className="section-title-area">
        <div className="section-title-container">
          <div className="section-title-box">
            <div className="section-title-underline"></div>
            <h2 className="section-title">公司公告</h2>
          </div>
        </div>
      </div>

      <div className="market-content">
        {/* Market content will go here */}
        <iframe src="https://webapi.cninfo.com.cn/notice.html?api=p_sysapi1091&stype=1&prefix=sysapi&scode=300673&column=F002V,SORTNAME,F001D,F004V" width="100%" height="1000px"></iframe>
      </div>
    </div>
  );
} 