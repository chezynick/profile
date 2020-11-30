import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

//import component pages
import Home from './Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<HashRouter basename="/">
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route path="/projects" render={() => <Projects />} />
					<Route path="/about" render={() => <About />} />
					<Route path="/contact" render={() => <Contact />} />
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
