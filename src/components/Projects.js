import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
//import components
import DetailBox from './DetailBox';
//import array of projects
import { ProjectData } from './ProjectData';

const Projects = () => {
	const [projectDetail, setprojectDetail] = useState();
	const [display, setDisplay] = useState(false);
	const myProjects = ProjectData;
	const clickHandler = (projectName) => {
		setprojectDetail([]);
		const result = myProjects.filter((a) => a.name === projectName);
		setprojectDetail([...result]);
		setDisplay(true);
	};
	const displayHandler = () => {
		setDisplay(false);
	};

	return (
		<ProjectHolderStyle>
			<h1>My Projects</h1>
			<h3>Click each box for more details.</h3>
			{myProjects.map((a) => (
				<ProjectStyle key={a.name} onClick={() => clickHandler(a.name)}>
					<img src={a.proImg} alt="" />
					<InfoStyle>
						<h3>{a.name}</h3>
						<p>{a.brief}</p>
						<a href={a.website}>
							<FontAwesomeIcon
								style={{ marginRight: '10px' }}
								color="rgb(231,248,205) "
								icon={faExternalLinkAlt}
							/>
							Live Webpage
						</a>

						<a href={a.githubLink}>
							<FontAwesomeIcon
								style={{ marginRight: '10px' }}
								color="rgb(231,248,205) "
								icon={faGithub}
							/>
							View Code
						</a>
					</InfoStyle>
				</ProjectStyle>
			))}
			{display === true ? <DetailBox projectDetail={projectDetail} displayHandler={displayHandler} /> : ''}
		</ProjectHolderStyle>
	);
};
export default Projects;

const ProjectHolderStyle = styled.div`
	width: 80%;
	margin: auto;
	height: auto;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	padding-top: 30px;
	padding-bottom: 30px;
	@media (max-width: 800px) {
		width: 100%;
	}
`;
const ProjectStyle = styled.div`
	width: 80%;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
	min-height: 200px;
	background-color: rgb(54, 54, 54);
	color: rgb(231, 248, 205);
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
	img {
		height: auto;
		width: 80%;
		padding-left: 20px;
		@media (max-width: 800px) {
			width: 100%;
			padding-left: 0px;
		}
	}
`;
const InfoStyle = styled.div`
	width: 70%;
	height: auto;
	display: flex;
	flex-direction: column;
	text-align: left;
	padding-bottom: 20px;
	@media (max-width: 800px) {
		text-align: center;
		width: 100%;
	}
	a:link {
		color: rgb(231, 248, 205);
		text-decoration: none;
	}
	a:visited {
		color: rgb(231, 248, 205);
		text-decoration: none;
	}
`;
