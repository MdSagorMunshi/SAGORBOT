module.exports.config = {
	name: "fish",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "John Lester, Huy",
	description: "Sell Big Fish, Gain Resources Instant Money",
	commandCategory: "Economy",
    cooldowns: 3,
    envConfig: {
        cooldownTime: 10000
    }
};

module.exports.languages = {
    
        
    "en": {
        "cooldown": "You Have Worked Today, To Avoid Exhaustion Please Come Back After: %1 minute(s) %2 second(s) Then You Can Claim Again.",
        "rewarded": "You've Got Big Fish Today, and been sold for: %2$! To View Balance Use coin",
        "job1": "Fishing",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("Fishing"),
        ];
        const amount = Math.floor(Math.random() * 9000000000);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}