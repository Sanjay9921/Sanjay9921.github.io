// src/components/common/Footer/Footer.jsx


import React from 'react'
import style from './Footer.module.css';
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail} from "react-icons/bi";
import { BsFacebook} from "react-icons/bs";


function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style["footer-info"]}>
          <div>
            <h3>ibrahim hiarea</h3>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className={style.social}>
            <h3>Social</h3>
            <div>
              <a className={style.git} target="_blank" rel="noopener noreferrer" href='https://github.com/IbrahimHiarea'>
                <AiFillGithub size="30px" color='white' />
              </a>
              <a className={style.linkedin} target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ibrahim-hiarea/'>
                <AiFillLinkedin size="30px" color='white' />
              </a>
              <a className={style.gmail} target="_blank" rel="noopener noreferrer" href="mailto:ibrahimhiarea2@gmail.com?subject=SendMail&body=Description">
                <BiLogoGmail size="30px" color='white' />
              </a>
              <a className={style.facebook} target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/ibrahim.hiarea'>
                <BsFacebook size="30px" color='white' />
              </a>
            </div>
          </div>
        </div>
        <div className={style["copy-right"]}>
          © Copyright 2023. Made by <span>Ibrahim Hiarea</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;