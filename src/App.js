import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Dashboard</Link>
				<Link to="/landing">Landing</Link>
				<Link to="/register">Register</Link>
			</nav>
			<Routes>
				<Route path="/" element={<DashboardPage />} />
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
