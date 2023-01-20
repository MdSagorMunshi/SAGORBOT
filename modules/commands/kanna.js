module.exports.config = {
  name: "kanna",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "",
  commandCategory: "ramdom-images",
  usages: "kanna",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apikanna.khoahoang2.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function() {
          api.sendMessage({
            body: `Kanna <3\nNumber of photos available: ${count} photos`,
            attachment: fs.createReadStream(__dirname + `/cache/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kanna.${ext}`)).on("close", callback);
      })
}