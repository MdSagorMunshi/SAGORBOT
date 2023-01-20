module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Joshua Sy",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image]",
    cooldowns: 5,
    dependencies: {
  "axios": "",}
};
 
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://api.phamvandien.xyz/imgur?link=${encodeURIComponent(linkanh)}`);    
var juswa = res.data.uploaded.image;
    return api.sendMessage(`Here is your imgur link:\n\n${juswa}`, event.threadID, event.messageID);
 
}