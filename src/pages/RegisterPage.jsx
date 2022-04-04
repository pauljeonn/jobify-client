import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Logo from '../components/Logo';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const RegisterPage = () => {
	const [values, setValues] = useState(initialState);
	// global state and useNavigate
	const handleChange = (e) => {
		console.log(e.target);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={onSubmit}>
				<Logo />
				<h3>Login</h3>
				{/* Name input */}
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						value={values.name}
						name="name"
						onChange={handleChange}
						className="form-input"
					/>
					<button type="submit" className="btn btn-block">
						Submit
					</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default RegisterPage;
