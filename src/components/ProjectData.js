import React from 'react';

//import pics
import colina from '../images/colina.png';
import generation from '../images/generation.png';
import recipe from '../images/recipe.png';
import profile from '../images/profile.png';
import etch from '../images/etch.png';
import weather from '../images/weather.png';
import battleships from '../images/battleships.png';
export const ProjectData = [
	{
		name: 'Colina Bike App',
		proImg: colina,
		assignment:
			'Set up a React App using react-router-dom, the app should feature more than 2 pages and include a shopping cart and the ability to add items to it.',
		description:
			'I created a simple bike shop with a landing page, 3 main item pages and a cart page, which breaks down items added and totals the prices. The page uses state to update the cart and to display the number of items added in the Nav bar.',
		future: 'I would like to add a search option and the ability to delete a specific product from the basket.',
		brief: 'Bike shop App made using React and React-Dom-Router',
		webpage: 'https://chezynick.github.io/colina-app/#/',
		githubLink: 'https://github.com/chezynick/colina-app',
	},
	{
		name: 'Generation Game',
		proImg: generation,
		assignment:
			'The main goal of this project was to use hooks as well of lots of state, the game needs to know which items have been clicked, keep a score and for bonus points a keep a record of the high score.',
		description:
			'Deciding to base this around the generation games conveyor belt finale I combined it with a collection of post apocalyptic prizes. I added animations to make the game more challenging, each item was given a clicked value which was changed on click using state. I had difficulties initially ensuring the click could be anywhere in the item box but overcame the problem with the passing of the item-key in the click function call.',
		future: '',
		brief:
			'Classic memory game-The main goal of this project should be to use hooks or lifecycle methods, as well as a lot of state.',
		website: 'https://chezynick.github.io/GenerationGame/',
		githubLink: 'https://github.com/chezynick/GenerationGame',
	},
	{
		name: 'My Project Website',
		proImg: profile,
		assignment:
			'Create and design a personal profile website to display your projects as well as explaining a little about yourself',
		description:
			'Probably the hardest one, not to code but to write! Created again using React, deployed using Netlify and styled using styled-components which I have found preferable to Sass as it keeps each component seperate and easily re-useable.',
		future:
			'Still in progress, would like to look again at the styling of the page as well as adding animations to home page.',
		brief: 'This here site - utilising React with styled components deployed with Netlify.',
		githubLink: '',
	},
	{
		name: 'My Recipe App',
		proImg: recipe,
		assignment:
			'Build a Library app using Object constructors with additional credit for options to add/remove books and for using Json for local storage.',
		description:
			'This was built before I learnt React so all of the components are contained in 1 JS file, looking back this looks vast and confusing.Originally built as a book storage as above, I am someone who uses alot of online recipes and found this a more useful subject, after the initial build this was re-designed using factory functions.',
		future:
			'This has been continually in use by myself since inception, i have plans to add a user function with shared storage maybe using firebase? Also swapping across to a React App to allow just partial re-render with each change would be good.',
		brief:
			'Odin project assignment to practice Array methods, the App is a place to store recipes discovered online.',
		website: 'https://chezynick.github.io/recipe/',
		githubLink: 'https://github.com/chezynick/recipe',
	},
	{
		name: 'Etch-a-Sketch',
		proImg: etch,
		assignment:
			'One of earlier projects built to show DOM manipulation skills, this is a browser version somewhere between a sketchpad and an etch-a-sketch',
		description:
			'This involved setting up an initial grid by looping through a set amount of squares chosen by the user, this provided its own challenges with size issues and the slowing of the browser if using too many squares. After overcoming this I also added the options of color selection, an eraser and a random color generator',
		future: '',
		brief: 'Sketch pad to show ability with dom manipulation and to practice JavaScript as well as CSS.',
		website: 'https://chezynick.github.io/etch/',
		githubLink: 'https://github.com/chezynick/etch',
	},
	{
		name: 'Weather App',
		proImg: weather,
		assignment:
			'Build a weather App that will display information requested from an API for searched location, the page should then re-render to display weather, temparture and wind etc- extra credit for changing display to reflect weather.',
		description:
			'This was my first time working with an API, still in my early days with React I found it a challenge to initiate a re-render when new information is receieved but overcame this with use of UseEffect. I also added mobile responsiveness to improve display on smaller mobile screens.',
		future: 'Allowing clouds speed to be dictated by wind speed, adding local storage again to store favourites',
		brief:
			'First project working with an API, built again using React and functional components, lots of animations and mobile friendly',
		website: 'https://chezynick.github.io/weatherApp/',
		githubLink: 'https://github.com/chezynick/weatherApp',
	},
	{
		name: 'BattleShips',
		proImg: battleships,
		assignment:
			'Create your version of the classic battleships game - there should be an option to play the computer or against another player, using React and lots of components.',
		description:
			'I spent a long time planning this game, firstly creating the board and player constructors I ended up pretty much doubling up each component before working out how to reduce the code down using the passing of props to specify which player and board was to be used. Having the ships placed vertically as well as horizontally provided an additional problem to overcome.',
		future:
			'Need to add functionality to set the location of ships pre-game and also maybe sounds effects or animation upon hits?',
		brief: 'in progress version of Battleships, React with functional components. ',
		website: 'https://chezynick.github.io/battleships-app/',
		githubLink: 'https://github.com/chezynick/battleships-app',
	},
];
