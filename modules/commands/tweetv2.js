var _0x2a26e7=_0x3e11;function _0x5920(){var _0x1e5db2=['1.0.1','okers','54888DPwcja','139320mgWled','1947753RotaKJ','tweet','56RxhgUP','@mention\x20=','199352RgGvzn','Edit-img','12066nLjuLt','Choru\x20Tikt','6124SlfOkr','exports','3784560rpOaLl','config','tweetv2','270oCgHrT','\x20text','85IZVENZ'];_0x5920=function(){return _0x1e5db2;};return _0x5920();}function _0x3e11(_0x45d502,_0x59e756){var _0x94a77f=_0x5920();return _0x3e11=function(_0xb88c8b,_0x35f4bf){_0xb88c8b=_0xb88c8b-(0x7*-0x115+0xeb2+-0xf*0x6b);var _0x27bbe9=_0x94a77f[_0xb88c8b];return _0x27bbe9;},_0x3e11(_0x45d502,_0x59e756);}(function(_0x755b3c,_0x327bb5){var _0xb6eb94=_0x3e11,_0x4c4a06=_0x755b3c();while(!![]){try{var _0x42f25e=parseInt(_0xb6eb94(0xe4))/(0x3*-0x13e+-0x36*-0x4f+-0xcef)+-parseInt(_0xb6eb94(0xe5))/(0xb0a+0x2*-0xfd4+0x14a0)+parseInt(_0xb6eb94(0xdf))/(0x15c+-0x49*-0x11+-0x632)*(-parseInt(_0xb6eb94(0xda))/(0x2279*0x1+0x1896+-0x3b0b))+parseInt(_0xb6eb94(0xe1))/(-0x219f+-0x1a93+0x3c37)*(-parseInt(_0xb6eb94(0xec))/(0x1a5d*-0x1+-0x1111+0x2b74))+-parseInt(_0xb6eb94(0xe8))/(-0x12*-0xa8+0x21a0+-0x2d69*0x1)*(parseInt(_0xb6eb94(0xea))/(-0x6*-0x1f+0x1271+-0x1323))+parseInt(_0xb6eb94(0xe6))/(-0x898+-0x107f+0x1920)+parseInt(_0xb6eb94(0xdc))/(-0x1*0x3fb+0x3*-0x28a+-0xba3*-0x1);if(_0x42f25e===_0x327bb5)break;else _0x4c4a06['push'](_0x4c4a06['shift']());}catch(_0x35ac7a){_0x4c4a06['push'](_0x4c4a06['shift']());}}}(_0x5920,0xca32*-0x4+-0x1*0x2695f+-0x3*-0x2eb39),module[_0x2a26e7(0xdb)][_0x2a26e7(0xdd)]={'name':_0x2a26e7(0xde),'version':_0x2a26e7(0xe2),'hasPermssion':0x0,'credits':_0x2a26e7(0xed)+_0x2a26e7(0xe3),'description':_0x2a26e7(0xe7),'commandCategory':_0x2a26e7(0xeb),'usages':_0x2a26e7(0xe9)+_0x2a26e7(0xe0),'cooldowns':0xa,'dependencies':{'canvas':'','axios':''}});
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
	const { loadImage, createCanvas } = require("canvas");
	const fs = require("fs-extra");
	const axios = require("axios")
	let avatar = __dirname + '/cache/avt.png';
	let pathImg = __dirname + '/cache/porn.png';
	var text = args.join(" ");
	const res = await api.getUserInfoV2(event.senderID);
	if (!text) return api.sendMessage(`Wrong format\nUse: ${global.config.PREFIX}${this.config.name} text`, threadID, messageID);
	let getAvatar = (await axios.get(res.avatar, { responseType: 'arraybuffer' })).data;
	const _0x4f411d=_0x4881;(function(_0x34cb84,_0x27e63c){const _0x3e144c=_0x4881,_0x291536=_0x34cb84();while(!![]){try{const _0x19e344=parseInt(_0x3e144c(0x19f))/(0x14c0+0x147*-0x4+-0xfa3)*(-parseInt(_0x3e144c(0x197))/(0x4d3+-0x1b33+0x1662))+-parseInt(_0x3e144c(0x195))/(-0x3f2*-0x9+-0x13ce+-0xfb1)*(parseInt(_0x3e144c(0x19a))/(0x200b+-0x1d*0x37+-0x1*0x19cc))+parseInt(_0x3e144c(0x19c))/(-0x2cd*-0xd+-0x2421*-0x1+0xe81*-0x5)*(-parseInt(_0x3e144c(0x192))/(-0x1*-0xf94+0x726+-0x16b4))+-parseInt(_0x3e144c(0x199))/(-0x886*-0x2+-0x17b0*-0x1+-0x28b5)+parseInt(_0x3e144c(0x19b))/(0xeb6*-0x1+0x89*-0x23+-0x1*-0x2179)+parseInt(_0x3e144c(0x19d))/(0x54*0x42+-0x8f4+0x2f*-0x45)*(parseInt(_0x3e144c(0x1a0))/(-0x2*-0xb92+-0x3*0xea+-0x145c))+parseInt(_0x3e144c(0x193))/(-0x1ad1+-0x2101*-0x1+-0x625*0x1);if(_0x19e344===_0x27e63c)break;else _0x291536['push'](_0x291536['shift']());}catch(_0x469a9c){_0x291536['push'](_0x291536['shift']());}}}(_0x9ef3,0x599*-0x184+-0xea385+0x229eb4));function _0x9ef3(){const _0x2508e0=['6731018lmDzcD','4hnYHOE','1443760WYOWYE','5443595DpHtVl','1852893dITHXo','w6K9U3M.jp','43HuSiIk','50wtzJrB','https://i.','get','6rggANL','39387007MmGcIC','arraybuffe','2229339BFAKUm','imgur.com/','57842KgDUuk','data'];_0x9ef3=function(){return _0x2508e0;};return _0x9ef3();}function _0x4881(_0x37316a,_0x362afb){const _0x28b60c=_0x9ef3();return _0x4881=function(_0x18c447,_0x453f82){_0x18c447=_0x18c447-(0x2621+-0x48c*0x2+-0x1b77);let _0x857948=_0x28b60c[_0x18c447];return _0x857948;},_0x4881(_0x37316a,_0x362afb);}let getPorn=(await axios[_0x4f411d(0x1a2)](_0x4f411d(0x1a1)+_0x4f411d(0x196)+_0x4f411d(0x19e)+'g,',{'responseType':_0x4f411d(0x194)+'r'}))[_0x4f411d(0x198)];
	fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
oms = await this.circle(avatar);
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let image = await loadImage(oms);
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 53, 35, 85, 85);
	ctx.font = "700 23px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	ctx.fillText(res.name, 160, 70);
  ctx.font = "400 16px Arial";
	ctx.fillStyle = "#BBC0C0";
	ctx.textAlign = "start";
	ctx.fillText(`@${res.name}`, 153, 99);
	ctx.font = "400 45px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 250;
	while (ctx.measureText(text).width > 1600) {
		fontSize--;
		ctx.font = `300 ${fontSize}px Arial`;
	}
	const lines = await this.wrapText(ctx, text, 650);
	ctx.fillText(lines.join('\n'), 56,180);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(avatar);
	return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
  }