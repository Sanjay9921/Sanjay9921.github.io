// src/components/sections/About/About.jsx

import React from 'react';

// import icons
import style from "./About.module.css"

// import icons
import { FaPython, FaReact } from "react-icons/fa";
import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { SiPytorch, SiFlask, SiPostman, SiOpencv, SiDatabricks, SiHuggingface } from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";

function About() {
	const tech_skills = [
	{
		name: 'Python',
		icon: <FaPython size="25px" color="white" />,
		cssName: "python"
	},
	{
		name: 'Java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'PyTorch',
		icon: <SiPytorch size="25px" color="white" />,
		cssName: "pytorch"
	},
	{
		name: 'OpenCV',
		icon: <SiOpencv size="25px" color="white" />,
		cssName: "opencv"
	},
	{
		name: 'REST API',
		icon: <SiPostman size="25px" color="white" />,
		cssName: "postman"
	},
	{
		name: 'Flask',
		icon: <SiFlask size="25px" color="white" />,
		cssName: "flask"
	},
	{
		name: 'Databricks',
		icon: <SiDatabricks size="25px" color="white" />,
		cssName: "databricks"
	},
	{
		name: 'Large Language Models',
		icon: <SiHuggingface size="25px" color="white" />,
		cssName: "huggingface"
	},
	{
		name: 'SQL',
		icon: <BiLogoPostgresql size="25px" color="white" />,
		cssName: "postgresql"
	},
	{
		name: 'Azure',
		icon: <VscAzure size="25px" color="white" />,
		cssName: "azure"
	},
	{
		name: 'Power BI',
		icon: <VscAzure size="25px" color="white" />,  // Power BI yellow color
		cssName: "powerbi"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'Visual Studio Code',
		icon: <VscVscode size="25px" color="white" />,
		cssName: "vscode"
	},
];

const lang_skills = [
	{
		name: 'English (C1)'
	},
	{
		name: 'German (A2.2)'
	},
	{
		name: 'Hindi'
	},
	{
		name: 'Konkani'
	},
];

  return (
      <>
	  <div id='About' className={style.about}>
		<div className={style.container}>
			<h2 className={style.title}>About Me</h2>
			<p>A humble introduction about myself from me. To you.</p>
			<div className={style["about-content"]}>
				<div className={style["about-info"]}>
					<h3>Get to know me!</h3>
					<p>
						Data. Big Data. Machine Learning. Deep Learning. Generative A.I. Data Science.
						The list will go on but the they won't just remain buzzwords when you work with me. I love to learn, practice, experiment and produce results in these domains through my experience in corporate and projects.
						I am eager to dive deeper into ethical A.I. research to help turn it from a bane to a boon. I do have a naturally gifted humor but I have been advised to make this website professional.
						
						I welcome you to check this portfolio website which I assure you that I built from scratch (maybe, a bit of advice from GenAI tools).
						Contact me if you think I would be a good fit as I am open to opportunities to work as an A.I. Researcher !
					</p>
				</div>
				<div className={style["my-skill"]}>
					<h3>Technical Skills</h3>
					<div className={style.skills}>
						{
							tech_skills.map((tech_skill, index) => {
								return <div key={`tech_skill${index}`} className={`${style.skill} ${style[tech_skill.cssName]}`}>
									<div className={style["skill-name"]}>{tech_skill.name}</div>
									<div className={style["skill-icon"]}>{tech_skill.icon}</div>
								</div>
							})
						}
					</div>
					<br/><br/>
					<h3>Spoken Languages</h3>
					<div className={style.skills}>
						{
							lang_skills.map((lang_skill, index) => {
								return <div key={`lang_skill${index}`} className={`${style.skill} ${style[lang_skill.cssName]}`}>
									<div className={style["skill-name"]}>{lang_skill.name}</div>
									<div className={style["skill-icon"]}>{lang_skill.icon}</div>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	</div>
	  </>
  );
}

export default About;