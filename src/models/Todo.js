import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';

class Todo {
	@observable title;
	@observable completed;
	id;
	user;

	constructor(title, user) {
		this.title = title;
		this.id = Utils.generateUUID();
		this.user = user;
	}
}

export { Todo as default };