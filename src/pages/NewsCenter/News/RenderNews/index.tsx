import React, { useEffect } from 'react';
import { useMemo } from 'react';
import { coverList } from '../constant';
import { useParams, useNavigate } from 'react-router-dom';
import './index.less';
import FooterNav from '@/components/FooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';

export default function RenderNews() {
  // Get the id parameter from the URL
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Convert id to number and ensure it's valid
  const newsIndex = useMemo(() => {
    const index = parseInt(id || '0', 10);
    return isNaN(index) || index < 0 || index >= coverList.length ? 0 : index;
  }, [id]);

  // Get the news item based on the index
  const newsItem = useMemo(() => coverList[newsIndex], [newsIndex]);

  // If the news item doesn't exist, redirect to the first news
  useEffect(() => {
    if (!newsItem) {
      navigate('/news-detail/0');
    }
  }, [newsItem, navigate]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-detail-page">
      <div className="news-detail-content">
        <h1 className="news-detail-title">{newsItem.title}</h1>
        <div className="news-detail-time">{newsItem.time}</div>

        <div className="news-detail-image">
          <img src={newsItem.cover} alt={newsItem.title} />
        </div>

        <div className="news-detail-body">
          {/* Placeholder for actual news content */}
          <p>
            佩蒂宠物用品股份有限公司成立于1994年，是中国最大的宠物零食生产企业之一，也是
            中国宠物食品行业的领军企业。公司产品远销全球，在宠物用品领域享有盛誉。
          </p>
          <p>
            我们秉承"用爱呵护每一只宠物"的理念，不断创新研发，为全球宠物提供健康、
            营养、美味的宠物零食及用品，让宠物和主人共享幸福生活。
          </p>
        </div>

        <div className="news-navigation">
          <div
            className={`prev-news ${newsIndex === 0 ? 'disabled' : ''}`}
            onClick={() => newsIndex > 0 && navigate(`/news-detail/${newsIndex - 1}`)}
          >
            上一篇
          </div>
          <div
            className={`next-news ${newsIndex === coverList.length - 1 ? 'disabled' : ''}`}
            onClick={() =>
              newsIndex < coverList.length - 1 && navigate(`/news-detail/${newsIndex + 1}`)
            }
          >
            下一篇
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
