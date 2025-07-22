import './index.less';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';
import Image6 from './images/image6.jpg';
import Image7 from './images/image7.jpg';
import Image8 from './images/image8.jpg';

export default function News20() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-text">
          <p>
            佩蒂618首战8天，远超去年618全程30天，喜获天猫狗零食品牌榜第一、狗零食店铺榜第一、抖音宠物零食人气榜第一、京东狗零食累计成交排行榜第一！
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image1} alt="佩蒂公司总部" />
        </div>
        <div className="news-text">
          <p>
            此外，在今天举办的平阳宠物小镇爱宠日上，爵宴邀请抖音萌宠达人Timi和三月、大果粒！、克烈不做搞笑女带货直播，让宠物主足不出户，也能选购爵宴美食。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image2} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image3} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image4} alt="财务数据图表" />
        </div>
        <div className="news-text">
          <p>佩蒂旗下明星品牌爵宴专场直播实现曝光量突破16万，成交单数达到5000单，总GMV达25万。</p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image5} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image6} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image7} alt="财务数据图表" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image8} alt="财务数据图表" />
        </div>
      </div>
    </div>
  );
}
