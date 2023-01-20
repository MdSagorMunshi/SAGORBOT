module.exports.config = {
  name: "kurumi",
  version: "3.1.1",
  hasPermssion: 0,
  credits: "Kudos",
  description: "",
  commandCategory: "Random-img alime",
  usages: "kurumi",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apikurumi.khoahoang3.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `It's Kurumi <3\nAvailable number of photos: ${count} photos`,
            attachment: fs.createReadStream(__dirname + `/cache/kurumi.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kurumi.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kurumi.${ext}`)).on("close", callback);
      })
}