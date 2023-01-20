module.exports.config = {
  name: "yuri",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SaikiDesu",
  description: "Random NSFW Yuri Pics",
  commandCategory: "ramdom-images",
  usages: "yuri",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://saikiapi-production.up.railway.app/x/yuri?apikey=saiki827').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 // let count = res.data.count;
  let callback = function () {
        console.log('Photo is now downloading....')
          api.sendMessage({
            body: `Random Yuri NSFW Pics\n\nAuthor: ${res.data.author}`,
            attachment: fs.createReadStream(__dirname + `/cache/yuri.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/yuri.${ext}`), event.messageID);
    console.log('Photo are now deleted!')
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/yuri.${ext}`)).on("close", callback);
      })
    .catch(err => {
                     api.sendMessage("there's something problem while generating photo, please try again!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}