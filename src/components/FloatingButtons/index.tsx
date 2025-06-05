/**
 * 悬浮按钮组件
 * 右侧贴边显示，包含回到顶部和社交媒体按钮
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import WeChatQR from './images/wechat-qr.jpg';
import WeiboQR from './images/weibo-qr.jpg';

export default function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [hoveredQR, setHoveredQR] = useState<string | null>(null);

  // 监听滚动，决定是否显示回到顶部按钮
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 回到顶部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-buttons">
      {/* TOP按钮 */}
      {showTopButton && (
        <div className="floating-btn top-btn" onClick={scrollToTop}>
          <span className="btn-text">TOP</span>
        </div>
      )}

      {/* 微信按钮 */}
      <div
        className="floating-btn social-btn wechat-btn"
        onMouseEnter={() => setHoveredQR('wechat')}
        onMouseLeave={() => setHoveredQR(null)}
      >
        <svg viewBox="0 0 1024 1024" className="btn-icon">
          <path
            fill="currentColor"
            d="M690.1 377.4c5.9 0 11.8.2 17.6.5-15.5-71.8-93.7-125.7-183.9-125.7-109.8 0-199.7 75.1-199.7 167.7 0 54.1 29.6 98.8 78.9 133.5l-19.7 59.2 69.3-34.7c24.6 4.9 44.2 9.8 68.8 9.8 6.2 0 12.5-.3 18.6-.8-3.9-13.6-6.1-27.9-6.1-42.8-.2-90.4 71.9-163.2 156.2-166.7z"
          />
          <path
            fill="currentColor"
            d="M541.3 299.9c14.8 0 24.6 9.8 24.6 24.6 0 14.8-9.8 24.6-24.6 24.6-14.8 0-29.5-9.8-29.5-24.6.1-14.8 14.7-24.6 29.5-24.6z"
          />
          <path
            fill="currentColor"
            d="M444.4 349.1c-14.8 0-29.5-9.8-29.5-24.6 0-14.8 14.7-24.6 29.5-24.6 14.8 0 24.6 9.8 24.6 24.6 0 14.8-9.8 24.6-24.6 24.6z"
          />
          <path
            fill="currentColor"
            d="M867.7 613.4c0-78.9-78.9-148.3-167.7-148.3-93.7 0-167.7 69.4-167.7 148.3 0 78.9 74 148.3 167.7 148.3 19.7 0 39.4-4.9 59.2-9.8l54.2 29.5-14.8-49.3c39.4-29.6 68.8-69.4 69.3-118.7z"
          />
          <path
            fill="currentColor"
            d="M772.8 583.9c-9.8 0-19.7-9.8-19.7-19.7 0-9.8 9.8-19.7 19.7-19.7 14.8 0 24.6 9.8 24.6 19.7-.1 9.9-9.9 19.7-24.6 19.7z"
          />
          <path
            fill="currentColor"
            d="M700.1 564.2c9.8 0 19.7 9.8 19.7 19.7 0 9.8-9.8 19.7-19.7 19.7-14.8 0-24.6-9.8-24.6-19.7 0-9.9 9.8-19.7 24.6-19.7z"
          />
        </svg>

        {/* 微信二维码悬浮层 */}
        {hoveredQR === 'wechat' && (
          <div className="qr-popup">
            <img src={WeChatQR} alt="微信二维码" />
            <div className="qr-text">关注微信公众号</div>
          </div>
        )}
      </div>

      {/* 微博按钮 */}
      <div
        className="floating-btn social-btn weibo-btn"
        onMouseEnter={() => setHoveredQR('weibo')}
        onMouseLeave={() => setHoveredQR(null)}
      >
        <svg viewBox="0 0 1024 1024" className="btn-icon">
          <path
            fill="currentColor"
            d="M851.4 590.193c-22.196-66.233-90.385-90.422-90.385-90.422s-20.009-4.815-38.074 10.337c-18.065 15.152-16.055 40.229-16.055 40.229s5.964 21.976 32.114 61.951c26.15 39.975 10.395 78.158-21.976 88.537-32.371 10.379-88.537-22.069-88.537-22.069l-30.189 132.811c0 0 91.879 40.846 163.099 8.475 71.22-32.371 113.767-150.831 89.983-229.849z"
          />
          <path
            fill="currentColor"
            d="M543.944 614.296c-15.104-2.938-26.336-17.111-25.08-31.671 1.256-14.56 15.059-24.926 30.832-23.134 15.772 1.792 26.731 15.965 24.475 31.671-2.256 15.706-14.816 26.072-30.227 23.134z"
          />
          <path
            fill="currentColor"
            d="M577.123 657.297c-32.128-6.272-56.32-36.608-54.016-67.84 2.304-31.232 31.616-53.248 65.536-49.152 33.92 4.096 58.624 33.792 55.296 66.304-3.328 32.512-34.688 56.96-66.816 50.688z"
          />
          <path
            fill="currentColor"
            d="M717.143 324.881c-113.92-17.983-244.864 40.96-313.344 140.832-45.312 66.048-42.368 139.776 7.68 185.856 51.712 47.616 148.48 37.888 254.464-24.064 131.584-76.8 164.864-239.616 51.2-302.624zM423.253 737.855c-109.568 10.752-203.52-38.912-209.792-110.848-6.272-71.936 77.824-144.896 187.392-162.816 109.568-17.92 207.872 20.48 220.16 85.504 12.288 65.024-88.192 177.408-197.76 188.16z"
          />
          <path
            fill="currentColor"
            d="M915.911 386.142c-14.816-80.384-58.88-145.152-115.712-168.96-22.528-9.472-33.792 2.048-39.936 17.408-6.144 15.36 4.608 36.352 27.648 43.52 23.04 7.168 43.008 29.696 55.808 64.512 12.8 34.816 15.36 46.08 10.752 70.144-4.608 24.064 10.24 41.984 28.16 44.032 17.92 2.048 47.104-22.528 33.28-70.656z"
          />
          <path
            fill="currentColor"
            d="M827.392 430.08c-7.68-42.496-32.256-77.312-64.512-91.136-12.8-5.504-23.04 1.024-26.624 11.776-3.584 10.752 2.048 24.576 18.432 29.184 16.384 4.608 29.696 20.48 37.376 44.032 7.68 23.552 5.12 35.84 2.048 46.592-3.072 10.752 7.168 22.016 18.944 23.04 11.776 1.024 22.016-20.48 14.336-63.488z"
          />
        </svg>

        {/* 微博二维码悬浮层 */}
        {hoveredQR === 'weibo' && (
          <div className="qr-popup">
            <img src={WeiboQR} alt="微博二维码" />
            <div className="qr-text">关注官方微博</div>
          </div>
        )}
      </div>
    </div>
  );
}
