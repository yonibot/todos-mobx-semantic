import Utils from '../utils/utilities';
import { observable, computed, useStrict, action } from 'mobx';
import md5 from 'md5';


class User {
	@observable username;
	@observable id;
	@observable email;

	constructor({username, email}) {
		Object.assign(this, {username}, {email});
	}

	@computed get gravatar() {
		return `https://www.gravatar.com/avatar/${ md5(this.email) }`
	}

}

export { User as default };
