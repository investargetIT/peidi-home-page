/**
 * 悬浮按钮组件
 * 右侧贴边显示，包含回到顶部和社交媒体按钮
 */
import { useState, useEffect } from 'react';
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

  // 按钮高度和间距
  const btnSize = 50;
  const btnGap = 10;
  // 计算按钮在页面中的top百分比
  // 悬浮按钮整体top: 50%（居中），微信按钮是第二个
  // 所以微信按钮的中心大致在 50% - btnSize/2 - btnGap/2
  // 微博按钮再往下 btnSize + btnGap

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
          gap: `${btnGap}px`,
        }}
      >
        {/* TOP按钮 */}
        {showTopButton && (
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width: `${btnSize}px`,
              height: `${btnSize}px`,
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
            width: `${btnSize}px`,
            height: `${btnSize}px`,
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
            width: `${btnSize}px`,
            height: `${btnSize}px`,
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

      {/* 微信二维码弹窗，fixed定位，right:90px，top:50%偏移-30px */}
      {hoveredQR === 'wechat' && (
        <div
          style={{
            position: 'fixed',
            right: '90px',
            top: 'calc(50% - 30px)', // 微调让弹窗与按钮垂直居中
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
            whiteSpace: 'nowrap',
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

      {/* 微博二维码弹窗，fixed定位，right:90px，top:calc(50% + 60px) */}
      {hoveredQR === 'weibo' && (
        <div
          style={{
            position: 'fixed',
            right: '90px',
            top: 'calc(50% + 60px)', // 微调让弹窗与微博按钮垂直居中
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
            whiteSpace: 'nowrap',
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
