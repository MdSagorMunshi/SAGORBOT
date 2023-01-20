module.exports.config = {
    name: "ytcmt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "",
    commandCategory: "image",
    usages: "[text]",
    cooldowns: 0,
    dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  let pathAva = __dirname + `/cache/a${event.senderID}.png`;
  let name = (await api.getUserInfo(senderID))[senderID].name
	let text = args.join(" ");
  //const text1 = text.substr(0, text.indexOf(' | ')); 
  //const length = parseInt(text1.length)
  //const text2 = text.split(" | ").pop()
  //const length_2 = parseInt(text2.length)
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${event.senderID}/picture?height=500&width=500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  avatar = await this.circle(pathAva);
let getWanted = (
    await axios.get(`https://some-random-api.ml/canvas/youtube-comment?username=${name}&comment=${text}&avatar=https://i.imgur.com/nToSGkI.png&dark=true%E2%80%8B`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 50, 50, 80, 80);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
//https://some-random-api.ml/canvas/youtube-comment?username=${name}&comment=${text}&avatar=https://i.imgur.com/nToSGkI.png
