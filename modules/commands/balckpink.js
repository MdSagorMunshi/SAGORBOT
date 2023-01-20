module.exports.config = {
  name: "blackpink2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "text generator",
  commandCategory: "image",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  if ((this.config.credits) != "Joshua Sy") { return api.sendMessage(`Ulol Change credits pa putangina mo bobo HAHAHAHA`, event.threadID, event.messageID)}
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://cakrayp.herokuapp.com/api/textmaker/textprome/create?text=${encodeURIComponent(juswa)}&url=https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html&apikey=cakrayp24Q6&responsetype=json`).then(res =>
    {
      //let status = res.data.status,
       // url = res.data.result.image_url
      var result = res.data.result.image_url;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Your wish is my command`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}