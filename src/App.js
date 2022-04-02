import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Dashboard</Link>
				<Link to="/register">Register</Link>
				<Link to="/landing">Landing</Link>
			</nav>
			<Routes>
				<Route path="/landing" element={<LandingPage />} />
				<Route path="*" element={<h1>This page does not exist!</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
