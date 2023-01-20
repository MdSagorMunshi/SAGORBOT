module.exports.config = {
	name: "fbcover3", 
	version: "1.0.0", 
	hasPermssion: 0, 
	credits: "DungUwU", 
	description: "blah blah blha", 
	commandCategory: "image",
	usages: "[đầu tiên chọn số từ 1-100/ sau đó ấn KenDu rồi ấn biệt danh mong muốn🐸]",
	cooldowns: 5
};

module.exports.handleReply = async ({ api, event, handleReply }) => {
	const { threadID, messageID, senderID, body } = event;
	if (handleReply.content.id != senderID) return;
	const input = body.trim();
	const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
		global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
		api.unsendMessage(handleReply.messageID);
		global.client.handleReply.push({
			step: step,
			name: this.config.name,
			messageID: info.messageID,
			content: content
		})
	}, messageID);
	const send = async (msg) => api.sendMessage(msg, threadID, messageID);

	let content = handleReply.content;
	switch (handleReply.step) {
		case 1:
			content.nhanvat = input;
			sendC("Reply to this message with your background text", 2, content);
			break;
		case 2:
			content.nen = input;
			sendC("Reply to this message with your signature", 3, content);
			break;
		case 3:
			content.ky = input;
			const axios = require("axios");
			const fs = require("fs");
			send("Information has been received, please wait a moment!");
			global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
			api.unsendMessage(handleReply.messageID);
			let c = content;
			let res = await axios.get(encodeURI(`https://api-ttk.herokuapp.com/canvas/fbcover?name=${c.ky}&id=${c.nhanvat}&subname=${c.nen}`), { responseType: "arraybuffer" })
				.catch(e => { return send("Lỗi không xác định, liên hệ admin để fix") });
			if (res.status != 200) return send("Đã có lỗi xảy ra, vui lòng thử lại sau!");
			let path = __dirname + `/cache/fbcoverv11__${senderID}.png`;
			fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
			send({
				body: 'Here its is senpai',
				attachment: fs.createReadStream(path)
			}).then(fs.unlinkSync(path));
			break;
		default:
			break;
	}
}

module.exports.run = ({ api, event, args }) => {
	const { threadID, messageID, senderID } = event;
	return api.sendMessage("Reply to this message choose character id", event.threadID, (err,info) => {
		global.client.handleReply.push({
			step: 1,
			name: this.config.name,
			messageID: info.messageID,
			content: {
				id: senderID,
				nhanvat: "",
				nen: "",
				ky: ""
        		}
		})
	}, event.messageID);
    }
