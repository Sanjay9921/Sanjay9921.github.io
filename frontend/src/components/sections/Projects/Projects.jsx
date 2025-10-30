// src/components/sections/Projects/Projects.jsx

import React from 'react';
import IconButton from '../../common/IconButton/IconButton';
import { AiFillGithub } from "react-icons/ai";
import style from './Projects.module.css';

function Projects({ projects }) {
  return (
    <div id='Projects' className={style.projects}>
      {/* ...your Projects section code, mapping 'projects' prop... */}
      <div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
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
    </div>
  );
}

export default Projects;
