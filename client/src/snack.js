'use strict';

module.exports = {
	Snack: function (userid, user, snackType, options, note) {
		// body...
		return {userID: userid, messageID: '' ,username: user, snackType: snackType, options: options, note: note}
	},
	setID: function (data) {
		// body...
		data.messageID = data.userID + new Date().getTime().toString()
		return data
	}
}
