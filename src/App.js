import React, {Component} from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Todo from './models/Todo';
import TodoList from './models/TodoList';
import User from './models/User';

// useStrict(true);
var myTodoList = new TodoList();
myTodoList.todos.push(new Todo('Buy milk'));

@observer class TodoListView extends Component {
  handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      this.props.todoList.todos.push(new Todo(e.target.value));
      e.target.value = '';
    }
  }

  completeTodo() {

  }

  render() {
    return (
      <div> 
        <input
          onKeyDown={this.handleKeyPress}
          />
        <ul>
          {this.props.todoList.todos.map(todo =>
              <li>
                <TodoItemView key={todo.id} todo={todo} />
                <input 
                  type='checkbox'
                  checked={todo.completed}
                  onChange={ ()=> this.completeTodo(todo) } />
                <i className=""
              </li>
            )}
        </ul>
        <DevTools />
      </div>
    )
  }
}

const TodoItemView = ({todo}) => (
  <div>{todo.title}</div>
)
TodoItemView.propTypes = {
  todo: React.PropTypes.object.isRequired
}

class App extends Component {
  render() {
    return (
      <TodoListView todoList={myTodoList} />
    )
  }
}

export default App;
