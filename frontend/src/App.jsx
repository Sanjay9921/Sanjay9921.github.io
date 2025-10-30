// src/App.jsx

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// components
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Navbar from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: "TypeScript",
		icon: <SiTypescript size="25px" color="white" />,
		cssName: "type-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'Redux ToolKit',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Redux Recoil',
		icon: <SiRecoil size="25px" color="white" />,
		cssName: "recoil"
	},
	{
		name: 'React Query',
		icon: <SiReactquery size="25px" color="white" />,
		cssName: "react-query"
	},
	{
		name: 'RTK Query',
		icon: <BiLogoRedux size="25px" color="white" />,
		cssName: "redux"
	},
	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'java',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	{
		name: 'Global Share',
		link: 'https://ibrahimhiarea.github.io/Global-Share/#/home',
		github: 'https://github.com/IbrahimHiarea/Global-Share',
		description: 'The Global Share ERP System is an innovative web-based application designed to streamline volunteer recruitment, management, and reward systems. It incorporates task management, recruitment, and gamification features to enhance employee engagement, promote effective communication, and drive organizational excellence.'
	},
	{
		name: `Ata'a`,
		link: 'https://ibrahimhiarea.github.io/Ataa-Dashboard/',
		github: 'https://github.com/IbrahimHiarea/Ataa-Dashboard',
		description: "Ataa is a web application built with React for managing and organizing the operations of a charity organization. The application includes a landing page that provides an overview of the charity's mission and goals. Staff members of the charity can log in to the main dashboard, which allows them to manage and control the projects, employees, and beneficiaries associated with the charity. Additionally, there is a section dedicated to viewing the total budget of the charity, as well as the budget allocated to each individual project."
	},
	{
		name: 'SoKo Number',
		link: 'https://ibrahimhiarea.github.io/Soko-Number/',
		github: 'https://github.com/IbrahimHiarea/Soko-Number',
		description: 'Soko Number is a puzzle game built with the React framework. The game consists of 6 challenging levels that will test your problem-solving skills. Each level presents a grid-based puzzle where you need to move numbered tiles to their designated positions.'
	},
	{
		name: 'Leon',
		link: 'https://ibrahimhiarea.github.io/Leon/',
		github: 'https://github.com/IbrahimHiarea/Leon',
		description: 'Leon is a modern and responsive HTML and CSS design template that provides a sleek and visually appealing foundation for building stunning websites. With its clean and elegant design, Leon focuses on simplicity and exceptional user experience.'
	},
	{
		name: 'Kasper',
		link: 'https://ibrahimhiarea.github.io/Kasper/',
		github: 'https://ibrahimhiarea.github.io/Kasper/',
		description: 'Kaspar is a modern and responsive HTML and CSS design template that provides a sleek and visually appealing foundation for building stunning websites. With its clean and elegant design, Kaspar focuses on simplicity and exceptional user experience.'
	},
	{
		name: 'Elzero',
		link: 'https://ibrahimhiarea.github.io/Elzero/',
		github: 'https://github.com/IbrahimHiarea/Elzero',
		description: 'Elzero is a stylish and interactive HTML, CSS, and JavaScript design template that offers a modern and engaging user experience. With its clean code structure and well-designed components, Elzero provides a solid foundation for building dynamic and visually appealing web applications.'
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			
			<Navbar/>

			<Home/>
			<About skills={skills}/>
			<Projects projects={projects}/>
			<Contact form={form} sendEmail={sendEmail} loading={loading} />
			<Footer/>
		</div>
	);
}

export default App;