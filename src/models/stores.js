import { observable, computed, useStrict, action, autorun } from 'mobx';
import Todo from './Todo';
import User from './User';

export class TodosStore {
	@observable todos = [];

  constructor() {
    var add = autorun(() => {
      // Add a new Swanson quote on completion of todo
      // http://ron-swanson-quotes.herokuapp.com/v2/quotes
      // 
      // Add it to Todo List under username
      // when a new todo is marked completed.
      console.log('Number of todos', this.todos.length);
    })
  }

	@action addTodo(text, user) {
		this.todos.push(new Todo(text, user));
	}

	@action deleteTodo(todo) {
    // remove is an observable array method
		return this.todos.remove(todo);
	}

	@action toggleCompleted(todo) {
    todo.completed = !todo.completed;
  }

  myTodos(user) {
  	if (user) {
  		return this.todos.filter(todo => todo.user == user);
  	} else {
  		return this.todos;
  	}
  	return this.todos;
  }
}


export class UsersStore {
	@observable users = [];

  @action addUser(user) {
    this.users.push(user);
  }
}



export class UiStore { 
	@observable currentUser;

}



