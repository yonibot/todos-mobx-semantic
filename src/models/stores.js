import { observable, computed, useStrict, action } from 'mobx';
import Todo from './Todo';

export class TodosStore {
	@observable todos;

	constructor() {
		this.todos = asMap();
	}

	@action addTodo(todo, user) {
		this.props.todoList.todos.push(new Todo(e.target.value, user));
	}

	@action deleteTodo(todo) {
    // remove is an observable array method
		return this.todos.remove(todo);
	}

	@action toggleCompleted(todo) {
    todo.completed = !todo.completed;
  }

  @computed todos(user) {
  	user = user;
  	return this.todos[]
  }

  @computed users() {
  	return Object.keys(this.todos);
  }
}



export class UserStore {

}



export class UiStore { 
	@observable currentUser;

}



