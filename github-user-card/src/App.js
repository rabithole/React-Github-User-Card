import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: ''
		}
	}

	componentDidMount() {

		axios 
			.get('https://api.github.com/users/rabithole/followers')
			.then(res => {
				this.setState(() => ({ user: res.data }));
				console.log(this.state)
			})
			.catch(error => {
				console.error('Server Error', error);
			});
	}

	render() {
	  return (
	    <div className="App">
	      <header className="App-header">
	       <h1>Something else will go here</h1>
	      </header>
	    </div>
	  );
	}
}

export default App;
