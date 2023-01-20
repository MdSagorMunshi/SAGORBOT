module.exports.config = {
  name: "fuck",
  version: "1.0.0",
  hasPermssion: 0,
  credits:,
  description: "",
  commandCategory: "DK",
  usages: "fuck [tag someone you need to fuck]",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs":""
  }
};

module.exports.run = function({
  api,
  event,
  args
}) {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("tag 1 person bitch");
  else
  return request('https://api.mrdatvip03.repl.co/damdit.php', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + " Fucking happy",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/đấm.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/đấm.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/đấm.${ext}`)).on("close", callback);
  });
    }