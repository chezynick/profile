import React from 'react';
import profileImg from '../images/profilepic2.png';
import styled from 'styled-components';
import ScrollTop from './ScrollTop';
const Header = () => {
	return (
		<HeadStyle>
			<StatementStyle>
				<h1>2020: A Catalyst for Change.</h1>
				<h2>After 14 years of creating</h2>
				<h2>adventures for others,</h2>
				<h2>it's time to start the </h2>
				<h2>next stage of my journey.</h2>
			</StatementStyle>
			<img src={profileImg} alt="profile pic of nick" />
			<ScrollTop />
		</HeadStyle>
	);
};

const HeadStyle = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	padding-bottom: 0;
	margin-top: 1%;

	@media (max-width: 780px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 15%;
	}

	img {
		width: 30%;
		height: auto;
		margin-left: 100%;
		opacity: 0.85;
		border-radius: 5%;
		margin-bottom: 5%;
		animation: slideImg 2s ease-out 0.2s 1 forwards;
		@keyframes slideImg {
			0% {
				margin-left: 100%;
				opacity: 0;
			}
			100% {
				margin-left: 25%;
				opacity: 0.85;
			}
		}
		@media (max-width: 1000px) {
			top: 10%;
			margin: auto;
		}
		@media (max-width: 780px) {
			width: 50%;
			margin-left: 0px;
		}
	}
`;
const StatementStyle = styled.div`
	margin-left: 20%;
	top: 120%;
	position: absolute;
	z-index: 2;
	text-align: center;
	animation: slideStatement 2s ease-out 0.2s 1 forwards;
	@keyframes slideStatement {
		0% {
			top: 120%;
			opacity: 0;
		}
		100% {
			top: 30%;
			opacity: 1;
		}
	}
	@media (max-width: 1000px) {
		top: 5%;
		margin-left: 10%;
		padding-bottom: 20%;
		animation: none;
	}
	@media (max-width: 780px) {
		top: 0%;
		text-align: center;
		position: relative;
		padding-top: 10%;
		height: auto;
		animation: none;
	}
	@media (max-width: 550px) {
		font-size: x-small;
		animation: none;
	}
`;
export default Header;
