import Navbar from './pages/Navbar'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRouter from './router';
import { useEffect } from 'react';
import { menu } from '@/constants';

interface MenuItem {
  name: string;
  link?: string;
  title?: string;
  children?: MenuItem[];
}

function findTitleByPath(menuArr: MenuItem[], path: string): string | undefined {
  for (const item of menuArr) {
    if (item.link === path && item.title) return item.title;
    if (item.children) {
      const found = findTitleByPath(item.children, path);
      if (found) return found;
    }
  }
  return undefined;
}

function TitleUpdater() {
  const location = useLocation();
  useEffect(() => {
    const title = findTitleByPath(menu, location.pathname) || '佩蒂官网网站';
    document.title = title;
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <div className="min-h-screen min-w-screen bg-gray-100 pt-12 w-full flex flex-col">
        <Navbar />
        <main className="w-full py-8">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  )
}
