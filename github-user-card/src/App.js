import React from 'react';
import axios from 'axios';
import User from './components/User';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: []
		}
	}

	componentDidMount() {
		axios 
			.get('https://api.github.com/users/rabithole')
			.then(res => {
				this.setState({ 
					user: res.data
				})
				// console.log(this.state.user)
			})
			.catch(error => {
				console.error('Server Error', error);
			});
		axios 
			.get('https://api.github.com/users/rabithole/followers')
			.then(res => {
				this.setState({ 
					followers: res.data
				})
				// console.log(this.state.followers)
			})
			.catch(error => {
				console.error('Server Error', error);
			});
	}

	render() {
	  return (
	    <div className="App">
	      	<header className="App-header">
	       		<h1>Github User</h1>
	       			<User 
	       				user={this.state.user}
	       				followers={this.state.followers}
	       			/>
	      	</header>
	    </div>
	  );
	}
}

export default App;
