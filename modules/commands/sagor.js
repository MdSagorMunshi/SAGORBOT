const fs = require("fs");
module.exports.config = {
	name: "bruh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Md Sagor Munshi", 
	description: "hihihihi",
	commandCategory: "No Prefix",
	usages: "Bủh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  let bot = global.config.OTHERBOT;
	if (event.body.indexOf("sagor")==0 || (event.body.indexOf("Sagor")==0) && !bot.includes(event.senderID)) {
		var msg = {
				body: "Bruh Bruuh",
				attachment: fs.createReadStream(__dirname + `/noprefix/xxx.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }