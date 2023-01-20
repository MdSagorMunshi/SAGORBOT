const fs = require("fs");
module.exports.config = {
	name: "sanaol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "juswa", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sabaok")==0 || (event.body.indexOf("naol")==0)) {
		var msg = {
				body: "sana ell",
				attachment: fs.createReadStream(__dirname + `/noprefix/sanaol.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }