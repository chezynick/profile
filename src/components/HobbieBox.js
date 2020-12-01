import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faGlobeEurope, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import styled from 'styled-components';

const HobbieBox = ({ Hobbies }) => {
	return (
		<HobbieHolderStyle>
			<h2>Outside of work</h2>
			<HobbieStyle>
				<BoxStyle key={Hobbies[0].name}>
					<h2>{Hobbies[0].name}</h2>
					<FontAwesomeIcon color="rgb(231, 248, 205)" size="2x" icon={faBiking} />
					<p>{Hobbies[0].stuff}</p>
				</BoxStyle>
				<BoxStyle key={Hobbies[1].name}>
					<h2>{Hobbies[1].name}</h2>
					<FontAwesomeIcon color="rgb(231, 248, 205)" size="2x" icon={faGlobeEurope} />
					<p>{Hobbies[1].stuff}</p>
				</BoxStyle>
				<BoxStyle key={Hobbies[2].name}>
					<h2>{Hobbies[2].name}</h2>
					<FontAwesomeIcon color="rgb(231, 248, 205)" size="2x" icon={faPizzaSlice} />
					<p>{Hobbies[2].stuff}</p>
				</BoxStyle>
			</HobbieStyle>
		</HobbieHolderStyle>
	);
};

export default HobbieBox;
const HobbieHolderStyle = styled.div`
	color: rgb(231, 248, 205);
	background-color: rgb(54, 54, 54);
	text-align: center;
	margin-top: 2%;
	padding-top: 2%;
`;
const HobbieStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-bottom: 5%;
	padding-top: 5%;
`;
const BoxStyle = styled.div`
	width: 40%;
	height: auto;
`;
