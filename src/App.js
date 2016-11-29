import React, { Component } from 'react';
import { useStrict } from 'mobx';
import TodoListView from './TodoListView/TodoListView';
import TodoList from './models/TodoList';

useStrict(true);

var myTodoList = new TodoList();
// myTodoList.todos.push(new Todo('Buy milk'));

class App extends Component {
  render() {
    return (
      <TodoListView todoList={myTodoList} />
    )
  }
}

export default App;
