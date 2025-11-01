// src/components/sections/Home/Home.jsx

import React, { useEffect, useState } from 'react';
import DownloadButton from '../../components/DownloadButton/DownloadButton'
import cv from '../../../assets/files/cv.pdf';
import style from './Home.module.css';

// import icons
import { FaKaggle } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDatacamp } from "react-icons/si";

function Home() {
  return (
    <>
	<div id='Home' className={style.home}>
		<div className={style["home-content"]}>
			<h1>Hi, this is Sanjay Prabhu Kunjibettu</h1>
			<p>A.I. Researcher | Data Scientist | Ryan Gosling Movie Enjoyer</p>
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
			<a className={style.github} target="_blank" href='https://github.com/Sanjay9921' >
				<AiFillGithub size="30px" color='black' />
			</a>
			<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/sanjay-prabhu-k/' >
				<AiFillLinkedin size="30px" color='black' />
			</a>
			<a className={style.kaggle} target="_blank" href="https://www.kaggle.com/sanjayprabhuk" >
				<FaKaggle size="30px" color='black' />
			</a>
			<a className={style.datacamp} target="_blank" href="https://www.datacamp.com/portfolio/sanjayprabhu1729" >
				<SiDatacamp size="30px" color='black' />
			</a>
		</div>
	</div>
	</>
  );
}

export default Home;
