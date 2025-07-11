import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import EmailIcon from './images/email.svg';
import PhoneIcon from './images/phone.webp';

export default function GroupStructure() {
  const serviceHotline = {
    name: '服务热线',
    phone: '86-21-58365867',
    icon: PhoneIcon,
  };

  const locations = [
    {
      name: '佩蒂动物营养科技股份有限公司',
      phone: '0577-58127766',
      address: '浙江省温州市平阳县水头镇工业园区宠乐路2号',
    },
    {
      name: '佩蒂智创(杭州)宠物科技有限公司',
      phone: '0571-85238571',
      address: '浙江省杭州市萧山区诺德财富中心a座20楼',
    },
    {
      name: '上海禾仕嘉商贸有限公司',
      phone: '021- 58365867',
      address: '上海市张杨路620号中融恒瑞国际广场2002室',
    },
  ];

  const emailInfo = {
    email: 'anq@peidibrand.com',
    icon: EmailIcon,
  };

  return (
    <div className="contact-us-page">
      <BannerContainer bannerImage={Banner} title="联系我们" />
      <div className="contact-info-section">
        <div className="location-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              <h2 className="location-name">{location.name}</h2>
              <div className="location-details">
                <p>
                  <strong>电话:</strong> {location.phone}
                </p>
                <p>
                  <strong>地址:</strong> {location.address}
                </p>
              </div>
            </div>
          ))}
          <div className="location-card">
            <div className="card-header">
              <img src={emailInfo.icon} alt="Email" className="card-icon" />
              <h2 className="location-name">服务电子邮件</h2>
            </div>
            <div className="location-details">
              <p>{emailInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
      <NewFooterNav />
      <CopyrightFooter />
    </div>
  );
}
