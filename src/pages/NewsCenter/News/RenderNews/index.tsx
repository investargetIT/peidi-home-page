import { useEffect, lazy, Suspense } from 'react';
import { useMemo } from 'react';
import { coverList } from '../constant';
import { useParams, useNavigate } from 'react-router-dom';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';

// Dynamically import news components
const NewsComponents = {
  1: lazy(() => import('../components/News1')),
  2: lazy(() => import('../components/News2')),
  3: lazy(() => import('../components/News3')),
  4: lazy(() => import('../components/News4')),
  5: lazy(() => import('../components/News5')),
  6: lazy(() => import('../components/News6')),
  7: lazy(() => import('../components/News7')),
  8: lazy(() => import('../components/News8')),
  9: lazy(() => import('../components/News9')),
  10: lazy(() => import('../components/News10')),
  11: lazy(() => import('../components/News11')),
  12: lazy(() => import('../components/News12')),
  13: lazy(() => import('../components/News13')),
  14: lazy(() => import('../components/News14')),
  15: lazy(() => import('../components/News15')),
  16: lazy(() => import('../components/News16')),
  17: lazy(() => import('../components/News17')),
  18: lazy(() => import('../components/News18')),
  19: lazy(() => import('../components/News19')),
  20: lazy(() => import('../components/News20')),
  21: lazy(() => import('../components/News21')),
  22: lazy(() => import('../components/News22')),
  23: lazy(() => import('../components/News23')),
  24: lazy(() => import('../components/News24')),
  25: lazy(() => import('../components/News25')),
  26: lazy(() => import('../components/News26')),
};

export default function RenderNews() {
  // Get the id parameter from the URL
  const { id } = useParams<{ id: string }>();
  console.log('id', id);
  const navigate = useNavigate();

  // Convert id to number and ensure it's valid
  const newsId = useMemo(() => {
    const idNum = parseInt(id || '1', 10);
    return isNaN(idNum) || idNum < 1 || idNum > coverList.length ? 1 : idNum;
  }, [id]);

  // Get the news item based on the ID (adjusting index for array access)
  const newsIndex = newsId - 1;
  const newsItem = useMemo(() => coverList[newsIndex], [newsIndex]);

  // If the news item doesn't exist, redirect to the first news
  useEffect(() => {
    if (!newsItem) {
      navigate('/blogs/news/1');
    }
  }, [newsItem, navigate]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  // Determine which component to render based on the id
  const DynamicNewsComponent = NewsComponents[newsId as keyof typeof NewsComponents] || null;

  return (
    <div className="news-detail-page">
      <div className="news-detail-content">
        <h1 className="news-detail-title">{newsItem.title}</h1>
        <div className="news-detail-time">{newsItem.time}</div>

        {/* <div className="news-detail-image">
          <img src={newsItem.cover} alt={newsItem.title} />
        </div> */}

        <div className="news-detail-body">
          {DynamicNewsComponent ? (
            <Suspense fallback={<div>加载中...</div>}>
              <DynamicNewsComponent />
            </Suspense>
          ) : (
            <>
              {/* Default content when no specific component exists */}
              <p>
                佩蒂宠物用品股份有限公司成立于1994年，是中国最大的宠物零食生产企业之一，也是
                中国宠物食品行业的领军企业。公司产品远销全球，在宠物用品领域享有盛誉。
              </p>
              <p>
                我们秉承"用爱呵护每一只宠物"的理念，不断创新研发，为全球宠物提供健康、
                营养、美味的宠物零食及用品，让宠物和主人共享幸福生活。
              </p>
            </>
          )}
        </div>

        <div className="news-navigation">
          {newsId > 1 && (
            <div className="prev-news" onClick={() => navigate(`/blogs/news/${newsId - 1}`)}>
              上一篇
            </div>
          )}
          {newsId < coverList.length && (
            <div className="next-news" onClick={() => navigate(`/blogs/news/${newsId + 1}`)}>
              下一篇
            </div>
          )}
        </div>
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
