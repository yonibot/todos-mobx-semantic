import React, { Component } from 'react';

class UsersUI extends Component {
	render() {
		return (
			<div>
			{ this.props.usersStore.users.map(u=> (
					<h4 key={u.username}>User: {u.username}</h4>
				))}
			<br />
			</div>
		)
	}
}

export { UsersUI as default };