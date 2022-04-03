import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import NotFound from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Wrapper>
			<div>
				<img src={NotFound} alt="" />
				<h3>Oops! Page Not Found</h3>
				<p>We can't find the page you're looking for.</p>
				<Link to="/">Back Home</Link>
			</div>
		</Wrapper>
	);
};

export default ErrorPage;
