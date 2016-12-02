import { observable, computed, useStrict, action } from 'mobx';
import Todo from './Todo';
import User from './User';

export class TodosStore {
	@observable todos = [];

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

  @action addUser(username) {
    this.users.push(new User(username));
  }
}



export class UiStore { 
	@observable currentUser;

}



