import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/LandingPage';
import Main from '../assets/images/main.svg';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>Job Tracking App</h1>
					<p>This is a great website!</p>
					<Link to="register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={Main} alt="" className="main-img" />
			</div>
		</Wrapper>
	);
};

export default LandingPage;
