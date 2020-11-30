import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faGlobeEurope, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import styled from 'styled-components';

const HobbieBox = ({ Hobbies }) => {
	return (
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
	);
};

export default HobbieBox;
const HobbieStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;
const BoxStyle = styled.div`
	width: 40%;
	height: auto;
`;
