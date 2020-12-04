import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ScrollTop from './ScrollTop';

const Contact = () => {
	return (
		<ContactStyle>
			<Styled1>
				<h1>Contact me</h1>
			</Styled1>

			<Styled2>
				<div>
					<h3>nick_chesterton@yahoo.com</h3>
					<FontAwesomeIcon size="4x" icon={faEnvelope} />
				</div>
			</Styled2>
			<Styled3>
				<a href="https://github.com/chezynick/">
					<h3>My Github Account</h3>
					<FontAwesomeIcon size="4x" icon={faGithub} />
				</a>
			</Styled3>
			<Styled4>
				<h3>Please see my CV for further contact details.</h3>
			</Styled4>
			<ScrollTop />
		</ContactStyle>
	);
};
export default Contact;
const ContactStyle = styled.div`
	width: 100%;
	height: 650px;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	display: flex;
	flex-direction: column;
	margin-top: 5%;

	@media (max-width: 780px) {
		margin-top: 20%;
	}
	@media (max-width: 700px) {
		margin-top: 30%;
	}
	@media (max-width: 550px) {
		margin-top: 50%;
	}
	@keyframes slideleft {
		0% {
			margin-left: 25%;
		}
		100% {
			margin-left: 0%;
		}
	}
	@keyframes slideright {
		0% {
			margin-left: 25%;
		}
		100% {
			margin-left: 50%;
		}
	}
`;
const Styled1 = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	align-items: center;

	h1 {
		width: 50%;
		height: 100%;
		background-color: rgb(54, 54, 54);
		color: rgb(231, 248, 205);
		margin-left: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: slideleft 2s 0.2s forwards;
		@media (max-width: 800px) {
			width: 80%;
			margin-left: 10%;
			animation: none;
		}
		@media (max-width: 500px) {
			width: 100%;
			margin-left: 0%;
			animation: none;
		}
	}
`;
const Styled2 = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	align-items: center;

	div {
		margin-left: 25%;
		width: 50%;
		height: 100%;
		background-color: rgb(54, 54, 54);
		color: rgb(231, 248, 205);
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		animation: slideright 2s 0.7s forwards;
		@media (max-width: 800px) {
			width: 80%;
			margin-left: 10%;
			animation: none;
		}
		@media (max-width: 500px) {
			width: 100%;
			margin-left: 0%;
			animation: none;
		}
	}
`;
const Styled3 = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	align-items: center;
	a:link {
		width: 50%;
		margin-left: 25%;
		height: 100%;
		color: rgb(231, 248, 205);
		background-color: rgb(54, 54, 54);
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		animation: slideleft 2s 1.2s forwards;
		@media (max-width: 800px) {
			width: 80%;
			margin-left: 10%;
			animation: none;
		}
		@media (max-width: 500px) {
			width: 100%;
			margin-left: 0%;
			animation: none;
		}
	}
	a:visited {
		width: 50%;
		height: 100%;
		color: rgb(231, 248, 205);
		background-color: rgb(54, 54, 54);
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		@media (max-width: 800px) {
			width: 80%;
			margin-left: 10%;
			animation: none;
		}
		@media (max-width: 500px) {
			width: 100%;
			margin-left: 0%;
			animation: none;
		}
	}
`;
const Styled4 = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	align-items: center;
	h3 {
		width: 50%;
		height: 100%;
		background-color: rgb(54, 54, 54);
		color: rgb(231, 248, 205);
		margin-left: 25%;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: slideright 2s 1.7s forwards;
		@media (max-width: 800px) {
			width: 80%;
			margin-left: 10%;
			animation: none;
		}
		@media (max-width: 500px) {
			width: 100%;
			margin-left: 0%;
			animation: none;
		}
	}
`;
