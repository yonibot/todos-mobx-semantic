import React, { Component } from 'react';
import { useStrict, action } from 'mobx';
import { Match } from 'react-router';
import { TodosStore, UsersStore } from './models/stores';
import UsersUI from './TodoListView/UsersUI';
import User from './models/User';
import TodoListView from './TodoListView/TodoListView';
import AddUser from './TodoListView/AddUser';


class App extends Component {
  render() {
    return (
    	<div>
    		<Match exactly pattern="/" component={ UsersUI } />
    		<Match exactly pattern="/adduser" component={ AddUser } />
    		<Match exactly pattern="/users/:username" component={ TodoListView } />
      </div>
    )
  }
}

export default App;
