import React, { Component } from 'react';
import { observable, computed, useStrict, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon, Grid, Input, List, Header, Button } from 'semantic-ui-react';
import DevTools from 'mobx-react-devtools';
import Todo from '../models/Todo';
import User from '../models/User';
import TodoItemUI from './TodoItemUI';
import { Link } from 'react-router';

const Styles = {
  headerName: {
    fontSize: '60px',
    color: 'white'
  },
  todoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  todoList: {
    color: 'white'
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
    let currentTodos = this.currentUser().todos;
    return (
      <div style={ Styles.mainContainer } > 
        <Grid centered columns={2} textAlign='left'>
            <Grid.Column style={ Styles.todoContainer }>
              <Header as='h1' style={ Styles.headerName }>
                { this.currentUser().username }
              </Header>
              <Input
                onKeyDown={this.handleKeyPress} />
              <List divided style={ Styles.todoList } inverted>
                {currentTodos.map(todo =>
                    <List.Item key={ todo.id }>
                      <TodoItemUI
                        todo={ todo }
                        toggleCompleted={ this.toggleCompleted }
                        deleteTodo={ this.deleteTodo } />
                    </List.Item>
                  )}
              </List>
              <br />
              <Link to="/">Users</Link>

            </Grid.Column>
        </Grid>
        <DevTools />
      </div>
    )
  }
}

export { TodoListView as default };
