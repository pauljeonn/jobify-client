import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';
import Main from '../assets/images/main.svg';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<img src={Logo} alt="Jobify" className="logo" />
			</nav>
			<div className="container-page">
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

const Wrapper = styled.main`
	nav {
		width: var(--fixed-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
`;

export default LandingPage;
