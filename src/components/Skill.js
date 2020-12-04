import React from 'react';
import styled from 'styled-components';
import odin from '../images/odin.png';
import {
	faGithub,
	faCss3Alt,
	faHtml5,
	faReact,
	faJs,
	faSass,
	faNpm,
	faFigma,
	faFortAwesome,
} from '@fortawesome/free-brands-svg-icons';
import TileIcon from './TileIcon';
import ScrollTop from './ScrollTop';

const Skills = () => {
	const skillsArr = [
		{ IconName: faReact, backgrnd: 'black', maincolor: '#61dbfb', name: 'REACT' },
		{ IconName: faGithub, backgrnd: 'black', maincolor: 'white', name: 'GIT-HUB' },
		{ IconName: faCss3Alt, backgrnd: '#66d3fa', maincolor: 'white', name: 'CSS 3', pcolor: 'black' },
		{ IconName: faHtml5, backgrnd: '#f16529', maincolor: 'white', name: 'HTML 5', pcolor: 'black' },
		{ IconName: faJs, backgrnd: '#f0db4f', maincolor: 'black', name: 'JAVASCRIPT', pcolor: 'black' },
		{ IconName: faSass, backgrnd: 'white', maincolor: '#cc6699', name: 'SASS', pcolor: 'black' },
		{ IconName: faNpm, backgrnd: 'white', maincolor: '#d9311b', name: 'NPM', pcolor: 'black' },
		{ IconName: faFigma, backgrnd: 'white', maincolor: 'black', name: 'FIGMA', pcolor: 'black' },
		{ IconName: faFortAwesome, backgrnd: 'white', maincolor: '#228ae6', name: 'FONT AWESOME', pcolor: 'black' },
		{ IconName: '', backgrnd: 'black', name: 'STYLED COMPONENTS' },
	];

	return (
		<SkillStyle>
			<TileHolder>
				{skillsArr.map((skill) => (
					<TileIcon
						IconName={skill.IconName}
						backgrnd={skill.backgrnd}
						maincolor={skill.maincolor}
						name={skill.name}
						pcolor={skill.pcolor}
					/>
				))}
			</TileHolder>
			<OdinStyle>
				<h3>
					I started the{' '}
					<a href="https://www.theodinproject.com/home">
						<img src={odin} alt="odin project" />
						Odin Project
					</a>{' '}
					during August 2020 and have continued studying 7hrs per day everyday since, using weekends to create
					my projects.
				</h3>
			</OdinStyle>
			<ScrollTop />
		</SkillStyle>
	);
};
const SkillStyle = styled.div`
	width: 90%;
	height: auto;
	margin-top: 0%;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	display: flex;
	justify-content: space-between;
	padding: 5%;
	padding-bottom: 0;
	align-items: center;
	@media (max-width: 1000px) {
		flex-direction: column-reverse;
	}
	@media (max-width: 780px) {
		margin-top: 20%;
	}
	@media (max-width: 550px) {
		margin-top: 35%;
	}
	@media (max-width: 450px) {
		margin-top: 40%;
	}
`;
const TileHolder = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	@media (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
`;
const OdinStyle = styled.div`
	width: 40%;
	text-align: right;
	padding: 10%;
	margin-bottom: 15%;
	line-height: 1.8;
	opacity: 0;
	animation: slide 1s linear 1s forwards;
	@keyframes slide {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	img {
		height: 30px;
		width: auto;
	}
	@media (max-width: 1000px) {
		width: 90%;
		text-align: center;
		margin-bottom: 5%;
	}
	a:link {
		color: rgb(54, 54, 54);
	}
	a:visited {
		color: rgb(54, 54, 54);
	}
`;

export default Skills;
