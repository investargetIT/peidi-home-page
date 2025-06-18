import './index.less';

interface BannerContainerProps {
  bannerImage: string;
  title: string;
  subTitle?: string;
}

export default function BannerContainer({
  bannerImage,
  title,
  subTitle = '',
}: BannerContainerProps) {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="banner" className="banner-image" />
      <div className="banner-overlay">
        <h1 className="banner-title">{title}</h1>
        {subTitle && <p className="banner-sub-title">{subTitle}</p>}
      </div>
    </div>
  );
}
