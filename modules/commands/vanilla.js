module.exports.config = {
	name: "vanilla",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "SaikiDesu",
	description: "Random Hentai Photo Random",
	commandCategory: "Shh",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
	const akaneko = require('akaneko');
  const fs = require('fs-extra');
  const request = require('request');
  const axios = require('axios');
var money = (await Currencies.getData(event.senderID)).money
	
      if(money < 5000) api.sendMessage("You need 5000 dollars to see the photo! Claim Your Daily Rewards",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 5000})

		
  await akaneko.nsfw.hentai().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream(__dirname +"/cache/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("vanilla h*ntai image for horny weebs enjoy suckers haha"),
         attachment: fs.createReadStream(__dirname + "/cache/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 100);                            })    
  }
                              }