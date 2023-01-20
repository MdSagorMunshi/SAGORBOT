const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 45
const fontsInfo = 28
const colorName = "#000000"
module.exports.config = {
  name: "cardinfov4",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Binee",//Don't change the credits Edit the picture :(
  description: "Create a facebook user information card",
  commandCategory: "info",
  usages: "",
  cooldowns: 10,
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
  if ((this.config.credits) != "Binee") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/fBgFUr8.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 100, 97, 255, 255);
/*  if (!res.location || res.location === "Không Xác Định") res.location = "Not Found";
  if (!res.birthday || res.birthday === "Không Xác Định") res.birthday = "Not Found";
if (!res.relationship_status || res.relationship_status === "Không Xác Định") res.relationship_status = "Not Found";
  if (!res.follow || res.follow === "Không Xác Định") res.follow = "Not Found";*/

  if (!res.relationship_status || res.relationship_status === "Không Có Dữ Liệu") res.relationship_status = "Not Found";
  if (!res.birthday || res.birthday === "Không Có Dữ Liệu") res.birthday = "Not Found";
        if (!res.follow || res.follow === "Không Có Dữ Liệu") res.follow = "Not Found";
        if (!res.birthday || res.birthday === "Không Có Dữ Liệu") res.birthday = "Not Found";
  

    var gender = res.gender == 'male' ? "male" : res.gender == 'female' ? "female" : "Not public";
    var birthday = res.birthday ? `${res.birthday}` : "Not public";
    var love = res.relationship_status ? `${res.relationship_status}` : "Not public"
    var location = res.location.name ? `${res.location.name}` : "Not public"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
      ctx.font = `${fontsInfo}px Play-Bold`;
      ctx.fillStyle = "#ffff";
      ctx.textAlign = "start";
         var fontSize = 20;
      ctx.fillText(`» Name: ${res.name}`, 455, 172);
      ctx.fillText(`» Sex: ${gender}`, 455, 208);
      ctx.fillText(`» Follow: ${res.follow}`, 455, 244);
      ctx.fillText(`» Relationship: ${love}`, 455, 281);
      ctx.fillText(`» Birthday: ${birthday}`, 455, 320);
      ctx.fillText(`» Location: ${location}`, 455, 357);
      ctx.fillText(`» UID: ${uid}`, 455, 397);
      ctx.font = `${fontsLink}px Play-Bold`;
      ctx.fillStyle = "#ffff";
      ctx.textAlign = "start";
      fontSize = 20;
      ctx.fillText(`» Profile: ${res.link}`, 19, 468);
      ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};