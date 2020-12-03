import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	const pathway = useLocation();

	return (
		<NavStyle>
			<h1>Nick Chesterton</h1>
			<NavItems>
				<Link to="/">
					Home
					{pathway.pathname === '/' ? <Line /> : <Linehidden />}
				</Link>
				<Link to="/skills">Skills{pathway.pathname === '/skills' ? <Line /> : <Linehidden />}</Link>
				<Link to="/projects">Projects{pathway.pathname === '/projects' ? <Line /> : <Linehidden />}</Link>
				<Link to="/about">About Me{pathway.pathname === '/about' ? <Line /> : <Linehidden />}</Link>
				<Link to="/contact">Contact{pathway.pathname === '/contact' ? <Line /> : <Linehidden />}</Link>
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

	@media (max-width: 780px) {
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
		padding: 10px;
		margin-left: 50px;
		border-radius: 5px;
	}
	a:hover {
		background-color: rgb(231, 248, 205);
		color: rgb(54, 54, 54);
	}
`;
const Line = styled.div`
	height: 5px;
	background-color: rgb(231, 248, 205);
	width: 100px;
	margin-top: 5px;
`;
const Linehidden = styled.div`
	height: 5px;
	width: 100px;
	opacity: 0;
	margin-top: 5px;
`;
export default Nav;
