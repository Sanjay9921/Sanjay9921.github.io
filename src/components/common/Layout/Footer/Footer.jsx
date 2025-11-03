// src/components/common/Layout/Footer/Footer.jsx

import React from 'react';
import style from './Footer.module.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaKaggle } from "react-icons/fa";
import { SiDatacamp } from "react-icons/si";

const socialLinks = [
  { href: 'https://github.com/Sanjay9921', icon: <AiFillGithub size={30} />, label: 'github' },
  { href: 'https://www.linkedin.com/in/sanjay-prabhu-k/', icon: <AiFillLinkedin size={30} />, label: 'linkedin' },
  { href: 'https://www.kaggle.com/sanjayprabhuk', icon: <FaKaggle size={30} />, label: 'kaggle' },
  { href: 'https://www.datacamp.com/portfolio/sanjayprabhu1729', icon: <SiDatacamp size={30} />, label: 'datacamp' }
];

function FooterLayout() {
  return (
    <footer className={style.footer} aria-label="Site Footer">
      <div className={style.container}>
        <div className={style["footer-info"]}>
          <div>
            <h3 className={style.name}>Sanjay Prabhu Kunjibettu</h3>
            <p className={style.role}>
              Contact me if you feel I am a good fit for a research-based role in Deep Learning, A.I., and Data Science.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className={style.social}>
            <h3>Social</h3>
            <div className={style.socialLinks}>
              {socialLinks.map(({ href, icon, label }) => (
                <a 
                  key={href}
                  className={style[label.toLowerCase()]}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  title={label}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={style["copy-right"]}>
          © 2025 <span>Sanjay Prabhu Kunjibettu</span>. This project was inspired by the portfolio template created by{' '}
          <span>
            <a href="https://github.com/IbrahimHiarea/portfolio" target="_blank" rel="noopener noreferrer">
              Ibrahim Hiarea
            </a>
          </span>. Special thanks for the original design and ideas that helped shape this work.
        </div>
      </div>
    </footer>
  );
}

export default FooterLayout;