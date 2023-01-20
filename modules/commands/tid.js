module.exports.config = {
	name: "tid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Get Box/Thread ID", 
	commandCategory: "group",
	usages: "tid",
	cooldowns: 3, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("ID Of This Thread/Box: "+event.threadID, event.threadID, event.messageID);
};