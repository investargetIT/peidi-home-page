/**
 * 首页Banner组件
 * 展示网站的主横幅图片、口号和行动按钮
 */
import { Button } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MeatyBanner from './images/meatyway.jpg';
import HealthyBanner from './images/health.jpg';
import ChewableBanner from './images/chewnergy.png';
import LogoMeaty from './images/meaty-logo.png';
import LogoHealthy from './images/health-logo.png';
import LogoChewable from './images/chew-logo.png';
import './index.less';

export default function HomeBanner() {
  const navigate = useNavigate();

  const bannerList = [
    {
      title: '天然成就美味',
      subTitle: '天然膳食标准引领者',
      image: MeatyBanner,
      logo: LogoMeaty,
      btnText: '立即查看',
      link: '/collection/meatyway',
    },
    {
      title: '健康主食新标准',
      subTitle: '精准营养主义',
      image: HealthyBanner,
      logo: LogoHealthy,
      btnText: '立即查看',
      link: '/collection/health',
    },
    {
      title: '宠物咀嚼标准定义者',
      subTitle: '专注咀嚼产品30年+',
      image: ChewableBanner,
      logo: LogoChewable,
      btnText: '立即查看',
      link: '/collection/chewnergy',
    },
  ];

  // 当前显示的banner索引
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 切换到下一张幻灯片
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % bannerList.length);
  };

  // 切换到指定索引的幻灯片
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 处理按钮点击
  const handleButtonClick = () => {
    navigate(bannerList[currentIndex].link);
  };

  // 设置自动轮播
  useEffect(() => {
    // 启动定时器，每5秒切换一次
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // 组件卸载时清除定时器
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="home-banner-container">
      {/* 轮播Banner背景图 */}
      <div className="carousel-container">
        {bannerList.map((banner, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner.image})`, cursor: 'pointer' }}
            onClick={() => {
              navigate(banner.link);
            }}
          >
            <div
              className={`banner-content ${index === 2 ? 'default-layout' : 'alternate-layout'}`}
            ></div>
          </div>
        ))}

        {/* 导航指示器 */}
        <div className="carousel-indicators">
          {bannerList.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
