const tientrochoi = 1000
module.exports.config = {
  name: "csgo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "banledangyeuuu",//fix vร i thแปฉ by tdunguwu
  description: "random question about csgo",
  commandCategory: "Games",
  usages: "",
  cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { senderID ,threadID, messageID } = event;
     
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 5000) return api.sendMessage('You Are Poor Lmao Claim Daily Or Fish',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
     let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/random`))).data;
      let pubg = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(pubg, "utf-8"));
    var namePlayer_react = await Users.getData(event.senderID)
     return api.sendMessage({body:`๐ธ====[๐๐๐๐ ๐๐๐๐]====๐ธ\n\n${res.body}\n\n๐ฅ๐ฒ๐ฝ๐น๐ ๐๐ถ๐ป ๐ป๐ต๐ฎฬฬ๐ป ๐ป๐ฎฬ๐ ๐๐ผฬฬ๐ถ ๐ธ๐ฒฬฬ๐ ๐พ๐๐ฎฬ ๐ฏ๐ฎฬฃ๐ป ๐ฐ๐ต๐ผฬฃ๐ป (-${tientrochoi}$)`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_ :res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 120))
        })    
}  
module.exports.handleReply = async function({ api, event, args, handleReply, client, global, Threads, Users, Currencies }) {
    if (event.senderID == api.getCurrentUserID()) return;

    let { senderID, messageID, threadID } = event;
    let name = (await Users.getData(senderID)).name;
    var money = parseInt(Math.floor(Math.random() * 5000))
    switch (handleReply.type) {
        case "random": {
           
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`๐๐ฬ๐ ๐ฐ๐ต๐ผฬ๐ฝ, ๐๐ต๐ฬ๐ฐ ๐บ๐ฬฬ๐ป๐ด ${name} ๐๐ฬฬ๐ฎ ๐๐ฟ๐ฎฬ ๐น๐ผฬฬ๐ถ ๐ฐ๐ต๐ถฬ๐ป๐ต ๐๐ฎฬ๐ฐ, ๐ฏ๐ฎฬฃ๐ป ๐ป๐ต๐ฎฬฃฬ๐ป ๐๐ฒฬฬ ${money}$ ๐ฝ`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID) + Currencies.increaseMoney(event.senderID, money));    
      else return api.sendMessage({body :`๐ฆ๐ฎ๐ถ ๐ฟ๐ผฬฬ๐ถ ๐ธ๐ฒฬฬ๐ ๐พ๐๐ฎฬ ๐น๐ฎฬ ${handleReply.answer_} ๐บ๐ผฬฬ๐ถ ๐ฐ๐ต๐ถฬ๐ป๐ต ๐๐ฎฬ๐ฐ ๐`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
      handleReply.splice(0, 1);
    }
    }
};