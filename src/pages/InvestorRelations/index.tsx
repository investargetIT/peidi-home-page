import { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Solution from './Solution';
import Stock from './Stock';
import Pets from './Pets';
import Market from './Market';
import Finance from './Finance';
import Report from './Report';
import Investor from './Investor';
// import SolutionBanner from './images/solution-banner.jpg';
import SolutionBanner from './images/invest.jpg';
import './index.less';

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState('solution');

  const items: TabsProps['items'] = [
    // {
    //   key: 'solution',
    //   label: '资本市场综述',
    //   children: <Solution />,
    // },
    {
      key: 'stock',
      label: '股价实时显示',
      children: <Stock />,
    },
    // {
    //   key: 'pets',
    //   label: '宠物产业基金',
    //   children: <Pets />,
    // },
    {
      key: 'market',
      label: '公司公告',
      children: <Market />,
    },
    // {
    //   key: 'finance',
    //   label: '财经类评论及新闻',
    //   children: <Finance />,
    // },
    {
      key: 'report',
      label: '定期报告',
      children: <Report />,
    },
    {
      key: 'investor',
      label: '投资者服务',
      children: <Investor />,
    },
  ];

  return (
    <div className="investor-relations">
      <div className="solution-banner">
        <img src={SolutionBanner} alt="solution-banner" />
      </div>
      <Tabs
        items={items}
        defaultActiveKey={activeTab}
        onChange={key => setActiveTab(key)}
        centered
      />
    </div>
  );
}
