import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import { Card, Image, Button } from 'semantic-ui-react';


@inject('usersStore') @observer 
class UsersUI extends Component {
	render() {
		return (
			<div>
				<br />
				<UsersList users={ this.props.usersStore.users } />
				<br />
				<Button><Link to='/adduser'>Add User</Link></Button>
				<br />
			</div>
		)
	}
}

const UsersList = ({ users }) => {
  return (
  	<div>
    	<Card.Group>
    	{ users.map(u=> (
    		<Card>
    			<Card.Content>
    				<Image floated='right' size='mini' src={u.gravatar} />
    				<Card.Header>
    					{ u.username }
    				</Card.Header>
    				<Card.Description>
    					{ u.email }
    				</Card.Description>
    			</Card.Content>
    			<Card.Content extra>
    				<div>
    					<Button basic color='green'>
    						<Link key={u.username} to={`/users/${u.username}`}>Todo List</Link>
    					</Button>
    				</div>
    			</Card.Content>
    		</Card>
				)
    	)}
    	</Card.Group>
		</div>
	)
};


export { UsersUI as default };