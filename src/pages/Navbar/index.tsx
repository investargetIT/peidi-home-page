import React, { useState, useEffect, useRef } from 'react';
import peidiLogo from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { menu } from '@/constants';
import './index.less';

// 添加类型定义
interface SubMenuItem {
  name: string;
  link: string;
  title: string;
}

interface MenuItem {
  name: string;
  link?: string;
  title?: string;
  children?: SubMenuItem[];
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<number | null>(null);

  // Function to handle dropdown hover
  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  // Function to handle dropdown leave with delay
  const handleDropdownLeave = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing the dropdown
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

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
              {menu.map((item: MenuItem) =>
                item.children ? (
                  <div
                    key={item.name}
                    className="navbar-dropdown"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.link ? (
                      <Link to={item.link} className="navbar-dropdown-btn">
                        <span>{item.name}</span>
                        <svg
                          className="dropdown-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <button className="navbar-dropdown-btn">
                        <span>{item.name}</span>
                        <svg
                          className="dropdown-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                    <div
                      className={`navbar-dropdown-menu ${openDropdown === item.name ? 'active' : ''}`}
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
                  <Link key={item.name} to={item.link || '/'} className="navbar-link">
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* 右侧功能区 */}
          <div className="navbar-actions">
            {/* 联系我们按钮 */}
            <a href="/investor-relations" className="contact-btn">
              投资关系
            </a>
            <a
              href="https://peidigroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              全球行业业务
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="mobile-menu-toggle">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle-btn">
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
                  {item.link ? (
                    <Link to={item.link} className="mobile-dropdown-btn">
                      <span>{item.name}</span>
                      <svg
                        className={`mobile-dropdown-icon ${openDropdown === item.name ? 'active' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        onClick={e => {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === item.name ? null : item.name);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      className="mobile-dropdown-btn"
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`mobile-dropdown-icon ${openDropdown === item.name ? 'active' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
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
                  to={item.link || '/'}
                  className="mobile-menu-item"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Replace 联系我们 button with 投资关系 and 全球行业业务 buttons */}
            <Link
              to="/investor-relations"
              className="mobile-contact-btn"
              onClick={() => setMobileOpen(false)}
            >
              投资关系
            </Link>
            <a
              href="https://peidigroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-contact-btn"
              onClick={() => setMobileOpen(false)}
            >
              全球行业业务
            </a>
          </div>
        )}
      </nav>
      <div className="header-spacer"></div>
    </>
  );
}
