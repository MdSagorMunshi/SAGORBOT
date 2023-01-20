const fs = require("fs");
module.exports.config = {
	name: "good-night",
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
	if (event.body.indexOf("good eve")==0 || event.body.indexOf("Good eve")==0 || event.body.indexOf("good Eve")==0 || event.body.indexOf("Good Eve")==0 || event.body.indexOf("eve")==0 || event.body.indexOf("Eve")==0 || event.body.indexOf("Evening")==0 || event.body.indexOf("evening")==0 || event.body.indexOf("magandang gabi")==0 || event.body.indexOf("Magandang gabi")==0 || event.body.indexOf("magandang Gabi")==0 || event.body.indexOf("Magandang Gabi")==0 ) { 
		var msg = {
				body: "🌃ɢᴏᴏᴅɴɪɢʜᴛ ᴍʏ ᴅᴇᴀʀ ꜰʀɪᴇɴᴅ, ꜱʟᴇᴇᴘ ᴡᴇʟʟ ꜰᴏʀ ʙᴇᴛᴛᴇʀ ᴍᴇɴᴛᴀʟ ᴘᴇʀꜰᴏʀᴍᴀɴᴄᴇ ɪɴ ᴛʜᴇ ᴜᴘᴄᴏᴍɪɴɢ ᴅᴀʏꜱ⏳🌠",
				attachment: fs.createReadStream(__dirname + `/noprefix/good-night.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }