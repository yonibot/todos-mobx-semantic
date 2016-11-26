import uuid from 'uuid';

var Utils = {

	generateUUID: function() {
		return uuid.v4();
	}

}

export { Utils as default };