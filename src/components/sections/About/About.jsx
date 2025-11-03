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

const education = [
  {
    year: 'Mar 2024 – Sep 2025',
    degree: 'M.Sc. Software Technology, Hochschule für Technik Stuttgart, Stuttgart, Germany',
    details: 'Specialization in Computer Vision'
  },
  {
    year: 'Jul 2017 – Jul 2021',
    degree: 'B.Tech Computer Science Engineering, Manipal University, Manipal, India',
    details: 'Specialization in Artificial Intelligence'
  }
];

const experience = [
  {
    year: 'Apr 2025 – Sep 2025',
    title: 'A.I. Researcher | Master Thesis',
    place: 'Mercedes-Benz Mobility AG, Germany',
    details: 'Topic: AI-Driven Corporate Workflows: Leveraging Low-Cost LLMs and Machine Learning for Insightful Business Decisions'
  },
  {
    year: 'Jun 2024 – Mar 2025',
    title: 'Business Intelligence and Data Quality Analyst | Werkstudent',
    place: 'Mercedes-Benz Mobility AG, Germany',
    details: 'Devised solutions using Python, SQL, Azure Databricks and Microsoft Office tools to help analysts improve workflow outputs and efficiencies in quality testing.'
  },
  {
    year: 'Feb 2021 – Feb 2024',
    title: 'Framework Engineer (Big Data)',
    place: 'Quantiphi Analytics, India',
    details: 'Devised solutions using Python, SQL, AWS S3, Power BI, Tableau and Microsoft Office tools to help global clients in B.I. and Data Science requirements'
  }
];

function About() {
  return (
    <section id='About' className={style.about}>
      <div className={style.container}>
        <h2 className={style.title}>About Me</h2>
        <div className={style["about-content"]}>
          <div className={style["qualifications-left"]}>
            <h3>Education</h3>
            <ul className={style["timeline"]}>
              {education.map((edu, idx) => (
                <li key={`edu${idx}`}>
                  <span className={style["timeline-year"]}>{edu.year}</span>
                  <span className={style["timeline-title"]}>{edu.degree}</span>
                  <span className={style["timeline-details"]}>{edu.details}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style["qualifications-right"]}>
            <h3>Professional Experience</h3>
            <ul className={style["timeline"]}>
              {experience.map((exp, idx) => (
                <li key={`exp${idx}`}>
                  <span className={style["timeline-year"]}>{exp.year}</span>
                  <span className={style["timeline-title"]}>{exp.title}, {exp.place}</span>
                  <span className={style["timeline-details"]}>{exp.details}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style["skills-section"]}>
          <h3>Technical Skills</h3>
          <div className={style.skills}>
            {
              tech_skills.map((tech_skill, index) => (
                <div key={`tech_skill${index}`}
                  className={`${style.skill} ${style[tech_skill.cssName]}`}
                >
                  <div className={style["skill-name"]}>{tech_skill.name}</div>
                  <div className={style["skill-icon"]}>{tech_skill.icon}</div>
                </div>
              ))
            }
          </div>
          <h3>Languages</h3>
          <div className={style.skills}>
            {
              lang_skills.map((lang_skill, index) => (
                <div key={`lang_skill${index}`} className={style.skill}>
                  <div>{lang_skill.name}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;