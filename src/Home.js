import React from 'react';
import styled from 'styled-components';
//import components to make up home page
import Header from './components/Header';
import Skill from './components/Skill';
const Home = () => {
	return (
		<Homestyle>
			<Header />
			<Skill />
		</Homestyle>
	);
};
export default Home;
const Homestyle = styled.div`
	margin-top: 10%;
	@media (max-width: 550px) {
		margin-top: 30%;
	}
`;
