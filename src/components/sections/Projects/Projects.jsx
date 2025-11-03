// src/components/sections/Projects/Projects.jsx

import React from 'react';
import style from './Projects.module.css';

// import components
import IconButton from '../../common/UI/Buttons/IconButton/IconButton';

// import icons
import { AiFillGithub} from "react-icons/ai";

//import images
import License from '../../../assets/images/license.jpg';
import WallE from '../../../assets/images/walle.jpg';
import AnimeRec from '../../../assets/images/anime.jpeg';
import ClothingClassifier from '../../../assets/images/clothing.jpg';
import FaceMask from '../../../assets/images/facemask.jpg';
import Lidar from '../../../assets/images/lidar.jpg';

function Projects() {

const projects = [
	{
		name: 'Lyft-LIDAR-Autonomous-Driving-Object-Classification',
		github: 'https://github.com/Sanjay9921/Lyft-LIDAR-Autonomous-Driving-Object-Classification',
		description: 'This project investigates 3D object classification using LiDAR point cloud data from the Lyft Level 5 autonomous driving dataset. Detailed analyses are performed to visualize and compare bounding box attributes across multiple object classes, revealing structured spatial patterns, pronounced class separability, and realistic spatial properties. These insights support dataset quality assurance and inform robust model development for autonomous vehicle perception systems.',
		image: Lidar
	},
	{
		name: `Automatic Number Plate Recognition using OpenCV and PyTorch`,
		github: 'https://github.com/Sanjay9921/Automatic-Number-Plate-Recognition',
		description: "This project implements a deep learning pipeline for automatic number plate detection using OpenCV for preprocessing and PyTorch for model development, training, and inference. It includes all code for loading annotated datasets, preprocessing images and labels, training a bounding box regression model, and visualizing results on test images.",
		image: License
	},
	{
		name: 'Face Mask Detection using PyTorch',
		github: 'https://github.com/Sanjay9921/Face-Mask-Detection',
		description: 'This repository presents a research-focused, end-to-end deep learning pipeline for object detection, using face mask classification as a case study. It aims to deepen understanding of (1). Manual implementation versus transfer learning approaches with ResNet34 (2). Effects of data characteristics (class imbalance, bounding box dimensions) on model performance (3). Statistics-driven EDA, model evaluation, and interpretability techniques in PyTorch',
		image: FaceMask
	},
	{
		name: 'Datacamp Project Clothing Classifier',
		github: 'https://github.com/Sanjay9921/DataCamp-Project-Clothing-Classifier',
		description: 'Transform the retail industry with cutting-edge AI: develop an innovative clothing classification system to create a smarter, more efficient shopping experience. Leveraging machine learning, you’ll make it easier to find the perfect outfit among a variety of choices, opening up new possibilities in the rapidly evolving digital fashion world.',
		image: ClothingClassifier
	},
	{
		name: 'Context-Aware PDF Question Answering with LLMs',
		github: 'https://github.com/Masterarbeit-MBM-HFT/Context-Aware-RAG-Chatbot',
		description: 'This project is a context-aware question answering system built on top of large language models (LLMs). It allows users to upload PDF documents and then ask natural language questions about the document’s content. The system uses advanced embedding and retrieval techniques to provide accurate, contextually relevant answers.',
		image: WallE
	},
	{
		name: 'Anime Recommendation Application using React and Django',
		github: 'https://github.com/Sanjay9921/Anime-Recommendation-Application',
		description: 'This project is a middleware-powered application designed to recommend anime based on user preferences. It is inspired by modern web technologies and implements a full-stack solution with a Django backend and a React+VITE frontend.',
		image: AnimeRec
	},
]
	
  return (
    <>
	<div id='Projects' className={style.projects}>
		<div className={style.container}>
			<h2 className={style.title}>Projects</h2>
			<p>A list of professional and academic projects specializing in Deep Learning, Data Science, Generative AI and Full Stack.</p>
			<div className={style["projects-list"]}>
				{
					projects.map((project, index) => {
						return <div key={`project${index}`} className={style.project}>
							<div className={style["project-image"]}>
								<img src={project.image} alt="Project Image" />
							</div>
							<div className={style["project-info"]}>
								<h3>{project.name}</h3>
								<p>{project.description}</p>
								<div className={style["project-buttons"]}>
									<IconButton
										width="100px"
										height="50px"
										backgroundColor="black"
										color="white"
										link={project.github}
										icon={<AiFillGithub size="25px" color='white' />}
									>
										Github
									</IconButton>
								</div>
							</div>
						</div>
					})
				}
			</div>
		</div>
	</div>
	</>
  );
}

export default Projects;
