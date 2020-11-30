import React from 'react';
import profileImg from '../images/profileImg.jpeg';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeadStyle>
			<StatementStyle>
				<h1>2020: A Catalyst for Change.</h1>
				<h1>After 14 years of creating</h1>
				<h1>adventures for others,</h1>
				<h1>its time to start the </h1>
				<h1>next stage of my journey.</h1>
			</StatementStyle>
			<img src={profileImg} alt="profile pic of nick" />
		</HeadStyle>
	);
};

const HeadStyle = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	padding-bottom: 2%;
	margin-top: 2%;

	img {
		width: 30%;
		height: auto;
		margin-left: 25%;
		opacity: 0.55;
		border-radius: 5%;
		margin-bottom: 5%;
	}
`;
const StatementStyle = styled.div`
	margin-left: 20%;
	top: 30%;
	position: absolute;
	z-index: 2;
	text-align: left;
`;
export default Header;
