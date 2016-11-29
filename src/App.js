import React, { Component } from 'react';
import { useStrict, action } from 'mobx';
import TodoListView from './TodoListView/TodoListView';
import { TodosStore, UsersStore } from './models/stores';
import User from './models/User';
import Todo from './models/Todo';
import UsersUI from './TodoListView/UsersUI';

useStrict(true);

var todosStore = new TodosStore();
var usersStore = new UsersStore();

action(() => {
	usersStore.users.push(new User('yweisbrod'), new User('alicia'));
	todosStore.todos.push(new Todo('get milk', usersStore.users[0]))
})()

class App extends Component {
  render() {
    return (
    	<div>
    		<UsersUI usersStore={ usersStore } />
      	<TodoListView todosStore={ todosStore } usersStore={ usersStore } />
      </div>
    )
  }
}

export default App;
