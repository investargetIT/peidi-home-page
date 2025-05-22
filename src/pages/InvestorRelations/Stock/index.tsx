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
            <h2 className="section-title">佩蒂股份（300673）股价实时显示</h2>
          </div>
        </div>
      </div>

      <div className="market-content">
        {/* Market content will go here */}
        <iframe
          src="https://m.10jqka.com.cn/stockpage/hs_300673/#&atab=geguNews"
          width="100%"
          height="1000px"
        ></iframe>
      </div>
    </div>
  );
}
