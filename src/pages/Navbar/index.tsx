import React, { useState } from 'react';
import peidiLogo from '@/assets/peidi.webp';
import { Link } from 'react-router-dom';
import { menu } from '@/constants';

const languages = [
  { label: '中文简体', value: 'zh' },
  { label: 'English', value: 'en' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState('zh');

  return (
    <nav className="bg-[#0a3c7d] text-white w-full z-50 fixed top-0 left-0 h-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center h-12">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center select-none mr-8 h-8 ">
          <img src={peidiLogo} alt="Peidi Logo" className="h-8 w-auto object-contain " />
        </div>
        {/* 菜单 */}
        <div className="md:flex flex-1 items-center">
          <div className="flex flex-nowrap gap-x-4">
            {menu.slice(0, -1).map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button
                    className="px-2 py-1 rounded font-medium text-base text-white whitespace-nowrap bg-transparent hover:text-blue-200 transition-colors flex items-center focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0"
                    style={{ background: 'transparent', color: '#fff' }}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <svg className="inline w-3 h-3 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-1 w-36 bg-[#0a3c7d] text-white rounded-sm transition-all duration-150 z-20 ${openDropdown === item.name ? 'block' : 'hidden'}`}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.link}
                        className="block px-4 py-1 hover:text-blue-200 text-sm"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.link}
                  className="px-2 py-1 rounded font-medium text-base hover:text-blue-200 transition-colors whitespace-nowrap"
                  style={{ color: '#fff' }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
        {/* 右侧功能区 */}
        <div className="md:flex items-center space-x-2 ml-8">
          {/* 语言切换 */}
          <div className="relative group">
            <button className="flex items-center px-2 py-1 rounded hover:bg-[#1856a3] whitespace-nowrap bg-transparent text-white" style={{ background: 'transparent', color: '#fff' }}>
              <svg className="w-4 h-4 mr-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
              <span className="mr-1 text-sm font-medium whitespace-nowrap" style={{ color: '#fff' }}>{languages.find(l => l.value === lang)?.label}</span>
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute right-0 mt-1 w-24 bg-[#0a3c7d] text-white rounded-sm z-20 hidden group-hover:block">{languages.map(l => (<button key={l.value} onClick={() => setLang(l.value)} className="block w-full text-left px-4 py-1 hover:text-blue-200 text-sm">{l.label}</button>))}</div>
          </div>
          {/* 联系我们按钮 */}
          <a
            href="/contact-us"
            className="ml-2 px-4 py-1 rounded bg-white text-[#0a3c7d] hover:bg-[#0a3c7d] hover:text-white transition text-sm font-semibold"
            style={{ minWidth: '90px', textAlign: 'center' }}
          >
            联系我们
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white focus:outline-none"
          >
            联系我们
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a3c7d] px-4 pb-4 pt-2 space-y-1">
          {menu.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  className="w-full text-left px-4 py-2 rounded hover:bg-[#1856a3] flex justify-between items-center text-base font-medium"
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                >
                  {item.name}
                  <svg className={`w-4 h-4 ml-2 transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === item.name && (
                  <div className="pl-4">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.link}
                        className="block px-4 py-2 hover:bg-blue-100 text-white text-base"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.link}
                className="block px-4 py-2 rounded hover:bg-[#1856a3] text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
          {/* Language Switch */}
          <div className="mt-2">
            <div className="flex items-center">
              <span className="mr-2">语言：</span>
              <select
                value={lang}
                onChange={e => setLang(e.target.value)}
                className="bg-[#0a3c7d] border border-white rounded text-white px-2 py-1"
              >
                {languages.map(l => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>
          </div>
          {/* 联系我们按钮 */}
          <Link to="/contact-us" className="block mt-2 px-5 py-2 border border-white rounded bg-white text-[#0a3c7d] hover:bg-[#0a3c7d] hover:text-white transition text-center text-base font-semibold" onClick={() => setMobileOpen(false)}>联系我们</Link>
        </div>
      )}
    </nav>
  );
} 