const fs = require("fs");
module.exports.config = {
	name: "aftie",
  version: "1.0.1",
	hasPermssion: 0,
	credits: "Choru tiktokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good aftie")==0 || event.body.indexOf("Good Aftie")==0 || event.body.indexOf("good after")==0 || event.body.indexOf("Good After")==0 || event.body.indexOf("Afternoon")==0 || event.body.indexOf("afternoon")==0 || event.body.indexOf("AFTERNOON")==0 || event.body.indexOf("AFTIE")==0 || event.body.indexOf("magandang hapon po")==0 || event.body.indexOf("Magandang hapon")==0 || event.body.indexOf("magandang Hapom")==0 || event.body.indexOf("Magandang Hapon")==0 ) { 
		var msg = {
				body: "🌅ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ ᴇᴀᴛ ɴᴀ ɴɢ ᴍᴇʀʏᴇɴᴅᴀ ᴡʜɪʟᴇ ʜᴏᴛ🫓🍞",
				attachment: fs.createReadStream(__dirname + `/noprefix/good-afternoon.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌆", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }