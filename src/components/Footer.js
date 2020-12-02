import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
	return (
		<FooterStyle>
			<a href="https://github.com/chezynick/">
				<FontAwesomeIcon icon={faGithub} />
				GitHub
			</a>
			<a href="https://www.instagram.com/chezynickannie/?hl=en">
				<FontAwesomeIcon icon={faInstagramSquare} />
				Instagram
			</a>
		</FooterStyle>
	);
};
export default Footer;

const FooterStyle = styled.div`
	width: 100%;
	height: 50px;
	background-color: rgb(54, 54, 54);
	color: rgb(231, 248, 205);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	bottom: 0;

	a:link {
		color: rgb(231, 248, 205);
		text-decoration: none;
		width: 150px;
		margin: 5px 20px 5px 20px;
	}
	a:visited {
		color: rgb(231, 248, 205);
		text-decoration: none;
		width: 150px;
		margin: 5px 20px 5px 20px;
	}
`;
