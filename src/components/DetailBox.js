import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const DetailBox = ({ displayHandler, projectDetail }) => {
	const clickHandler = () => {
		document.body.style.overflow = '';
		displayHandler();
	};
	return (
		<DetailStyle onClick={clickHandler}>
			<img src={projectDetail[0].proImg} alt={projectDetail[0].name} />
			<InfoStyle>
				<h3>{projectDetail[0].name}</h3>
				<p>Assignment: {projectDetail[0].assignment}</p>
				<p>Description: {projectDetail[0].description}</p>
				{projectDetail[0].future ? <p>Future plans?:{projectDetail[0].future}</p> : ''}
				<footer>
					<a href={projectDetail[0].website}>
						<FontAwesomeIcon color="rgb(54,54,54) " icon={faExternalLinkAlt} />
						Live Webpage
					</a>
					<p>Click to close</p>
					<a href={projectDetail[0].githubLink}>
						<FontAwesomeIcon color="rgb(54,54,54) " icon={faGithub} />
						View Code
					</a>
				</footer>
			</InfoStyle>
		</DetailStyle>
	);
};
export default DetailBox;

const DetailStyle = styled.div`
	width: 99%;
	height: 500px;
	background-color: rgb(231, 248, 205);
	color: rgb(54, 54, 54);
	position: fixed;
	top: 20%;
	left: 0%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: rgb(54, 54, 54) solid 10px;
	@media (max-width: 1000px) {
		flex-wrap: wrap;
		height: auto;
		top: 0;
		justify-content: center;
		padding-top: 10px;
		z-index: 20;
	}

	img {
		margin-left: 5%;
		margin-right: 5%;

		height: auto;
		width: 50%;
		border: rgb(54, 54, 54) 10px solid;
		border-radius: 2rem;
	}
`;
const InfoStyle = styled.div`
	width: 50%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 2%;
	@media (max-width: 1000px) {
		height: auto;
		width: 90%;
	}
	footer {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	a:link {
		color: rgb(54, 54, 54);
		text-decoration: none;
		margin-left: 20px;
		margin-right: 20px;
	}
	a:visited {
		color: rgb(54, 54, 54);
		text-decoration: none;
		margin-left: 20px;
		margin-right: 20px;
	}
`;
