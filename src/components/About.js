import React from 'react';
import Odin from '../images/odin.png';

import styled from 'styled-components';
import { HobbieData } from './HobbieData.js';
import HobbieBox from './HobbieBox';

const About = () => {
	const Hobbies = HobbieData;
	return (
		<AboutStyle>
			<h1>About Me</h1>
			<h3>
				I have worked in Sales and Retail since I was 15 years old, for the last 14 years I have been working in
				Travel for STA’s Round the World telesales team based in Manchester. I have been looking for a new
				direction for the past few years and this years challenges have provided that opportunity for change.
				With the onset of covid I was furloughed in July and in August I began my journey on the Odin Project.
			</h3>
			<p>
				The Odin project is a free open source coding curriculum and is maintained and improved by a team of
				contributors which aims to help it constantly update to the demands of the industry. I began on their
				foundation course working my way through lessons on HTML and CSS, these are interspersed with projects,
				all of which rather than holding your hand throughout are very much self driven. They believe that
				building projects and actually being hands on is the best way to learn, if forces you to solve any
				problems by breaking them down into more manageable sections before moving on.
			</p>
			<p>
				There are a couple of different paths after the foundation course and I decided to go through their full
				stack Javascript course next, starting with Javascript objects, functions and classes before moving onto
				ES6 modules. Finally this Course has worked through React, webpack, async/await, node JS and onto test
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
			<h3>
				From my previous line of work I believe many of the skills I learnt there would be easily transferable
				to a career as a developer.{' '}
			</h3>
			<p>
				Team work and collaboration was a massive part of my success at STA, communication between our small
				team could be the difference between making a sale or not, leaving detailed notes in a booking could
				help massively when picking up a colleagues booking. But aside from our immediate team we communicated
				with colleagues in the operations team, suppliers (who numbered in the hundreds), airlines and our own
				customers.
			</p>
			<p>
				Meeting clients requirements was the major part of our job but so was managing their expectations,
				inspiring them with ideas of what is possible as well as helping in times of crisis. Working under
				pressure, be it helping a customer stuck at an airport or in times of need, management demands, or just
				having to respond to sales and crisis was something I was able to regularly respond to.
			</p>
			<p>
				As part of my role we were required use numerous computer systems for booking trips, as mentioned we had
				numerous suppliers all of whom had their own systems which we had access to. Nearly all of the airlines
				we dealt with had their own way of working which meant the syntax we had to use varied. Huge amounts of
				differing commands needed to be memorised and utilised on a daily basis, this was used from simple
				bookings, to adding on Infants, special meals, client assistance or even adding on musical instruments
				that required their own seats! Once again it was about breaking down the problem, was it something I had
				done before? If so check the previous booking. Could the airline help? Check their agent site or speak
				to them directly, had another colleague come across this problem? Google?
			</p>
			<p>
				Somewhat beating the current trend I have actually worked from home for the previous 11 years, my
				previous role suited this very well. I have excellent time management skills, am good at multitasking
				and work well unsupervised.{' '}
			</p>
			<h2>Outside of work</h2>
			<HobbieBox Hobbies={Hobbies} />
		</AboutStyle>
	);
};
export default About;
const AboutStyle = styled.div`
	width: 90%;
	height: 100%;
	margin: 5%;
	background-color: rgb(54, 54, 54);
	color: rgb(231, 248, 205);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	text-align: center;
	margin-top: 10%;
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
		color: rgb(231, 248, 205);
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a:visited {
		color: rgb(231, 248, 205);
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
