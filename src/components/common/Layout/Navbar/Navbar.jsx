// src/components/common/Layout/Navbar/Navbar.jsx

import React, { useState } from 'react';
import style from './Navbar.module.css';

function NavbarLayout() {
  const [menu, setMenu] = useState(false);

  const menuItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" },
  ];

  const toggleMenu = () => setMenu(prev => !prev);

  return (
    <>
      <nav className={style.nav} role="navigation" aria-label="Main navigation">
        <a href="#Home" className={style.logo} aria-label="Homepage">
          <div style={{ color: 'var(--primary-main)', fontSize: '30px' }}>
            <h5>Sanjay Prabhu Kunjibettu</h5>
          </div>
        </a>

        <ul>
          {menuItems.map(item => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className={style["menu-icon"]}>
          <input
            id="checkbox"
            className={style.checkbox2}
            type="checkbox"
            checked={menu}
            onChange={toggleMenu}
            aria-expanded={menu}
            aria-controls="mobile-menu"
          />
          <label
            className={`${style.toggle} ${style.toggle2}`}
            htmlFor="checkbox"
            aria-label="Toggle menu"
          >
            <div className={`${style.bars} ${style.bar4}`}></div>
            <div className={`${style.bars} ${style.bar5}`}></div>
            <div className={`${style.bars} ${style.bar6}`}></div>
          </label>
        </div>
      </nav>

      {menu && (
        <ul id="mobile-menu" className={style.menu}>
          {menuItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenu(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default NavbarLayout;