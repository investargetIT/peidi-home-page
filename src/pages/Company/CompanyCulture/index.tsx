import React, { useEffect, useState } from 'react';
import Banner from './images/banner.webp';
import './index.less';
import NewFooterNav from '@/components/NewFooterNav';
import CopyrightFooter from '@/components/CopyrightFooter';
import BannerContainer from '@/components/BannerContainer';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image4 from './images/4.webp';
export default function CorporatePhilosopy() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;

  return (
    <div className="philosophy-page">
      <BannerContainer bannerImage={Banner} title="关于佩蒂——企业文化" />

      <div className="philosophy-content">
        <div className="philosophy-header">
          <h2 className="philosophy-title">30多年来致力于全球宠物健康</h2>
          <p className="philosophy-subtitle">
            30 多年来佩蒂为全球各地的宠物主创造了数千种最畅销的产品。
          </p>
          <p className="philosophy-main-text">
            佩蒂成立于1992年，专注于围绕宠物健康建立科学食品体系，始终坚持用全球好产品不断推动宠物行业健康标准升级。30多年来，佩蒂一直担当全球宠物市场健康升级的助推器，为全球顶级宠物食品公司和宠物主打造了数以千计热销的健康产品。现在，佩蒂希望能赋能中国宠物行业健康升级，充分利用其在全球积累的研发优势、生产优势以及海外优质品牌服务中国市场，全面启动在宠物领域的布局，旨在成为中国第一的宠物健康生态集团。
          </p>
          <div className="philosophy-image">
            <img src={Image1} alt="人与宠物的温馨互动" />
          </div>
        </div>

        <div className="philosophy-header">
          <h2 className="philosophy-title">董事长寄语</h2>
          <p className="philosophy-subtitle">爱心事业，『信』者无疆</p>
          <p className="philosophy-main-text">
            "做人讲究的是信用，办企业也一样。"
            诚信为本，创新是源，有本有源才能使企业的良性发展成为必然。
            中华堂堂礼仪之邦，向来有"重信用、讲诚信"的优良传统。古人有"重然诺，轻生死"之说，其意就是不轻易对人许诺，但一经许诺，就要坚守信用，甚至于能将生死置之度外。
          </p>
        </div>

        <div className="philosophy-container">
          <div className="philosophy-image">
            <img src={Image2} alt="人与宠物的温馨互动" />
          </div>
          <div className="philosophy-text-content">
            <div className="philosophy-values">
              <p>
                正如孔子先圣所言："人而无信，不知其可也。"
                事业从无坦途，成功须靠拼搏。企业的道德首先是和诚信相连，生产经营与道德的有机结合才能使一个企业真正成为社会所需要的力量。我们相信更多的企业，都会悟到这个发展的真谛，运用自如得法，时时存乎于心。佩蒂企业一路走过的昨天、今天以及明天，正是基于所倡导的"服务社会、实现自我"的企业价值观，坚持"以诚取信，以信立业"，严格履行一个企业对社会、客户和员工应尽的义务，谋求公司与客户、公司与社会、公司与个人的和谐发展。
              </p>
            </div>
          </div>
        </div>

        <div className="philosophy-values-section">
          <p className="philosophy-values-text">
            作为拥有30年多历史的国内领先宠物食品供应商，佩蒂一直遵循"诚信、创新、发展"的经营理念，坚持以"孜求不断满足并超越客户期望"作为企业质量管理方针，严格按照国际食品法规加工生产高品质的专业宠物零食产品，增进人与宠物的彼此关爱，领跑中国的宠物爱心事业。
          </p>

          <p className="philosophy-slogan">我们相信：心存高远，未来从来不远。</p>
        </div>

        <div className="corporate-mission-section" style={{ backgroundPosition }}>
          <h2 className="mission-title">企业文化</h2>
          <div className="mission-overlay">
            <div className="mission-content">
              <div className="mission-left">
                <div className="mission-item">
                  <p className="mission-text">用全球好产品推动宠物健康标准升级的企业使命；</p>
                </div>
                <div className="mission-item">
                  <p className="mission-text">"阳光、智慧、担当、真诚"的核心价值观；</p>
                </div>
              </div>
              <div className="mission-right">
                <div className="mission-item">
                  <p className="mission-text">成为人宠和谐健康生态卓越建设者的愿景；</p>
                </div>
                <div className="mission-item">
                  <p className="mission-text">
                    "诚信、创新、发展"的经营理念以及"以诚取信，以信立业"的社会责任。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="founder-story-section">
          <h2 className="founder-story-title">创始人故事</h2>
          <div className="founder-story-content">
            <p className="founder-story-subtitle">从"改变贫穷"到"关爱宠物"——佩蒂CEPT·创始人故事</p>
            <p className="founder-story-text">
              陈振标是一个白手起家的普通人，家世背景都很普通，或许不普通的是，在文革十年中完成了
              小学至高中的教育的他，更懂得"贫乏"二字的真谛——物质的贫乏，知识的贫乏，梦想的贫乏，因此更懂得珍惜一粥一饭和每一个学习的机会。
            </p>

            <p className="founder-story-text">
              在创立佩蒂之前，他是一名教师，曾先后任教于温州平阳县萧蕙中心学校、瓯江区中和水头一中。教师的经历，让他平添了一份儒家的风度，从商之后，很多人给他冠上了"儒商"的称号。"儒"，外在的表现是书生气，但是在陈振标身上则内化为"诚信，勤奋，感恩"的做人之道。
            </p>

            <p className="founder-story-text">
              1992年，他舍去老师的工作，转身投入了一个全新的行业——宠物行业。即使现在，宠物行业
              在中国都是新兴的行业，更别提当年了，技术和人才都几乎为零，所以在公司创立之初，陈振标身兼数职，从原材料工艺试验、制作、到产品市场销售，事事都亲力亲为。他或许不是最聪明
              的人，但是他一定是最好学最善努力的人。凭着那一股干劲和坚韧，陈振标不断摸索，不断试验，每一次失败都让他离成功更近一步，慢慢地将一个量大饱饱的小作坊逐渐发展成一个有
              组织有制度的中小型企业，这其中的艰辛不是三言两语可以说得清，没有经历过的人也无法
              体会，但他很少向人提及创业的苦，更多的是谈到企业的愿景和对员工的责任。在这之中，一直贯穿始终的就是他办公司的理念——"诚信、创新、发展"。
            </p>

            <p className="founder-story-text">
              正是"诚信"为本，"创新"为术，带来了佩蒂在国际国内市场的稳步发展和良好口碑。"97年亚洲金融风暴"、"03年非典"、"05年禽流感"、"08年全球金融危机"等不利的外部环境均未阻挡佩蒂发展的步伐。2000年至今，陈振标成功引导和改变了股东、管理者和员工的整体观念，实现了
              从家族式企业向现代企业的顺利转型；公司年产值从初创时的十几万元到现在的数亿元；公司
              品牌从默默无闻到声名鹊起；公司规模发展到现在已拥有三个生产基地和一家贸易公司的企业
              格局……这样不间断且快速的发展正验证了他所相信的："发展是企业经营永恒的主题。"
            </p>

            <p className="founder-story-text">
              身为佩蒂的缔造者，陈振标先生对宠物行业是很有期待的。如果说当初进入这个行业只是怀揣着"改变贫穷"的补买卖望的话，那么现在让他坚持下去的是人与宠物之间无私的爱，深深地打动了他，让他从心底里热爱这个行业。正如他所言："我们做的是爱心事业，没有对小动物发自心底的爱和关怀，不了解动物与人相互依赖的深厚感情，这个事情是做不好的。这几年来，几乎在
              每一次公开发言的时候，陈振标都强调："要推动和引导宠物行业在中国的发展。"他认为，宠物的需求其实是跟人一样的，它们有生老病死，也有喜怒哀乐，但在某些方面它们比人类更忠诚，也更无私，应该得到更体贴的照顾，得到人类全身心的爱。
            </p>

            <p className="founder-story-text">
              现在，在佩蒂的新公司里，处处都体现了他对宠物的关爱，以及普及这种理念的用心。他希望
              每一个进入他公司的人都可以感受到，宠物是多么地可爱，人与宠物之间的感情是多么地纯粹。论释"爱"的真谛——无任何附加条件的爱，不离不弃。一个怀抱善心的民营创业者，不一定是最成功的，但一定能带领他的员工，让佩蒂获得最好的成功。
            </p>
          </div>
        </div>
        <div className="philosophy-image-full">
          <img src={Image4} alt="人与宠物的温馨互动" />
        </div>
      </div>
      {/* 页脚导航区域 */}
      <NewFooterNav />

      {/* 版权信息区域 */}
      <CopyrightFooter />
    </div>
  );
}
