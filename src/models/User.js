import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';

class User {
	@observable username;
	@observable id;

	constructor(username=undefined) {
		this.id = Utils.generateUUID()
		if (username) { this.username = username };
	}

}

export { User as default };
