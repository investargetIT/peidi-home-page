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
      src: WeiboIcon,
      alt: '佩蒂星球微博',
    },
    {
      src: WeChatPet,
      alt: '佩蒂宠物公众号',
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
      alt: '京东爵宴旗舰店',
    },
    {
      src: DouyinPet,
      alt: '抖音爵宴旗舰店',
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
      <div className="bottom-copyright-section">
        <div className="bottom-content-container">
          <div className="bottom-contact-container">
            <div className="bottom-social-media">
              <img src={QRCode} alt="QR Code" className="bottom-qrcode" />
              <img src={WeiboIcon} alt="Weibo" className="bottom-weibo" />
            </div>
            <div className="bottom-phone-number">400-836-1508</div>
          </div>
        </div>
      </div>
    </>
  );
}
