import React from 'react';
import Odin from '../images/odin.png';

import styled from 'styled-components';
import { HobbieData } from './HobbieData.js';
import HobbieBox from './HobbieBox';
import WorkSkills from './WorkSkills';
import ScrollTop from './ScrollTop';

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
				My background is Sales and Retail and for the last 14 years I worked in travel at STA within their
				telesales team. I have been looking for a new direction and the challenges of 2020 have provided the
				opportunity for change. Since August 2020 I have fully submerged myself into full-time study of the Odin
				Project.
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
			<ScrollTop />
		</AboutStyle>
	);
};
export default About;
const AboutStyle = styled.div`
	width: 80%;
	height: 100%;
	padding: 10%;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	text-align: center;
	opacity: 0;
	margin-top: 50%;
	animation: arise 1.2s ease-out 0.2s forwards;
	@keyframes arise {
		0% {
			margin-top: 50%;
			opacity: 0;
		}
		100% {
			margin-top: 0%;
			opacity: 1;
		}
	}

	@media (max-width: 780px) {
		margin-top: 30%;
		animation: none;
		opacity: 1;
	}
	@media (max-width: 550px) {
		margin-top: 50%;
		opacity: 1;
	}
	p {
		align-items: center;
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
