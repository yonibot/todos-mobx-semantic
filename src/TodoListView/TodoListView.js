import React, { Component } from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon, Grid } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';
import Todo from '../models/Todo';
import User from '../models/User';
import TodoItemUI from './TodoItemUI';
import { Link } from 'react-router';

const Styles = {
  mainContainer: {
    backgroundImage: 'url(https://s13.postimg.org/e4mqqm0qf/landscape_1802340_1920.jpg)',
    height: '100%'
  }
}
 
@inject('todosStore', 'usersStore')
@observer class TodoListView extends Component {
  currentUser = () => {
    return this.props.usersStore.users.find(e=>e.username==this.props.params.username);
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
      <div style={ Styles.mainContainer } > 
        <Grid centered columns={2}>
            <Grid.Column>
              <h1>Current User: <strong>{ this.currentUser().username }</strong></h1>
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
              <br />
              <Link to="/">Home</Link>
            </Grid.Column>
        </Grid>
        <DevTools />
      </div>
    )
  }
}

export { TodoListView as default };
