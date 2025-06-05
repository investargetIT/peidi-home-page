/**
 * 页脚导航组件
 * 展示网站底部的导航链接区域
 */
import './index.less';
import BrandLogo from './images/banner.png';
import QRCode from './images/we-chat.jpg';
import WeiboIcon from './images/weibo.jpg';
import WeChatPet from './images/pet-wechat.jpg';
import JueYanRed from './images/xiaohongshu-jueyan.png';
import HaoshijiaRed from './images/xiaohongshu-haohsijia.png';
import TianMaoPet from './images/tianmao-peidi.jpg';
import JingdongPet from './images/jingdong-jueyan.jpg';
import DouyinPet from './images/douyin-jueyan.png';

export default function FooterNav() {
  const qrList = [
    {
      src: QRCode,
      alt: '佩蒂股份公众号',
    },
    {
      src: WeChatPet,
      alt: '佩蒂宠物公众号',
    },
    {
      src: WeiboIcon,
      alt: '佩蒂星球微博',
    },
    {
      src: JueYanRed,
      alt: '小红书爵宴官方账号',
    },
    {
      src: HaoshijiaRed,
      alt: '小红书好适嘉官方账号',
    },
    {
      src: TianMaoPet,
      alt: '天猫佩蒂旗舰店',
    },
    {
      src: JingdongPet,
      alt: '京东爵宴官方旗舰店',
    },
    {
      src: DouyinPet,
      alt: '抖音爵宴官方旗舰店',
    },
  ];

  return (
    <>
      <div className="footer-nav-wrapper">
        <div className="footer-nav-logo-wrapper">
          <img src={BrandLogo} alt="佩蒂创新" className="footer-nav-logo" />
        </div>
      </div>

      {/* Copyright Footer Section */}
      <div className="bottom-copyright-title">更多精彩请关注佩蒂官方账号矩阵</div>
      <div className="bottom-copyright-section">
        <div className="bottom-content-container">
          <div className="qr-grid-container">
            {qrList.map((qr, index) => (
              <div key={index} className="qr-item">
                <img src={qr.src} alt={qr.alt} className="qr-image" />
                <div className="qr-label">{qr.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-phone-number">官方电话：400-836-1508</div>
      <div className="bottom-link-container">
        友情链接：
        <a href="https://peidigroup.com/" target="_blank" rel="noopener noreferrer">
          https://peidigroup.com
        </a>
        <a href="https://meatyway.net" target="_blank" rel="noopener noreferrer">
          https://meatyway.net
        </a>
      </div>
    </>
  );
}
