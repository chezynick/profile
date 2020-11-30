import React from 'react';
import styled from 'styled-components';

import {
	faGithub,
	faCss3Alt,
	faHtml5,
	faReact,
	faJs,
	faSass,
	faNpm,
	faFigma,
} from '@fortawesome/free-brands-svg-icons';
import TileIcon from './TileIcon';

const Skills = () => {
	return (
		<SkillStyle>
			<TileHolder>
				<TileIcon IconName={faReact} backgrnd="black" maincolor="#61dbfb" name="REACT" />
				<TileIcon IconName={faGithub} backgrnd="black" maincolor="white" name="GIT-HUB" />
				<TileIcon IconName={faCss3Alt} backgrnd="#66d3fa" maincolor="white" name="CSS 3" pcolor="black" />
				<TileIcon IconName={faHtml5} backgrnd="#f16529" maincolor="white" name="HTML 5" pcolor="black" />
				<TileIcon IconName={faJs} backgrnd="#f0db4f" maincolor="black" name="JAVASCRIPT" pcolor="black" />
				<TileIcon IconName={faSass} backgrnd="white" maincolor="#cc6699" name="SASS" pcolor="black" />
				<TileIcon IconName={faNpm} backgrnd="white" maincolor="#d9311b" name="NPM" pcolor="black" />
				<TileIcon IconName={faFigma} backgrnd="white" maincolor="black" name="FIGMA" pcolor="black" />
				<TileIcon IconName="" backgrnd="black" name="STYLED COMPONENTS" />
			</TileHolder>
			<OdinStyle>
				<h3>
					I started the <a href="https://www.theodinproject.com/home">Odin Project</a> during{' '}
				</h3>
				<h3>the lockdown and have continued studying </h3>
				<h3>7hrs per day every day for 5 months.</h3>
			</OdinStyle>
		</SkillStyle>
	);
};
const SkillStyle = styled.div`
	width: 90%;
	height: auto;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	display: flex;
	justify-content: space-between;
	padding: 5%;
	align-items: center;
	@media (max-width: 780px) {
		flex-direction: column-reverse;
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
	padding: 5%;
	margin-bottom: 15%;
	@media (max-width: 780px) {
		width: 90%;
		text-align: center;
	}
`;

export default Skills;
