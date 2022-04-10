import React, { useState, useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import Alert from '../components/Alert';
import FormRow from '../components/FormRow';
import Logo from '../components/Logo';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
	showAlert: false,
};

const RegisterPage = () => {
	const [values, setValues] = useState(initialState);

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

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
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{values.showAlert && <Alert />}
				{/* Name input */}
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
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
				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}
					<button tpye="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default RegisterPage;
