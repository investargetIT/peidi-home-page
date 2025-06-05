/**
 * 悬浮按钮组件
 * 右侧贴边显示，包含回到顶部和社交媒体按钮
 */
import React, { useState, useEffect } from 'react';
import './index.less';
import TopIcon from './images/top_icon.png';
import WeixinIcon from './images/weixin-icon.png';
import WeiboIcon from './images/weibo-icon.png';

export default function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [hoveredQR, setHoveredQR] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 悬浮按钮本体 */}
      <div
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* TOP按钮 */}
        {showTopButton && (
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <img src={TopIcon} alt="TOP" style={{ width: '24px', height: '24px' }} />
          </div>
        )}

        {/* 微信按钮 */}
        <div
          onMouseEnter={() => setHoveredQR('wechat')}
          onMouseLeave={() => setHoveredQR(null)}
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
          }}
        >
          <img src={WeixinIcon} alt="Weixin" style={{ width: '24px', height: '24px' }} />
        </div>

        {/* 微博按钮 */}
        <div
          onMouseEnter={() => setHoveredQR('weibo')}
          onMouseLeave={() => setHoveredQR(null)}
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
          }}
        >
          <img src={WeiboIcon} alt="Weibo" style={{ width: '24px', height: '24px' }} />
        </div>
      </div>

      {/* 微信二维码弹窗 */}
      {hoveredQR === 'wechat' && (
        <div
          style={{
            position: 'fixed',
            right: '100px',
            top: '200px',
            background: 'white',
            border: '3px solid #ff6b35',
            zIndex: 100002,
            color: 'black',
            fontSize: 16,
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            textAlign: 'center',
            minWidth: 150,
          }}
        >
          <img
            src="/wechat-qr.jpg"
            alt="微信二维码"
            style={{
              width: '120px',
              height: '120px',
              display: 'block',
              margin: '0 auto',
              border: '2px solid #eee',
            }}
          />
          <div style={{ marginTop: 8, color: '#666' }}>关注微信公众号</div>
        </div>
      )}

      {/* 微博二维码弹窗 */}
      {hoveredQR === 'weibo' && (
        <div
          style={{
            position: 'fixed',
            right: '100px',
            top: '380px',
            background: 'white',
            border: '3px solid #f7931e',
            zIndex: 100002,
            color: 'black',
            fontSize: 16,
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            textAlign: 'center',
            minWidth: 150,
          }}
        >
          <img
            src="/weibo-qr.jpg"
            alt="微博二维码"
            style={{
              width: '120px',
              height: '120px',
              display: 'block',
              margin: '0 auto',
              border: '2px solid #eee',
            }}
          />
          <div style={{ marginTop: 8, color: '#666' }}>关注官方微博</div>
        </div>
      )}
    </>
  );
}
