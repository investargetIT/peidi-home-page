import './index.less';
import { useState, useEffect, useRef } from 'react';
import Banner1 from './images/banner1.jpg';
import Banner2 from './images/banner2.png';
import Banner3 from './images/banner3.png';

export default function BannerContent() {
  // Define banners array
  const banners = [
    { src: Banner1, alt: 'banner1' },
    { src: Banner2, alt: 'banner2' },
    { src: Banner3, alt: 'banner3' },
  ];

  // State to track current banner index
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to move to next slide
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  // Function to move to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Set up automatic slideshow with 5 second interval
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clean up on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="banner-content-wrapper">
      <div className="slider-main-container">
        {banners.map((banner, index) => (
          <div key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={banner.src} alt={banner.alt} className="slider-image" />
          </div>
        ))}

        {/* Navigation indicators */}
        <div className="slider-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
