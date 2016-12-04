import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Link, Redirect } from 'react-router';
import User from '../models/User';
import { Button, Icon, Card, Image, Form, Header } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';


const Styles = {
	addUser: {
		color: 'white'
	}
}


const SubmitButton = ({handleSubmit}) => 
	<Button animated onClick={ handleSubmit }>
		<Button.Content visible>Submit</Button.Content>
		<Button.Content hidden>
			<Icon name='left arrow' />
		</Button.Content>
	</Button>

const UserCard = ({user}) =>
	<Card>
		<Image src={ (new User(user)).gravatar } />
		<Card.Content>
			<Card.Header>
				{ user.username }
			</Card.Header>
			<Card.Meta>
				{ user.email }
			</Card.Meta>
		</Card.Content>
	</Card>

var newUser = new User({username: '', email: ''});

@inject('usersStore') @observer 
class AddUser extends Component {
	@observable toggleRedirect;
	@observable newUser = newUser;

	@action handleNameChange = (e) => {
		this.newUser.username = e.target.value;
	}

	@action handleEmailChange = (e) => {
		this.newUser.email = e.target.value;
	}

	@action handleSubmit = (e) => {
		e.preventDefault();
		this.props.usersStore.addUser(this.newUser);
		this.toggleRedirect = true;
	}

	render() {
		return (
			<div style={ Styles.addUser }>
				<h1>Add new user:</h1>
			  <Form>
			    <Form.Field>
			      <label
			      	style={{color: 'white'}}>Username</label>
						<input
							value={ this.newUser.usernamename }
							onChange={ this.handleNameChange } 
							placeholder='username' />
			    </Form.Field>
			    <Form.Field>
			      <label
			      	style={{color: 'white'}}>Email</label>
						<input 
							value={ this.newUser.email }
							onChange={ this.handleEmailChange }
							placeholder='joe@example.com' />
			    </Form.Field>
					<SubmitButton handleSubmit={ this.handleSubmit } />
			  </Form>
				<br />
				<UserCard user={ this.newUser } />
				<Link to="/">Back</Link>
				{this.toggleRedirect && <Redirect to={{ pathname: '/' }} />}
				<DevTools />
			</div>
		)
	}
}

export { AddUser as default };