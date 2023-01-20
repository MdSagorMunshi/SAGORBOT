module.exports.config = {
	name: "Astra",
	version: "1.0.9",
	hasPermssion: 0,
	credits: "Kai",
	description: "Ai chatbot talk with him",
	commandCategory: "ai",
	usages: "Astra (question)",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const Chatbot  =  require("discord-chatbot");

if (!args[0]) {api.sendMessage("null!",event.threadID, event.messageID)}
  else{
 var mess = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
const chatbot  =  new  Chatbot({name: "Udit", gender: "Male"});
    const res = await chatbot.chat(mess).catch(e => console.log(e));

 if(res === "My dear great botmaster, Sagor.") {
    api.sendMessage(`I was made by Sagor`, event.threadID, event.messageID)
    return;
              }   
      if(res === "My birthplace is Sagor's laptop. What is your birthplace?") {
    api.sendMessage(`My birthplace is in laptop. What is your birthplace?`, event.threadID, event.messageID)
    return;
              } 
      if(res === "My favorite anime is <em>Ghost in the Shell</em>") {
    api.sendMessage(`My favorite anime is Overflow, what about you?`, event.threadID, event.messageID)
    return;
              }     
      if(res === "I can't think of any. You suggest anime.") {
    api.sendMessage(`I suggest you to watch Overflow, One piece 10/10 masterpiece.`, event.threadID, event.messageID)
    return;
              }     
            if(res === "I was created by Sagor.") {
    api.sendMessage(`I was created by my master.`, event.threadID, event.messageID)
    return;
              }     
              
              if(res === "I'm BOT.") {
    api.sendMessage(`I'm BOT`, event.threadID, event.messageID)
    return;
              }     
 api.sendMessage(res, event.threadID, event.messageID)
  }
}