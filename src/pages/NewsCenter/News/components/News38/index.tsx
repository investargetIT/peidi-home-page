import './index.less';
import Image1 from './images/image1.png';

export default function News38() {
  return (
    <div className="news-container">
      <div className="news-content">
        <div className="news-image-wrapper">
          <img src={Image1} alt="佩蒂公司总部" />
        </div>
        <div className="news-text">
          <p>
            为进一步筑牢资本市场投资者保护防线，营造清朗有序的金融网络环境，佩蒂股份2026年“3・15”投资者保护教育宣传专项活动正式拉开帷幕。本次活动以“清朗金融网络，守护安心投资”为主题，一手弘扬正能量，一手筑牢风险线，全方位守护投资者合法权益。
          </p>
        </div>
        <h3 className="news-subtitle">警惕金融网络乱象，筑牢资产安全防线</h3>
        <div className="news-text">
          <p>
            当前，金融网络诈骗、非法荐股、虚假信息等乱象频发，严重侵害投资者利益。本次活动将重点开展风险提示与法治宣教：
          </p>
          <p>
            <span style={{ fontWeight: 'bold', color: '#024190' }}>·风险警示：</span>
            揭露“内幕消息”“稳赚不赔”“高收益无风险”等诈骗套路，提醒投资者警惕网络直播荐股、虚拟货币交易、场外配资等陷阱。
          </p>
          <p>
            <span style={{ fontWeight: 'bold', color: '#024190' }}>·法治科普：</span>
            解读《证券法》《期货和衍生品法》等核心法规，普及投资者维权途径与流程，帮助投资者明晰权利边界、学会用法律武器保护自身财产安全。
          </p>
          <p>
            <span style={{ fontWeight: 'bold', color: '#024190' }}>·理性投资引导：</span>
            倡导“长期投资、价值投资、理性投资”理念，提醒投资者摒弃投机心态，警惕盲目跟风，树立
            “收益自享、风险自担” 的正确认知。
          </p>
          <p>
            佩蒂股份在此倡议：让我们携手抵制金融网络乱象，弘扬理性投资文化，共建清朗有序、充满正能量的资本市场环境，让每一份投资都安心、放心！{' '}
          </p>
          <p>
            投资小贴士：不轻信、不盲从、不透露、不转账，遇到可疑金融活动及时向监管部门或公安机关举报！
          </p>
        </div>
      </div>
    </div>
  );
}
