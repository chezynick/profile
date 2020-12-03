import React from 'react';
import styled from 'styled-components';

//image imports
import teamwork from '../images/teamwork.png';
import problem from '../images/problem.png';
import time from '../images/time.png';
import pressure from '../images/pressure.png';
import accuracy from '../images/accuracy.png';
const WorkSkills = () => {
	const Skills = [
		{
			name: 'TeamWork',
			image: teamwork,
			article:
				'Team work and collaboration was a massive part of my success at STA, communication between our small team could be the difference between making a sale or not, leaving detailed notes in a booking could also help massively when picking up a colleagues booking. But aside from our immediate team we were part of a much larger network of colleagues in the operations team, suppliers (who numbered in the hundreds), airlines and most importantly our customers.',
		},
		{
			name: 'Problem Solving',
			image: problem,
			article:
				'As part of my role we were required to use various computer systems for booking trips, internal and external supplier programs. Huge amounts of commands needed to be memorised and utilised, this was used to make simple bookings right through to vast 5 continent round the world trips with over 20 stops. These needed to be broken down into smaller chunks to solve any sticking points, was it something I had done before? If so check the previous booking. Could the airline help? Check their agent site or speak to them directly, had another colleague come across this problem? Google?',
		},
		{
			name: 'Working under pressure',
			image: pressure,
			article:
				'Working under pressure was part of my role. This could be helping a customer stuck at an airport with an invalid ticket or calling from the other side of the world in times of crisis, management demands, or just having to respond to flash sales this were all things I needed to be able to handle on a daily basis.',
		},
		{
			name: 'Accuracy',
			image: accuracy,
			article:
				'This could be as simple as triple checking passenger names, payment cards etc through to checking rules on airline contracts 15 pages longer, or finding the correct contract for a flight amongst a list of over 50. Any mistakes could cost the company thousands of pounds or worse still completely ruin a customers trip.',
		},
		{
			name: 'Time Management',
			image: time,
			article:
				'A little ahead of the current trend, I have actually worked from home for the previous 11 years, my previous role suited this very well. I have excellent time management skills, am good at multitasking and work well unsupervised. ',
		},
	];
	return (
		<WorkStyle>
			<h2>Skills</h2>
			<h3>
				From my previous line of work, I believe many of the skills I learnt there would be easily transferable
				to a career as a developer.
			</h3>
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
		height: 200px;
		max-height: 210px;
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
