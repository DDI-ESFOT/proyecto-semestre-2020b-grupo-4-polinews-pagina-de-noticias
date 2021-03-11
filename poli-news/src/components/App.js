import '../styles/App.css';
import React from 'react';
import MainMenu from './MainMenu';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import CoursersPage from '../pages/CoursersPage';
import IntershipsPage from '../pages/IntershipsPage';
import CalendarPage from '../pages/CalendarPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomeNoLogin from '../pages/HomeNoLogin';
import ProfilePage from '../pages/ProfilePage';
import Login from './Login';
import FormRegister from './FormRegister';
import { AuthProvider } from '../lib/Auth';

function App() {
	return (
		<>
			<AuthProvider>
				<MainMenu />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/logout" component={HomeNoLogin} />
					<Route path="/events" component={EventsPage} />
					<Route path="/coursers" component={CoursersPage} />
					<Route path="/interships" component={IntershipsPage} />
					<Route path="/calendar" component={CalendarPage} />
					<Route path="/login" component={ProfilePage} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={FormRegister} />
					<Route component={NotFoundPage} />
				</Switch>
			</AuthProvider>
		</>
	);
}

export default App;
