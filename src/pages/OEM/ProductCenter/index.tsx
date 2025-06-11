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
import BirdBg from '@/assets/bird/banner.webp';
import BirdSnack1 from '@/assets/bird/snacks/1.webp';
import BirdToy1 from '@/assets/bird/toy/1.webp';
import AnimalBg from '@/assets/animal/banner.webp';
import AnimalSnack1 from '@/assets/animal/snacks/1.webp';
import AnimalToy1 from '@/assets/animal/toy/1.webp';
import AnimalToy2 from '@/assets/animal/toy/2.webp';
import AnimalToy3 from '@/assets/animal/toy/3.webp';

export default function ProductCenter() {
  const [currentBg, setCurrentBg] = useState(DogBg);

  return (
    <div className="product-center-page">
      {/* 背景容器 */}
      <div className="product-bg-container" style={{ backgroundImage: `url(${currentBg})` }}>
        {/* 页面标题 */}

        {/* 产品展示区域 */}
        <div className="product-display-area">
          <div className="product-title" onMouseEnter={() => setCurrentBg(DogBg)}>
            <h1>狗</h1>
          </div>
          {/* 干粮区域 - 上方两个并排 */}
          <div className="dry-food-section" onMouseEnter={() => setCurrentBg(DogBg)}>
            <div className="product-item">
              <img src={DogDry1} alt="干粮1" />
              <div className="product-label">干粮</div>
            </div>
            <div className="product-item">
              <img src={DogDry2} alt="干粮2" />
            </div>
          </div>

          {/* 湿粮区域 - 下方一个大图 */}
          <div className="wet-food-section" onMouseEnter={() => setCurrentBg(DogBg)}>
            <div className="product-item large">
              <img src={DogWet1} alt="湿粮" />
              <div className="product-label">湿粮</div>
            </div>
          </div>

          {/* 咀嚼物和零食区域 */}
          <div className="snacks-section" onMouseEnter={() => setCurrentBg(DogBg)}>
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
          <div className="cat-product-area" onMouseEnter={() => setCurrentBg(CatBg)}>
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

          {/* 鸟类产品展示区域 */}
          <div className="bird-product-area" onMouseEnter={() => setCurrentBg(BirdBg)}>
            <div className="product-title bird-title">
              <h1>鸟类</h1>
            </div>

            <div className="bird-product-display">
              {/* 零食区域 */}
              <div className="bird-snack-section">
                <div className="product-item bird-product">
                  <img src={BirdSnack1} alt="鸟类零食" />
                  <div className="product-label">零食</div>
                </div>
              </div>

              {/* 可食用玩具区域 */}
              <div className="bird-toy-section">
                <div className="section-title">
                  <h2>可食用玩具</h2>
                </div>
                <div className="bird-toy-grid">
                  <div className="product-item bird-product">
                    <img src={BirdToy1} alt="可食用玩具" />
                    <div className="product-label">玩具</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小动物产品展示区域 */}
          <div className="animal-product-area" onMouseEnter={() => setCurrentBg(AnimalBg)}>
            <div className="product-title animal-title">
              <h1>小动物</h1>
            </div>

            <div className="animal-product-display">
              {/* 顶部布局 - 可食用玩具和草编小屋 */}
              <div className="animal-top-section">
                {/* 左侧可食用玩具 */}
                <div className="animal-edible-toy">
                  <div className="product-item animal-product large-toy">
                    <img src={AnimalToy1} alt="可食用玩具" />
                    <div className="product-label">可食用的玩具</div>
                  </div>
                </div>

                {/* 中间草编小屋 */}
                <div className="animal-houses">
                  <div className="product-item animal-product house">
                    <img src={AnimalToy2} alt="草编小屋1" />
                  </div>
                  <div className="product-item animal-product house">
                    <img src={AnimalToy3} alt="草编小屋2" />
                  </div>
                </div>
              </div>

              {/* 零食展示区域 */}
              <div className="animal-snacks-section">
                <div className="product-item animal-product snacks-complete">
                  <img src={AnimalSnack1} alt="小动物零食" />
                  <div className="product-label">零食</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
