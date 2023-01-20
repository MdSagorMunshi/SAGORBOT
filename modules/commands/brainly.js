module.exports.config = {
	name: "brainly",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Chard",
	description: "Basic Brainly Search Pampatamad Lalo Para Kain Tulog Nalang",
	commandCategory: "ai/learn",
	usages: "brainly [question]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const { Brainly } = require("brainly-scraper-v2");
  const brain = new Brainly("ph");
  let text = args.join(" ");
  const response = await brain.search(text, "ph");
  var resq = response[0].question.content;
  var resq1 = response[0].question.author.username;
  var resa = response[0].answers[0].content;
  return api.sendMessage(`===== 𝗕𝗥𝗔𝗜𝗡𝗟𝗬 =====\n\n📎 Questions:\n\n${resq}\n👤 By: ${resq1}\n\n🔎 Results\n\n${resa}`, event.threadID, event.messageID)
}