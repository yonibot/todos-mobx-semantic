import React, {Component} from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';
import Todo from '../models/Todo';
import TodoList from '../models/TodoList';
import User from '../models/User';
import TodoItemUI from './TodoItemUI';

@observer class TodoListView extends Component {
  handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.props.todoList.addTodo(new Todo(e.target.value));
      e.target.value = '';
    }
  }

  toggleCompleted = (todo) => {
    this.props.todoList.toggleCompleted(todo);
  }

  deleteTodo = (todo) => {
    this.props.todoList.deleteTodo(todo);
  }

  render() {
    return (
      <div> 
        <input
          onKeyDown={this.handleKeyPress} />
        <ul>
          {this.props.todoList.todos.map(todo =>
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
