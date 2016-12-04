import React, { Component } from 'react';
import { useStrict, action } from 'mobx';
import { Match } from 'react-router';
import { TodosStore, UsersStore } from './models/stores';
import UsersUI from './TodoListView/UsersUI';
import User from './models/User';
import TodoListView from './TodoListView/TodoListView';
import AddUser from './TodoListView/AddUser';

const Styles = {
	 mainContainer: {
    backgroundImage: 'url(https://s13.postimg.org/e4mqqm0qf/landscape_1802340_1920.jpg)',
    height: '100%'
  },
}

class App extends Component {
  render() {
    return (
    	<div style={ Styles.mainContainer }>
    		<Match exactly pattern="/" component={ UsersUI } />
    		<Match exactly pattern="/adduser" component={ AddUser } />
    		<Match exactly pattern="/users/:username" component={ TodoListView } />
      </div>
    )
  }
}

export default App;
