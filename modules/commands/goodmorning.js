const fs = require("fs");
module.exports.config = {
	name: "good-morning",
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
	if (event.body.indexOf("good morning")==0 || event.body.indexOf("Good gm")==0 || event.body.indexOf("good Morning")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("MORNING")==0 || event.body.indexOf("bago paka gising")==0 || event.body.indexOf("magandang araw")==0 || event.body.indexOf("Magandang Araw")==0 || event.body.indexOf("magandang Araw")==0 || event.body.indexOf("Magandang araw")==0 ) { 
		var msg = {
				body: "🌄ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ᴛʀʏ ꜱᴏᴍᴇ ᴄᴏꜰꜰᴇᴇ ᴏʀ ᴛᴇᴀ ᴛᴏ ᴡᴀᴋᴇ ʏᴏᴜ ᴜᴘ☀️☕
",
				attachment: fs.createReadStream(__dirname + `/noprefix/Good-Morning-Gif-Images.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }