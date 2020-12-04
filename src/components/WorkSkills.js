import React from 'react';
import styled from 'styled-components';

//image imports
import teamwork from '../images/teamwork.png';
import problem from '../images/problem.png';
import time from '../images/time.png';
import pressure from '../images/pressure.png';
import accuracy from '../images/accuracy.png';
import conversation from '../images/conversation.png';
const WorkSkills = () => {
	const Skills = [
		{
			name: 'Teamwork',
			image: teamwork,
			article:
				'I valued being part of a team and collaboration was a massive part of my success at STA. Aside from our immediate unit, I was also part of a much larger network that included back office operations and I worked closely alongside suppliers, airlines and most importantly our customers.',
		},
		{
			name: 'Problem Solving',
			image: problem,
			article:
				'Seamlessly linking together complex trips or quickly resolving issues by utilising the various packages used at STA or externally by suppliers. Aided by my ability to memorise a multitude of commands, drawing on past experience, adapting to new systems and never being afraid to turn to senior colleagues, suppliers or even Google to get the answer required.',
		},
		{
			name: 'Working under pressure',
			image: pressure,
			article:
				'The ability to work under pressure was essential to my role at STA. I could be aiding a customer in an emergency situation, striving to hitting targets, handling an influx of calls brought on by flash sales or abiding to management demands.',
		},
		{
			name: 'Accuracy',
			image: accuracy,
			article:
				'This could be as simple as triple checking passenger names and payment transactions etc through to checking lengthy T&Cs on supplier contracts, or finding the correct flight contract from a list of over 50. A simple mistake could cost thousands of pounds to resolve or worse still ruin a customers trip.',
		},
		{
			name: 'Time Management',
			image: time,
			article:
				'A little ahead of the current trend, I have actually worked from home for the previous 11 years. I have excellent time management skills, am good at multitasking and work well unsupervised. ',
		},
		{
			name: 'Communication',
			image: conversation,
			article:
				'Working in Sales, communication as always been one of my best assets. I am friendly and approachable, conversing easily with people from a broad range of backgrounds.',
		},
	];
	return (
		<WorkStyle>
			<h2>Skills</h2>
			<h3>To my career as a developer I can bring strong attributes:</h3>
			<ContainerStyle>
				{Skills.map((a) => {
					return (
						<BoxStyle key={a.name}>
							<img src={a.image} alt={a.name} />
							<h3>{a.name}</h3>
							<p>{a.article}</p>
						</BoxStyle>
					);
				})}
			</ContainerStyle>
		</WorkStyle>
	);
};
export default WorkSkills;
const WorkStyle = styled.div`
	width: 100%;
	height: auto;
	margin-left: 0;
	img {
		width: auto;
		height: 130px;
		padding-bottom: 20px;
	}
`;
const ContainerStyle = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	flex-wrap: wrap;
	text-align: center;
	justify-content: center;
	margin: auto;
`;
const BoxStyle = styled.div`
	width: 40%;
	height: auto;
	margin: 2% 5% 2% 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 850px) {
		width: 80%;
	}
`;
