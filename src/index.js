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
const gemma = usersStore.addUser('Gemma'); 
const alice = usersStore.addUser('Alice');

const todosStore = new TodosStore();
todosStore.addTodo(new Todo('Go hunt for gems'), gemma);
todosStore.addTodo(new Todo('Find a job'), alice);

const allStores = {usersStore, todosStore}

ReactDOM.render((
  <Provider {...allStores}>
  	<BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('react-root'));
