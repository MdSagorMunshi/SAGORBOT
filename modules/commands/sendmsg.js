module.exports.config = {
	name: "sendmsg",
	version: "1.0.7",
	hasPermssion: 2,
	credits: "manhG mod by Tiadals", //Please keep credit or get punched !
	description: "Send him a message to the user(user)/group(thread) by ID!",
	commandCategory: "Admin",
	usages: "ID [Text]",
	cooldowns: 5
};

	module.exports.run = async ({ api, event, args, getText }) => {
		if (!args[0]) return api.sendMessage("You have not entered the content to send",event.threadID,event.messageID);
		if (event.type == "message_reply") {
		const request = global.nodemodule["request"];
		const fs = require('fs')
		const axios = require('axios')
		
		var getURL = await request.get(event.messageReply.attachments[0].url);
		
				var pathname = getURL.uri.pathname;
		
				var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
		
				var path = __dirname + `/cache/snoti`+`.${ext}`;
		
		
		
		var abc = event.messageReply.attachments[0].url;
			let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;
		
		  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));
		
    
	var idbox = args[0];
    var reason = args.slice(1);

	if (args.length == 0) api.sendMessage("Syntax error, use: sendmsg ID_BOX [message]", event.threadID, event.messageID);
	
	else if(reason == "")api.sendMessage("Syntax error, use: sendmsg ID_BOX [message]", event.threadID, event.messageID);
	
	else
		api.sendMessage({body:"» MESSAGE FROM ADMIN «\n\n" + reason.join(" "), attachment: fs.createReadStream(path) }, idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Sent message: " + reason.join(" "), event.threadID, event.messageID)));
}
	}