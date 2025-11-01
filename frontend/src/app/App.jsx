import React from 'react';

// import style
import style from './App.module.css';

// import sections
import Navbar from '../common/components/Navbar/Navbar'
import Home from '../common/sections/Home/Home'
import About from '../common/sections/About/About'
import Projects from '../common/sections/Projects/Projects'
import Contact from '../common/sections/Contact/Contact'
import Footer from '../common/components/Footer/Footer'


function App() {
	return (
		<div className={style.app}>
			{/* Navbar */}
			<Navbar/>

			{/* Home */}
			<Home/>

			{/* About */}
			<About/>

			{/* Projects */}
			<Projects/>

			{/* Contact */}
			<Contact/>

			{/* footer */}
			<Footer/>
		</div>
	);
}

export default App;