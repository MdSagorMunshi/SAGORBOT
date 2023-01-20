module.exports.config = {
	name: "cave",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Huy",
	description: "Cave Money Lmao",
	commandCategory: "Economy",
    cooldowns: 3,
    envConfig: {
        cooldownTime: 10000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đã làm cave trong hôm nay, để tránh kiệt sức hãy quay lại sau: %1 phút %2 giây.",
        "rewarded": "Bạn đã làm công việc cave và kiếm ra được %2$",
        "job1": "Bạn đã bán vốn tự có!",
    },
    "en": {
        "cooldown": "⚠️You have worked today, to avoid exhaustion please come back after: %0 hour(s) %5 minute(s) %0 second(s). Then Claim Again🔰",
        "rewarded": "You did the job: Cave and received: %2$ Money was Transferred To Your Account",
        "job1": "Cave",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            seconds = Math.floor( (time/1000) % 60 ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            hours = Math.floor( (time/(1000*60*60)) % 24 );
        
		return api.sendMessage(getText("cooldown", hours, minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("job1"),
        ];
        const amount = Math.floor(Math.random() * 912000000000);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
      }