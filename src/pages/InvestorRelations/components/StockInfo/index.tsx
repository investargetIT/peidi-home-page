import React from 'react';
import './index.less';

interface StockInfoProps {
  stockName: string;
  stockCode: string;
  stockCurrency?: string;
}

export default function StockInfo({ stockName, stockCode, stockCurrency = '元' }: StockInfoProps) {
  return (
    <div className="stock-info">
      <div className="stock-info-container">
        <span className="stock-name">{stockName}</span>
        <span className="stock-code">[{stockCode}]</span>
        {stockCurrency && <span className="stock-currency">{stockCurrency}</span>}
      </div>
    </div>
  );
} 