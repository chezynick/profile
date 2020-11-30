import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	return (
		<NavStyle>
			<h1>Nick Chesterton</h1>
			<NavItems>
				<Link to="/">Home</Link>
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

	h1 {
		margin-left: 5%;
		font-size: xx-large;
		font-weight: bold;
	}
`;
const NavItems = styled.div`
	margin-right: 5%;
	display: flex;
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
