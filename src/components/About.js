import React from 'react';
import Odin from '../images/odin.png';

import styled from 'styled-components';
import { HobbieData } from './HobbieData.js';
import HobbieBox from './HobbieBox';
import WorkSkills from './WorkSkills';

const About = () => {
	const Hobbies = HobbieData;
	const ColoredLine = ({ color, width }) => (
		<hr
			style={{
				color: color,
				backgroundColor: color,
				height: 3,
				width: width,
				marginBottom: 20,
				marginTop: 20,
			}}
		/>
	);
	return (
		<AboutStyle>
			<h1>About Me</h1>
			<h3>
				I have worked in Sales and Retail since I was 15 years old, for the last 14 years I have been working in
				Travel for STA’s Round the World telesales team based in Manchester. I have been looking for a new
				direction for the past few years and this years challenges have provided that opportunity for change.
				With the onset of covid I was furloughed in July, in August I began my journey on the Odin Project.
			</h3>
			<p>
				The Odin project is a free open source coding curriculum and is maintained and improved by a team of
				contributors which aims to help it constantly update to the demands of the industry. I began on their
				foundation course working my way through lessons on HTML and CSS, these are interspersed with projects,
				all of which rather than holding your hand throughout are very much self driven. They believe that
				building projects and actually being hands on is the best way to learn, it forces you to solve any
				problems by breaking them down into more manageable sections before moving on.
			</p>
			<p>
				There are a couple of different paths after the foundation course and I decided to go through their full
				stack Javascript course next, starting with Javascript objects, functions and classes before moving onto
				ES6 modules. Finally this Course has worked through React, Webpack, async/await, Node JS and onto test
				driven development using Jest alongside React.
			</p>
			<a href="https://www.theodinproject.com/home">
				<img src={Odin} alt="odin project" />
				The Odin Project
			</a>
			<p>
				I have thoroughly enjoyed the challenge of working through each project, seeing the knowledge I have
				been taught in each lesson come to use. I have on average spent 7-8 hrs per day working through the
				course supplemented with learning from You Tube and TED talks. The project itself offered various
				differing means of learning each topic from online tutorials to articles.
			</p>
			<ColoredLine color="rgb(54,54,54)" width="60%" />
			<WorkSkills />

			<HobbieBox Hobbies={Hobbies} />
		</AboutStyle>
	);
};
export default About;
const AboutStyle = styled.div`
	width: 90%;
	height: 100%;
	padding: 10% 5% 10% 5%;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	text-align: center;

	@media (max-width: 550px) {
		margin-top: 30%;
	}
	p {
		align-items: center;
	}
	img {
		width: 50px;
		height: auto;
	}
	a:link {
		color: rgb(54, 54, 54);

		display: flex;
		justify-content: center;
		align-items: center;
	}
	a:visited {
		color: rgb(54, 54, 54);

		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
