// src/components/sections/Home/Home.jsx

import React from 'react';
import DownloadButton from '../../common/DownloadButton/DownloadButton';
import cv from '../../../assets/files/cv.pdf';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import style from './Home.module.css';

function Home() {
  return (
    <div id='Home' className={style.home}>
      {/* ...your Home section code as in App.jsx... */}
      <div id='Home' className={style.home}>
                    <div className={style["home-content"]}>
                        <h1>HEY, I'M Ibhrahim Hiarea</h1>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                        <a
                            href={cv}
                            download="cv-PDF-document"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DownloadButton >
                                Download CV
                            </DownloadButton>
                        </a>
                    </div>
                    <div className={style["scroll-icon"]}>
                        <div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
                            <div className={style.chevrons}>
                                <div className={style["chevron-down"]}></div>
                                <div className={style["chevron-down"]}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style["contact-nav"]}>
                        <a className={style.github} target="_blank" href='https://github.com/IbrahimHiarea' >
                            <AiFillGithub size="30px" color='black' />
                        </a>
                        <a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/ibrahim-hiarea/' >
                            <AiFillLinkedin size="30px" color='black' />
                        </a>
                        <a className={style.gmail} target="_blank" href="mailto:ibrahimhiarea2@gmail.com?subject=SendMail&body=Description" >
                            <BiLogoGmail size="30px" color='black' />
                        </a>
                        <a className={style.facebook} target="_blank" href='https://www.facebook.com/ibrahim.hiarea' >
                            <BsFacebook size="30px" color='black' />
                        </a>
                    </div>
                </div>
    </div>
  );
}

export default Home;
