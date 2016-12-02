import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { Link } from 'react-router';

@inject('usersStore')
class AddUser extends Component {
	newUser;

	handleInputChange = (e) => {
		if (e.key === "Enter") {
			this.usersStore.addUser(e.target.value);
		}
	}

	render() {
		return (
			<div>
				<h3>Add new user:</h3>
				<input onChange={ this.handleInputChange } />
				<Link to="/">Back</Link>
			</div>
		)
	}
}

export { AddUser as default };