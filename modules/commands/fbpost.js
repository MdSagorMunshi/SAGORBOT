module.exports.config = {
	name: "fbpost",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Clarence DK",
	description: "Facebook Post",
	commandCategory: "Edit-img",
	usages: "fbpost text",
	cooldowns: 5,
dependencies: {"canvas": "",
 "axios": ""}
};
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.wrapText = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args, client, __GLOBAL }) {
	let { senderID, threadID, messageID } = event;
 /* if (!args[0]) { var uid = senderID}
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } */
	const { loadImage, createCanvas } = require("canvas");
	const fs = require("fs-extra");
	const axios = require("axios")
	let avatar = __dirname + '/cache/avt.png';
	let pathImg = __dirname + '/cache/porn.png';
	var text = args.join(" ");
	const res = await api.getUserInfoV2(event.senderID);
	if (!text) return api.sendMessage(`add text nigga`, threadID, messageID);
	let getAvatar = (await axios.get(res.avatar, { responseType: 'arraybuffer' })).data;
	let getPorn = (await axios.get(`https://imgur.com/iLsBrfl.jpg`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
oms = await this.circle(avatar);
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let image = await loadImage(oms);
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 20, 17, 150, 150);
	ctx.font = "bold 55px Manrope";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	ctx.fillText(res.name, 190, 70);
 /* ctx.font = "400 16px Arial";
	ctx.fillStyle = "#BBC0C0";
	ctx.textAlign = "start";
	ctx.fillText(`@${res.name}`, 153, 99);*/
	ctx.font = "500 65px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 300;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `700 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 650);
	ctx.fillText(lines.join('\n'), 20, 250);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(avatar);
	return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
                                  }