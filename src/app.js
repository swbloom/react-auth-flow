require('./css/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Redirect, Link } from 'react-router-dom';

const fakeStore = {
	isAuthenticated: false
}

class PrivateRouteContainer extends React.Component {
	const mapStateToProps = (state) => {
		return {

		}
	}

	connect()
}



const PrivateRoute = (props) => {
	console.log(props.component);
	return (<Route path={props.path} render={() => {
		return fakeStore.isAuthenticated ? 
			React.createElement(props.component, props)
		:
			<Redirect to='/' />
	}} />);
}

const Dashboard = () => {
	return (
		<div>
			Dashboard
		</div>
	)
}

const Home = () => {
	return (
		<div>
			Home
			<Link to="/dashboard">Dashboard</Link>
		</div>
	)
}

class Root extends React.Component {
	componentDidMount() {

		setTimeout(() => {
			fakeStore.isAuthenticated = true;
			console.log('now authenticated');
		}, 1000);
	}
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Home} />
					<PrivateRoute component={Dashboard} path='/dashboard' />
					<PrivateRoute component={DashboardUser} path='/dashboard/user' />

				</div>
			</Router>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('app'));