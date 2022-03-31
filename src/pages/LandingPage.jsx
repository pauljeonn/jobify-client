import React from 'react';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../assets/images/logo.svg';
import Main from '../assets/images/main.svg';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<img src={Logo} alt="Jobify" className="logo" />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>Job Tracking App</h1>
					<p>This is a great website!</p>
					<button class="btn btn-hero">Login/Register</button>
				</div>
				<img src={Main} alt="" className="main-img" />
			</div>
		</Wrapper>
	);
};

export default LandingPage;
