import { useState } from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState('overview');
  const items: TabsProps['items'] = [
    {
      key: 'solution',
      label: '资本市场综述',
      children: 'Content of Tab Pane 1',
    },
    {
      key: 'stock',
      label: '股价实时显示',
      children: 'Content of Tab Pane 2',
    },
    {
      key: 'pets',
      label: '宠物产业基金',
      children: 'Content of Tab Pane 3',
    },
    {
      key: 'market',
      label: '公司公告',
      children: 'Content of Tab Pane 3',
    },
    {
      key: 'finance',
      label: '财经类评论及新闻',
      children: 'Content of Tab Pane 3',
    },
    {
      key: 'report',
      label: '定期报告',
      children: 'Content of Tab Pane 3',
    },

    {
      key: 'investor',
      label: '投资者服务',
      children: 'Content of Tab Pane 3',
    },


  ];
  return <div>投资关系内容</div>;
}
