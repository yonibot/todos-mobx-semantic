import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';
import md5 from 'md5';


class User {
	id;
	@observable username;
	@observable email;

	constructor(user) {
		Object.assign(this, user);
	}

	@computed get gravatar() {
		console.log("Getting gravatar!")
		return `https://www.gravatar.com/avatar/${ md5(this.email) }`
	}

}

export { User as default };
