import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';

@inject('usersStore') @observer 
class UsersUI extends Component {
	render() {
		return (
			<div>
			{ this.props.usersStore.users.map(u=> (
					<Link key={u.username} to={`/users/${u.username}`}><h4>User: {u.username}</h4></Link>
				))}
			<Link to='/users/new'>Add User</Link>
			<br />
			</div>
		)
	}
}

export { UsersUI as default };