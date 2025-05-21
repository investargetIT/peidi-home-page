import { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ODM from './Cooperation';
import Cooperation from './ODM';
import SolutionBanner from './images/cooperation.jpg';
import './index.less';

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState('solution');

  const items: TabsProps['items'] = [
    {
      key: 'odm',
      label: 'ODM',
      children: <ODM />,
    },
    {
      key: 'cooperation',
      label: '合作',
      children: <Cooperation />,
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
        onChange={(key) => setActiveTab(key)}
        centered
      />
    </div>
  );
}
