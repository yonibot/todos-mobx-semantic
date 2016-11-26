import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';


class Todo {
	@observable title;
	@observable completed;
	@observable id;

	constructor(title) {
		this.title = title;
		this.id = Utils.generateUUID()
	}
}

export { Todo as default };