import React from 'react';
import Banner from './images/banner.webp';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Email from './images/email.svg';
import Addr from './images/addr.svg';
import Phone from './images/phone.webp';

export default function GroupStructure() {
  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="联系我们" />

      {/* 联系信息区域 */}
      <div className="contact-info-container">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon">
              <img src={Phone} alt="电话" />
            </div>
            <h3 className="contact-title">服务热线</h3>
            <p className="contact-detail">86-21-58365867</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <img src={Email} alt="邮箱" />
            </div>
            <h3 className="contact-title">服务电子邮件</h3>
            <p className="contact-detail">anq@peidibrand.com</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">
              <img src={Addr} alt="地址" />
            </div>
            <h3 className="contact-title">地址</h3>
            <p className="contact-detail">中国上海市张杨路620号中融恒瑞国际广场2002室，200122</p>
          </div>
        </div>
      </div>

      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
