import React from 'react';
import './index.less';
import DogBg from '@/assets/dog/bg.webp';
import DogDry1 from '@/assets/dog/dry/1.webp';
import DogDry2 from '@/assets/dog/dry/2.webp';
import DogWet1 from '@/assets/dog/wet/3.webp';

export default function ProductCenter() {
  return (
    <div className="product-center-page">
      {/* 背景容器 */}
      <div className="product-bg-container" style={{ backgroundImage: `url(${DogBg})` }}>
        {/* 页面标题 */}
        <div className="product-title">
          <h1>狗</h1>
        </div>

        {/* 产品展示区域 */}
        <div className="product-display-area">
          {/* 干粮区域 - 上方两个并排 */}
          <div className="dry-food-section">
            <div className="product-item">
              <img src={DogDry1} alt="干粮1" />
              <div className="product-label">干粮</div>
            </div>
            <div className="product-item">
              <img src={DogDry2} alt="干粮2" />
            </div>
          </div>

          {/* 湿粮区域 - 下方一个大图 */}
          <div className="wet-food-section">
            <div className="product-item large">
              <img src={DogWet1} alt="湿粮" />
              <div className="product-label">湿粮</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
