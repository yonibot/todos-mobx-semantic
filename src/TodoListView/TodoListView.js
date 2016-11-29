import React, { Component } from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';
import Todo from '../models/Todo';
import User from '../models/User';
import TodoItemUI from './TodoItemUI';

@observer class TodoListView extends Component {
  currentUser = () => {
    return this.props.usersStore.users[0];
    // return this.props.usersStore.users.find(e=>e.username==this.props.params.username)[0]
  }

  handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.props.todosStore.addTodo(e.target.value, this.currentUser());
      e.target.value = '';
    }
  }

  toggleCompleted = (todo) => {
    this.props.todosStore.toggleCompleted(todo);
  }

  deleteTodo = (todo) => {
    this.props.todosStore.deleteTodo(todo);
  }

  render() {
    let currentTodos = this.props.todosStore.myTodos(this.currentUser());
    return (
      <div> 
        <input
          onKeyDown={this.handleKeyPress} />
        <ul>
          {currentTodos.map(todo =>
              <li key={ todo.id }>
                <TodoItemUI 
                  todo={ todo }
                  toggleCompleted={ this.toggleCompleted }
                  deleteTodo={ this.deleteTodo } />
              </li>
            )}
        </ul>
        <DevTools />
      </div>
    )
  }
}

export { TodoListView as default };
