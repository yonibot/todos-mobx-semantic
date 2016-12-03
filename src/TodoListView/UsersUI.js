import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';


@inject('usersStore') @observer 
class UsersUI extends Component {
	render() {
		return (
			<div>
				<UsersList users={ this.props.usersStore.users } />
				<Link to='/adduser'>Add User</Link>
				<br />
			</div>
		)
	}
}

const UsersList = ({ users }) => {
  return (
  	<div>
    	{ users.map(u=> (
				<Link key={u.username} to={`/users/${u.username}`}><h4>User: {u.username}</h4></Link>
				)
    	)}
		</div>
	)
};


export { UsersUI as default };