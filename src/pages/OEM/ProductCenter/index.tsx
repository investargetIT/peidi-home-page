import React, { useState } from 'react';
import './index.less';
import DogBg from '@/assets/dog/bg.webp';
import DogDry1 from '@/assets/dog/dry/1.webp';
import DogDry2 from '@/assets/dog/dry/2.webp';
import DogWet1 from '@/assets/dog/wet/3.webp';
import DogSnack1 from '@/assets/dog/snacks/1.webp';
import DogSnack2 from '@/assets/dog/snacks/2.webp';
import DogSnack3 from '@/assets/dog/snacks/3.webp';
import DogSnack4 from '@/assets/dog/snacks/4.webp';
import DogSnack5 from '@/assets/dog/snacks/5.webp';
import DogSnack6 from '@/assets/dog/snacks/6.webp';
import DogSnack7 from '@/assets/dog/snacks/7.webp';
import CatBg from '@/assets/cat/banner.webp';
import CatDry1 from '@/assets/cat/dry/1.webp';
import CatWet1 from '@/assets/cat/wet/1.webp';

export default function ProductCenter() {
  const [currentBg, setCurrentBg] = useState(DogBg);

  return (
    <div className="product-center-page">
      {/* 背景容器 */}
      <div className="product-bg-container" style={{ backgroundImage: `url(${currentBg})` }}>
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

          {/* 咀嚼物和零食区域 */}
          <div className="snacks-section">
            <div className="section-title">
              <h2>咀嚼物和零食</h2>
            </div>
            <div className="snacks-grid">
              <div className="product-item snack">
                <img src={DogSnack1} alt="咀嚼物1" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack2} alt="咀嚼物2" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack3} alt="零食1" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack4} alt="零食2" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack5} alt="零食3" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack6} alt="零食4" />
              </div>
              <div className="product-item snack">
                <img src={DogSnack7} alt="零食5" />
              </div>
            </div>
          </div>

          {/* 猫产品展示区域 */}
          <div
            className="cat-product-area"
            onMouseEnter={() => setCurrentBg(CatBg)}
            onMouseLeave={() => setCurrentBg(DogBg)}
          >
            <div className="product-title cat-title">
              <h1>猫</h1>
            </div>

            <div className="cat-product-display">
              {/* 干粮区域 - 上方一个 */}
              <div className="cat-dry-food-section">
                <div className="product-item cat-product">
                  <img src={CatDry1} alt="猫干粮" />
                  <div className="product-label">干粮</div>
                </div>
              </div>

              {/* 湿粮区域 - 下方一个大图 */}
              <div className="cat-wet-food-section">
                <div className="product-item cat-product cat-large">
                  <img src={CatWet1} alt="猫湿粮" />
                  <div className="product-label">湿粮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
