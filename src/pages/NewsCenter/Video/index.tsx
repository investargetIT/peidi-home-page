import './index.less';
import BannerContainer from '@/components/BannerContainer';
import Banner from './images/banner.webp';
export default function Video() {
  const videoList = [
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/88497bf71018772300497649.mp4?width=1280&height=720',
      title: '佩蒂成立30周年',
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/a0b11b721008597875286728.mp4?width=1280&height=720',
      title: '新西兰KCPF品牌  ',
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/44a1ad471008597875286746.mp4?width=1920&height=1080',
      title: 'Meatyway 鸭肉原生风干狗粮',
    },
    {
      src: '//media.cdn.ishopastro.com/764222003171040/media/video/2f9ceb4a1013546935906276.mp4?width=1920&height=1080',
      title: 'Meatyway 美食罐头 ',
    },
  ];

  return (
    <div className="video-page">
      <BannerContainer bannerImage={Banner} title="企业视频" />
      <div className="video-content">
        {videoList.map(item => (
          <div className="video-item" key={item.src}>
            <video src={item.src} controls controlsList="nodownload" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
