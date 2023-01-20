module.exports.config = {
  name: "rem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Kadeer",
  description: "rem",
  commandCategory: "rem",
  usages: "rem",
  cooldowns: 0
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apirem.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `Hello`,
            attachment: fs.createReadStream(__dirname + `/cache/rem.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/rem.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/rem.${ext}`)).on("close", callback);
      })
}