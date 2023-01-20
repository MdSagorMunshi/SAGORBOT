module.exports.config = {
	name: "tikvid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HungCho",
	description: "",
	commandCategory: "Media",
	usages: "",
	cooldowns: 1,
dependencies: {"request": "","fs": "","tiktok-scraper": ""}
};

module.exports.run = async({api, event, args}) => {
  var fs = require("fs-extra");
  var request = require("request");
  var tiktok = require('tiktok-scraper');
  var { threadID, messageID } = event;
  
  
  if(args.length == 0) api.sendMessage("/tik [info/mp4(no logo)", event.threadID,messageID);
  if(args[0] == "info") {
    try{
    var info = await tiktok.getUserProfileInfo(args[1]);
    console.log(info)
    var ab = info.user;
    var name = ab.nickname;
    var id = ab.id;
    var username = ab.uniqueId;
    var follow = info.stats.followerCount;
    var following = info.stats.followingCoun
    
    var callback = () => api.sendMessage({body:`Name: ${name}\n❄ID: ${id}\nUsername: ${username}\nFollower: ${follow} followers\n☘Following: ${following} users !\ nVideo count: ${info.stats.videoCount}\nLikes: ${info.stats.heartCount}\n==========\n${info.user.signature}`,attachment: fs.createReadStream(__dirname + "/src/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.png"), event.messageID);	
    return request(encodeURI(`${ab.avatarLarger}`)).pipe(fs.createWriteStream(__dirname+'/src/1.png')).on('close',() => callback());     
  }
   catch(e){
    api.sendMessage("User does not exist !",event.threadID,event.messageID)
   }
}
 
  }


