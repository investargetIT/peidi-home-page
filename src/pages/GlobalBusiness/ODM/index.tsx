import React from 'react';
import './index.less';
import Code from './images/code.jpg';

export default function ODM() {
  return (
    <div className="odm-page">
      <div className="odm-content">
        <div className="cooperation-section">
          <div className="cooperation-header">
            <div className="orange-line"></div>
            <h2>合作机会</h2>
          </div>

          <div className="cooperation-info">
            <div className="info-item">
              <span className="info-label">公司地址：</span>
              <span className="info-value">杭州市钱江世纪城皓月路159号诺德财富中心A座20楼</span>
            </div>

            <div className="info-item">
              <span className="info-label">联系方式：</span>
              <span className="info-value">0571－8526 7396</span>
            </div>

            <div className="info-item">
              <span className="info-label">邮箱：</span>
              <span className="info-value">anq@peidibrand.com（上海市场部邮箱）</span>
            </div>

            <div className="info-item english">
              <span className="info-label">Adress:</span>
              <span className="info-value">Nord Wealth Center, 159 Haoyue Road, Qianjiang Century City, Hangzhou</span>
            </div>

            <div className="info-item english">
              <span className="info-label">Tel:</span>
              <span className="info-value">0571－8526 7396</span>
            </div>

            <div className="info-item english">
              <span className="info-label">mail:</span>
              <span className="info-value">anq@peidibrand.com (Shanghai Market Department)</span>
            </div>
            <div className="code-container">
              <img src={Code} alt="code" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 