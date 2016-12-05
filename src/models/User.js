import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';
import md5 from 'md5';
import { allStores } from '../index';


class User {
	id;
	@observable username;
	@observable email;

	constructor(user) {
		this.assignUser(user);
	}

	@action assignUser(user) {
		Object.assign(this, user)
	}

	@computed get gravatar() {
		console.log("Getting gravatar")
		return `https://www.gravatar.com/avatar/${ md5(this.email) }`
	}

	@computed get todos() {
		return allStores.todosStore.myTodos(this);
	}

}

export { User as default };
