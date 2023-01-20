module.exports.config = {
  name: "18+",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "18+ Image",
  commandCategory: "Other",
    cooldowns: 3,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://api.phamvandien.xyz/images/du`);
    var data = res.data.url;
    var msg = [];
    let a = `${res.data.url}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({attachment: allimage
    }, event.threadID);
}