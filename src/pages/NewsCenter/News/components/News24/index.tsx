import './index.less';
import Image1 from './images/image1.webp';

export default function News21() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-image-wrapper">
          <img src={Image1} alt="佩蒂公司总部" />
        </div>
      </div>
    </div>
  );
}
