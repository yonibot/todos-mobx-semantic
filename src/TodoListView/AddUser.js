import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router';
import User from '../models/User';
import { Button, Icon, Card, Image } from 'semantic-ui-react';

const SubmitButton = ({handleSubmit}) => {
	return (
		<Button animated onClick={ handleSubmit }>
			<Button.Content visible>Submit</Button.Content>
			<Button.Content hidden>
				<Icon name='left arrow' />
			</Button.Content>
		</Button>
	)
}

@inject('usersStore') @observer 
class AddUser extends Component {
	@observable toggleRedirect;
	@observable newUser = {username: '', email: ''};

	@action handleNameChange = (e) => {
		this.newUser.username = e.target.value;
	}

	@action handleEmailChange = (e) => {
		this.newUser.email = e.target.value;
	}

	@action handleSubmit = () => {
		this.props.usersStore.addUser(new User(this.newUser));
		this.toggleRedirect = true;
	}

	render() {
		return (
			<div>
				<h3>Add new user:</h3>
				<input 
					value={ this.newUser.name }
					onChange={ this.handleNameChange } 
					placeholder='username' />
				<input 
					value={ this.newUser.email }
					onChange={ this.handleEmailChange }
					placeholder='joe@example.com' />
				<SubmitButton handleSubmit={ this.handleSubmit } />
				<br />
				<Card>
					<Image src={ this.newUser.gravatar } />
					<Card.Content>
						<Card.Header>
							{ this.newUser.name }
						</Card.Header>
						<Card.Meta>
							{ this.newUser.email }
						</Card.Meta>
					</Card>
				</Card>
				<Link to="/">Back</Link>
				{this.toggleRedirect && <Redirect to={{ pathname: '/' }} />}
			</div>
		)
	}
}

export { AddUser as default };