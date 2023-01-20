module.exports.config = {
  name: "vitamingirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "lat",
  description: "ano pa ba gusto mo malinaw naman command name gusto mo pornhub nalang puntahan mo",
  commandCategory: "Image",
  usages: "",
  cooldowns: 3
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`http://api.leanhtruong.net/api/image?api_key=LEANHTRUONG=zOgaApBm5zyT58vkiFaWw8RavU7RnlVqmRJdOmpxsMtIYm8zYU=APIKEY=PLANFREE&image=girlvn`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}