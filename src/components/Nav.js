import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	const { pathway } = useLocation();
	return (
		<NavStyle>
			<h1>Nick Chesterton</h1>
			<NavItems>
				<Link to="/">Home</Link>
				<Link to="/skills">Skills</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/about">About Me</Link>
				<Link to="/contact">Contact</Link>
			</NavItems>
		</NavStyle>
	);
};
const NavStyle = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: rgb(54, 54, 54);
	opacity: 1;

	@media (max-width: 720px) {
		flex-wrap: wrap;
		height: auto;
		margin-bottom: 20px;
	}
	h1 {
		margin-left: 5%;
		font-size: xx-large;
		font-weight: bold;
		@media (max-width: 720px) {
			margin: auto;
			padding-bottom: 5%;
			margin-top: 5%;
			text-align: center;
		}
	}
`;
const NavItems = styled.div`
	margin-right: 5%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;

	a {
		min-width: 100px;
		text-decoration: none;
		color: rgb(231, 248, 205);
		border-bottom: 5px solid rgb(54, 54, 54);
		padding-bottom: 10px;
		margin-left: 50px;
	}
	a:hover {
		border-bottom: 5px solid rgb(231, 248, 205);
	}
`;
export default Nav;
