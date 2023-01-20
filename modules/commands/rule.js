/** Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "kudos",
	description: "",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Terms of use bot in the box:
⚠ Please strictly comply to avoid being restricted from using commands (user ban)
1: Do not spam bot commands, spam prefixes too much to cause death bots, cp....
2: Do not cause war with bots ( sim modules ... ) because these are not real interactive users!
3: Do not abuse bots for malicious purposes.,...
4: More updates ....`, event.threadID, event.messageID);