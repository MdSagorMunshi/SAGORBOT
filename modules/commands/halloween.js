module.exports.config = {
	name: "halloween",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Clarence DK",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("Octerber 31, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`👻🎃Time remaining until Halloween🎃👻\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds«`, event.threadID, event.messageID);
}