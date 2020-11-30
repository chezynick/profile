import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const Contact = () => {
	return (
		<ContactStyle>
			<h2>Contact me</h2>
			<h3>nick_chesterton@yahoo.com</h3>
			<h3>
				<a href="https://github.com/chezynick/">
					<FontAwesomeIcon size="2x" icon={faGithub} />
					Chezynick
				</a>
			</h3>
			<h3>Please see my CV for further contact details.</h3>
		</ContactStyle>
	);
};
export default Contact;
const ContactStyle = styled.div`
	width: 100%;
	height: 500px;
	background-color: rgb(54, 54, 54);
	color: rgb(231, 248, 205);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 10%;
	@media (max-width: 550px) {
		margin-top: 20%;
	}

	a:link {
		color: rgb(231, 248, 205);
		text-decoration: none;
	}
	a:visited {
		color: rgb(231, 248, 205);
		text-decoration: none;
	}
`;
