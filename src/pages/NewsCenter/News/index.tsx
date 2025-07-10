import './index.less';
import { coverList } from './constant';
import { Link } from 'react-router-dom';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';

export default function News() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate total pages
  const totalPages = Math.ceil(coverList.length / itemsPerPage);

  // Get current page items
  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return coverList.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage]);

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="news-page">
      <div className="news-content">
        <h1 className="news-title">新闻中心</h1>

        <div className="news-list">
          {currentItems.map((item, index) => {
            // Calculate the actual index in the full list
            const actualIndex = (currentPage - 1) * itemsPerPage + index;
            return (
              <div
                className="news-item"
                key={actualIndex}
                onClick={() => navigate(`/blogs/news/${actualIndex + 1}`)}
              >
                <div className="news-image">
                  <img src={item.cover} alt={item.title} />
                </div>
                <h3 className="news-item-title">{item.title}</h3>
                <div className="news-item-time">{item.time}</div>
                <Link to={`/blogs/news/${actualIndex + 1}`} className="news-item-link">
                  阅读更多
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
