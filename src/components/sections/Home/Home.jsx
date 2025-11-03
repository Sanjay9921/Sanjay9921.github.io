// src/components/sections/Home/Home.jsx

import React from 'react';
import cv from '../../../assets/files/cv.pdf';
import style from './Home.module.css';

// Components
import DownloadButton from '../../common/UI/Buttons/DownloadButton/DownloadButton'

function Home() {
  return (
    <section id="Home" className={style.home}>
      {/* Flex container for two panels */}
      <div className={style['home-inner']}>
        {/* Left: Who am I */}
        <header className={style['home-content']}>
          <h1>Hi, this is Sanjay Prabhu Kunjibettu</h1>
          <p>A.I. Researcher | Data Scientist | Ryan Gosling Movie Enjoyer</p>
          <a
            href={cv}
            download="cv-PDF-document"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV PDF"
          >
            <DownloadButton>Download CV</DownloadButton>
          </a>
        </header>

        {/* Right: Brief Introduction */}
        <aside className={style['home-intro']}>
          <h3 className={style['intro-title']}>Get to know me!</h3>
          <div className={style['intro-text']}>
            <p>
              I'm passionate about turning buzzwords like machine learning, deep learning, and generative AI into real-world impact.
              With hands-on experience from corporate projects to research labs, I thrive at the intersection of data science and ambitious ideas.
            </p>
            <p>
              My goal: help advance ethical AI and contribute to innovations that turn technology into a force for good. While my sense of humor is legendary (or so I've been told), I promise to keep this site professional.
            </p>
            <p>
              This portfolio is crafted from scratch (with a little help from GenAI tools). If you think we'd make an awesome team, get in touch: I'm open to collaborations and new AI research adventures!
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Home;