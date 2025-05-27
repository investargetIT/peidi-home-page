import React from 'react';
import './index.less';

interface BannerContainerProps {
  bannerImage: string;
  title: string;
}

export default function BannerContainer({ bannerImage, title }: BannerContainerProps) {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="banner" className="banner-image" />
      <div className="banner-overlay">
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
}
