import React, { useState } from 'react';
import peidiLogo from '@/assets/peidi.webp';
import { Link } from 'react-router-dom';
import { menu } from '@/constants';
import './index.less';

// 添加类型定义
interface MenuItem {
  name: string;
  link: string;
  children?: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  link: string;
}

const languages = [
  { label: '中文简体', value: 'zh' },
  { label: 'English', value: 'en' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState('zh');

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={peidiLogo} alt="Peidi Logo" />
          </div>
          {/* 菜单 */}
          <div className="navbar-menu">
            <div className="navbar-menu-items">
              {menu.slice(0, -1).map((item: MenuItem) =>
                item.children ? (
                  <div key={item.name} className="navbar-dropdown">
                    <button
                      className="navbar-dropdown-btn"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`navbar-dropdown-menu ${openDropdown === item.name ? 'active' : ''}`}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((sub: SubMenuItem) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          className="navbar-dropdown-item"
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
                    className="navbar-link"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* 右侧功能区 */}
          <div className="navbar-actions">
            {/* 语言切换 */}
            <div className="language-selector">
              <button className="language-btn">
                <svg className="language-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
                <span className="language-text">{languages.find(l => l.value === lang)?.label}</span>
                <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="language-dropdown">
                {languages.map(l => (
                  <button
                    key={l.value}
                    onClick={() => setLang(l.value)}
                    className="language-option"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
            {/* 联系我们按钮 */}
            <a
              href="/contact-us"
              className="contact-btn"
            >
              联系我们
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="mobile-menu-toggle">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle-btn"
            >
              <span className="mobile-menu-icon"></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu">
            {menu.map((item: MenuItem) =>
              item.children ? (
                <div key={item.name} className="mobile-dropdown">
                  <button
                    className="mobile-dropdown-btn"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <svg
                      className={`mobile-dropdown-icon ${openDropdown === item.name ? 'active' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.name && (
                    <div className="mobile-submenu">
                      {item.children.map((sub: SubMenuItem) => (
                        <Link
                          key={sub.name}
                          to={sub.link}
                          className="mobile-submenu-item"
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
                  className="mobile-menu-item"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Language Switch */}
            <div className="mobile-language">
              <div className="mobile-language-selector">
                <span className="mobile-language-label">语言：</span>
                <select
                  value={lang}
                  onChange={e => setLang(e.target.value)}
                  className="mobile-language-select"
                >
                  {languages.map(l => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* 联系我们按钮 */}
            <Link to="/contact-us" className="mobile-contact-btn" onClick={() => setMobileOpen(false)}>
              联系我们
            </Link>
          </div>
        )}
      </nav>
      <div className="header-spacer"></div>
    </>
  );
}