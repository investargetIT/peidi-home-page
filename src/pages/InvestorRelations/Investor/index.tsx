import React from 'react';
import './index.less';
import StockInfo from '../components/StockInfo';

export default function Investor() {
  return (
    <div className="investor-page">
      <StockInfo stockName="佩蒂股份" stockCode="300673" />

      <div className="investor-header">
        <div className="header-content">
          <h2>投资者联络</h2>
        </div>
      </div>

      <div className="investor-contact-container">
        <div className="contact-table">
          <div className="contact-row">
            <div className="contact-label">联系地址</div>
            <div className="contact-value">浙江省温州市平阳县水头镇工业园区宠乐路2号</div>
          </div>

          <div className="contact-row">
            <div className="contact-label">电话</div>
            <div className="contact-value">0577-58189955</div>
          </div>

          <div className="contact-row">
            <div className="contact-label">传真</div>
            <div className="contact-value">0577-63830321</div>
          </div>

          <div className="contact-row">
            <div className="contact-label">电子邮箱</div>
            <div className="contact-value">ir@peidibrand.com</div>
          </div>
        </div>
      </div>
    </div>
  );
} 