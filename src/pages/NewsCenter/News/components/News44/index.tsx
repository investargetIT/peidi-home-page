import './index.less';
import Image1 from './images/image1.jpg';

export default function News44() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-image-wrapper">
          <img src={Image1} alt="双11收官战报" />
        </div>
      </div>
    </div>
  );
}
