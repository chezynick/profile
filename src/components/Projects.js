import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from './ScrollTop';
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
			<ProjectContainer>
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
			</ProjectContainer>
			{display === true ? <DetailBox projectDetail={projectDetail} displayHandler={displayHandler} /> : ''}
			<ScrollTop />
		</ProjectHolderStyle>
	);
};
export default Projects;

const ProjectHolderStyle = styled.div`
	width: 100%;
	margin: auto;
	height: auto;
	margin-top: 5%;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	padding-top: 20px;
	padding-bottom: 30px;

	@media (max-width: 800px) {
		width: 100%;
	}
	@media (max-width: 650px) {
		margin-top: 25%;
	}
	@media (max-width: 650px) {
		margin-top: 50%;
	}
`;
const ProjectContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	height: auto;
`;
const ProjectStyle = styled.div`
	width: 40%;
	margin: auto;
	padding-top: 30px;
	padding-bottom: 30px;
	margin-bottom: 30px;
	margin-top: 30px;
	height: auto;
	background-color: rgb(54, 54, 54);
	color: rgb(231, 248, 205);
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	opacity: 0;
	animation: slide 1s linear 0.3s forwards;
	@media (max-width: 800px) {
		width: 80%;
	}
	img {
		height: auto;
		width: 80%;

		padding-top: 20px;
		padding-bottom: 10px;
		margin: auto;
		@media (max-width: 800px) {
			width: 90%;

			padding-top: 5%;
		}
	}
`;
const InfoStyle = styled.div`
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding-bottom: 30px;
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
