module.exports.config = {
	name: "idbox",	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Lấy id box", 
	commandCategory: "group",
	usages: "idbox",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
