// src/components/common/Footer/Footer.jsx


import React from 'react'
import style from './Footer.module.css';
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail} from "react-icons/bi";
import { BsFacebook} from "react-icons/bs";


function Footer() {
  return (
    <>
    <div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Sanjay Prabhu Kunjibettu</h3>
							<p>A.I. Researcher | Data Scientist | Ryan Gosling Fan</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/Sanjay9921' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/sanjay-prabhu-k/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} href="mailto:sanjay.prabhu1729@gmail.com?subject=SendMail&body=Description">
									<BiLogoGmail size="30px" color='white' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Sanjay Prabhu Kunjibettu</span>
					</div>
				</div>
			</div>
    </>
  );
}

export default Footer;