const fs = require("fs");
module.exports.config = {
	name: "yamete",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "kensu", //create by ken gusler
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamete kudasai")==0 || (event.body.indexOf("yamete")==0)) {
		var msg = {
				body: "Yamete",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamete.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }