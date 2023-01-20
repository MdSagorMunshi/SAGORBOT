module.exports.config = {
	name: "refresh",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "",
	commandCategory: "system",
	cooldowns: 200
};

module.exports.run = async ({ event, api, Threads }) => {
    const threadInfo = await api.getThreadInfo(event.threadID);
	await Threads.setData(event.threadID, { name: threadInfo.name, threadInfo });
	global.data.threadInfo.set(parseInt(event.threadID), threadInfo);
    return api.sendMessage("The group's information has been refreshed successfully!", event.threadID, event.messageID);
}