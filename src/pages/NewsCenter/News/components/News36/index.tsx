import './index.less';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.png';
import Image3 from './images/image3.png';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.png';

export default function News36() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-text">
          <p>
            11月5日至10日，第八届中国国际进口博览会在上海国家会展中心正式拉开帷幕。本届进博会共吸引155个国家、地区和国际组织参与，4108家境外企业参展，整体展览面积超43万平方米，规模再创新高。另外，本届进博会还首次设立宠物主题展区，以创新展陈模式和丰富互动体验，为观众呈现人宠和谐共处的品质生活新方式。其中，中国宠物行业第一家上市企业佩蒂股份携Smart
            Balance悦佰思亮相展会，向全球展示来自新西兰的优质宠粮。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image1} alt="佩蒂公司总部" />
          <span>
            左一为新西兰驻华大使乔文博（Jonathan Austin），右三为新西兰贸易部长麦克莱（Todd McClay）
          </span>
        </div>
        <div className="news-text">
          <p>
            展会期间，新西兰贸易部长麦克莱（Todd McClay）、新西兰驻华大使乔文博（Jonathan
            Austin）莅临Smart
            Balance悦佰思展台，详细了解产品以及背后的研发历程，并与品牌负责人进行了亲切交流。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image2} alt="佩蒂公司总部" />
          <span>
            左为新西兰驻华大使乔文博（Jonathan Austin），右为Smart Balance悦佰思品牌负责人贾寅先生
          </span>
        </div>
        <div className="news-text">
          <p>
            本次展会，Smart
            Balance悦佰思展示了猫狗主粮系列以及猫狗罐头系列产品，包括新西兰草饲牛肉、新西兰草饲羊肉、新西兰走地鸡、新西兰鳕鱼、新西兰鲭鱼&三文鱼等多种配方。每种配方都提供了均衡、健康的膳食，符合宠物生物特性的饮食，富含必需的营养成分，助力猫狗达到最佳健康状态和幸福生活。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image3} alt="佩蒂公司总部" />
        </div>
        <div className="news-image-wrapper">
          <img src={Image4} alt="佩蒂公司总部" />
        </div>
        <div className="news-text">
          <p>
            新西兰作为全球知名的农牧大国，其牛羊均为草饲、鱼类源自纯净无污染的南太平洋海域，在全球认可度较高。Smart
            Balance悦佰思旗下产品均采用新西兰原材料，从源头保证了宠物食品的高品质。
          </p>
        </div>
        <div className="news-image-wrapper">
          <img src={Image5} alt="佩蒂公司总部" />
        </div>
        <div className="news-text">
          <p>
            新新西兰产线是佩蒂股份近年来最核心的战略布局之一，共有4万吨主粮产线，也是新西兰比较稀缺的主粮产能。目前，该产线已完成了公司的管理体系认证和多国官方的注册或审核，自主品牌的产品也将进入中国及海外市场销售，同时也能为全球知名品牌提供ODM生产。新西兰商业化大运营后，也将成为佩蒂股份未来主要的增长点。
          </p>
        </div>
      </div>
    </div>
  );
}
