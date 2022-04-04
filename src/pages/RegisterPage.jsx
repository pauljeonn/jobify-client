import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import FormRow from '../components/FormRow';
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
				<FormRow
					type="text"
					name="name"
					value={values.name}
					handleChange={handleChange}
				/>
				{/* Email input */}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				{/* Password input */}
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<button type="submit" className="btn btn-block">
					Submit
				</button>
			</form>
		</Wrapper>
	);
};

export default RegisterPage;
