import { observable, computed, useStrict, action } from 'mobx';

class TodoList {
	@observable todos = [];
	@observable user;
}


export { TodoList as default };
