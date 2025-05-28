import './index.less';
import { coverList } from './constant';
import { Link } from 'react-router-dom';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import { useNavigate } from 'react-router-dom';

export default function News() {
  const navigate = useNavigate();
  return (
    <div className="news-page">
      <div className="news-content">
        <h1 className="news-title">消息</h1>

        <div className="news-list">
          {coverList.map((item, index) => (
            <div
              className="news-item"
              key={index}
              onClick={() => navigate(`/blogs/news/${index + 1}`)}
            >
              <div className="news-image">
                <img src={item.cover} alt={item.title} />
              </div>
              <h3 className="news-item-title">{item.title}</h3>
              <div className="news-item-time">{item.time}</div>
              <Link to={`/blogs/news/${index + 1}`} className="news-item-link">
                阅读更多
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 页脚导航区域 */}
      <FooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
