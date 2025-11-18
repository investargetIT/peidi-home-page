import { useEffect, lazy, Suspense } from 'react';
import { useMemo } from 'react';
import { coverList } from '../constant';
import { useParams, useNavigate } from 'react-router-dom';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';

// Dynamically import news components
const NewsComponents = {
  1: lazy(() => import('../components/News37')),
  2: lazy(() => import('../components/News36')),
  3: lazy(() => import('../components/News35')),
  4: lazy(() => import('../components/News34')),
  5: lazy(() => import('../components/News33')),
  6: lazy(() => import('../components/News32')),
  7: lazy(() => import('../components/News31')),
  8: lazy(() => import('../components/News30')),
  9: lazy(() => import('../components/News29')),
  10: lazy(() => import('../components/News28')),
  11: lazy(() => import('../components/News27')),
  12: lazy(() => import('../components/News26')),
  13: lazy(() => import('../components/News25')),
  14: lazy(() => import('../components/News24')),
  15: lazy(() => import('../components/News23')),
  16: lazy(() => import('../components/News22')),
  17: lazy(() => import('../components/News21')),
  18: lazy(() => import('../components/News20')),
  19: lazy(() => import('../components/News19')),
  20: lazy(() => import('../components/News18')),
  21: lazy(() => import('../components/News17')),
  22: lazy(() => import('../components/News16')),
  23: lazy(() => import('../components/News15')),
  24: lazy(() => import('../components/News14')),
  25: lazy(() => import('../components/News13')),
  26: lazy(() => import('../components/News12')),
  27: lazy(() => import('../components/News11')),
  28: lazy(() => import('../components/News10')),
  29: lazy(() => import('../components/News9')),
  30: lazy(() => import('../components/News8')),
  31: lazy(() => import('../components/News7')),
  32: lazy(() => import('../components/News6')),
  33: lazy(() => import('../components/News5')),
  34: lazy(() => import('../components/News4')),
  35: lazy(() => import('../components/News3')),
  36: lazy(() => import('../components/News2')),
  37: lazy(() => import('../components/News1')),
};

export default function RenderNews() {
  // FIXME: 发布后报错，后续再处理
  // // 自动生成新闻组件映射
  // const MAX_NEWS_COMPONENTS = 37; // 根据实际存在的组件数量调整

  // // useMemo 缓存组件映射，避免重复生成
  // const NewsComponents = useMemo(() => {
  //   const components: Record<number, React.LazyExoticComponent<React.ComponentType<any>>> = {};

  //   for (let i = 1; i <= MAX_NEWS_COMPONENTS; i++) {
  //     // 注意：这里需要根据你的实际编号对应关系调整
  //     // 如果News1对应新闻1，News2对应新闻2，则直接使用i
  //     // 如果News1对应新闻33，News2对应新闻32，则使用 MAX_NEWS_COMPONENTS - i + 1
  //     const componentNumber = MAX_NEWS_COMPONENTS - i + 1; // 保持你原有的反向对应关系

  //     components[i] = lazy(() => import(`../components/News${componentNumber}/index.tsx`));
  //   }

  //   return components;
  // }, []);

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
