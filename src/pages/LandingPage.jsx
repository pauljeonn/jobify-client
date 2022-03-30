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

const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		height: var(--nav-height);
		display: flex;
		align-items: center;
	}
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
		span {
			color: var(--primary-500);
		}
	}
	p {
		color: var(--grey-600);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
`;

export default LandingPage;
