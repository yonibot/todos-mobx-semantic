import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';

class User {
	@observable username;
	@observable id;

	constructor() {
		this.id = Utils.generateUUID()
	}
}

export { User as default };
