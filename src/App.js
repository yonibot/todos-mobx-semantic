import React, {Component} from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import { Icon } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';
import Todo from './models/Todo';
import TodoList from './models/TodoList';
import User from './models/User';
import TodoItemUI from './views/TodoListView/TodoItemUI';

useStrict(true);
var myTodoList = new TodoList();
// myTodoList.todos.push(new Todo('Buy milk'));

@observer class TodoListView extends Component {
  @action handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.props.todoList.todos.push(new Todo(e.target.value));
      e.target.value = '';
    }
  }

  @action toggleCompleted = (todo) => {
    todo.completed = !todo.completed;
  }

  @action deleteTodo = (todo) => {
    this.props.todoList.todos.remove(todo);
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


class App extends Component {
  render() {
    return (
      <TodoListView todoList={myTodoList} />
    )
  }
}

export default App;
