module.exports.config = {
	name: "time",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "See what time it is",
	commandCategory: "Other", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time= moment.tz("Asia/Dhaka").format("LLLL"); 
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`Hi ${name} Have a nice day\nNow it's: ${time}`, event.threadID, event.messageID)
}