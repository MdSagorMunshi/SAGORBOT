const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopmong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kaneki",
  description: "Bóp mông người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.postimg.cc/W43LzFn1/dkUlEBe.gif",
"https://i.postimg.cc/mr5xHLXN/squeeze-dat-ass-001.gif",
"https://i.postimg.cc/V6rx9x2y/tumblr-0a7f78ae0514fd8654409bd7e2410068-a200b089-500.gif",
"https://i.postimg.cc/rs573S8Q/tumblr-os64hm-Sc-AN1smwom8o10-1280.gif",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Please mention 1 Person.", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` yummy 🍑`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bopmong.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bopmong.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bopmong.gif")).on("close",() => callback());
}