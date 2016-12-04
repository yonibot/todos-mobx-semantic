// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, BrowserRouter } from 'react-router';
import { UsersStore, TodosStore } from './models/stores';
import { Provider } from 'mobx-react';
import Todo from './models/Todo';
import User from './models/User';

const usersStore = new UsersStore();
usersStore.addUser(new User({username: 'Gemma', email: 'gemma@example.com'})); 
usersStore.addUser(new User({username: 'Alice', email: 'alice@example.com'})); 
usersStore.addUser(new User({username: 'Yoni', email: 'yoni@fastmail.com'})); 

const todosStore = new TodosStore();
todosStore.addTodo('Go hunt for gems', usersStore.users[0]);
todosStore.addTodo('Find a job', usersStore.users[1]);

export const allStores = {usersStore, todosStore}

ReactDOM.render((
  <Provider {...allStores}>
  	<BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('react-root'));
