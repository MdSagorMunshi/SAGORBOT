module.exports.config = {
  name: "advice",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "joshua sy",
  description: "advice.",
  commandCategory: "Image",
  usages: "18+image",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/MLWNqNC.jpeg",
"https://i.imgur.com/mc741t4.jpeg", 
"https://i.imgur.com/zJ0ZnAw.jpeg", 
"https://i.imgur.com/VgDuBRt.jpeg", 
"https://i.imgur.com/JWyXFhX.jpeg", 
"https://i.imgur.com/uu3HHoc.jpeg", 
"https://i.imgur.com/rVBnWjS.jpeg", 
"https://i.imgur.com/ZYgrVcb.jpeg", 
"https://i.imgur.com/vE5XKEW.jpeg", 
"https://i.imgur.com/ytLYtwU.jpeg", 
"https://i.imgur.com/M0lqnYy.jpeg", 
"https://i.imgur.com/1NrCqSk.jpeg", 
"https://i.imgur.com/r0iPfUb.jpeg", 
"https://i.imgur.com/61g4WM5.jpeg", 
"https://i.imgur.com/J1i0d8Y.jpeg", 
  ];
	 var callback = () => api.sendMessage({bodyapi.sendMessage({body:`cheer up love❤️\nNumber of photos available: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };