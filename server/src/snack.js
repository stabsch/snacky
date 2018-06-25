'use strict';

module.exports = {
	Snack: function (userid, user, snackType, options, note) {
		// body...
		return {userID: userid, messageID: '' ,username: user, snackType: snackType, options: options, note: note, matchedUsers: []}
	},
	setID: function (data) {
		// body...
		var time =   new Date().getTime().toString()
		data.messageID = data.userID + time
		return data
	}
}
