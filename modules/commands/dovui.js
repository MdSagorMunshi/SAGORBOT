const timeout = 120
module.exports.config = {
    name: "quiz",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Quiz, just have fun",
    commandCategory: "Giải trí",
    usages: "",
    cooldowns: 5
};
module.exports.handleReply = async function ({ args, event, Users, api, handleReply }) {
    const axios = global.nodemodule['axios'];  
    var { dataGame, dapan, nameUser } = handleReply;
    if (handleReply.author != event.senderID) return 
    switch (handleReply.type) {
        case "reply": {
            const aw = event.body
            const dapanUser = dataGame
            const checkTrue = dapan
            if (aw.toLowerCase() == 'a' && dataGame.a == checkTrue) {
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `✔${nameUser} answered correctly!\nAnswer: A\n${checkTrue}`}
                return api.sendMessage(msg, event.threadID, event.messageID)   
            } else 
             if (aw.toLowerCase() == 'b' && dataGame.b == checkTrue) {
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `✔${nameUser} answered correctly!\nAnswer: B\n${checkTrue}`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }else 
             if (aw.toLowerCase() == 'c' && dataGame.c == checkTrue) {
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `✔${nameUser} answered correctly!\nAnswer: C\n${checkTrue}`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }else 
             if (aw.toLowerCase() == 'd' && dataGame.d == checkTrue) {
                api.unsendMessage(handleReply.messageID)
                var msg = {body: `✔${nameUser} answered correctly!\nAnswer: D\n${checkTrue}`}
                return api.sendMessage(msg, event.threadID, event.messageID)
            }
            else {
            api.unsendMessage(handleReply.messageID)
            api.sendMessage(`✘What a pity! ${nameUser} the answer is wrong!!!\The correct answer is: ${dapan}`, event.threadID);
        }
        }
    }
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { dataGame, dapan, author, nameUser } = handleReaction;
    //if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
    
    if (event.userID != author) return;
    console.log(event.userID)
    console.log(author)
    if (event.reaction != "👍" && event.reaction != "😆"&& event.reaction != "😮"&& event.reaction != "❤️") return;
    let response = "";
    if (event.reaction == "👍") response = dataGame.a
    else if (event.reaction == "❤️") response = dataGame.b
    else if (event.reaction == "😆") response = dataGame.c
    else if (event.reaction == "😮") response = dataGame.d

    if (response == handleReaction.dapan) { 
        api.unsendMessage(handleReaction.messageID)
        api.sendMessage(`✔So cool! ${nameUser} the answer is correct.\nanswer: ${dapan}`, event.threadID) 
    }

    else {
    api.unsendMessage(handleReaction.messageID)
    api.sendMessage(`✘What a pity! ${nameUser} the answer is wrong!!!\nThe correct answer is: ${dapan}`, event.threadID);
}

}

module.exports.run = async function ({ api, event, Users }) {
const axios = global.nodemodule['axios'];  
const { threadID, messageID } = event;
const res = await axios.get(`https://simsimi.info/v1/dovui.php?apikey=leanhtruong`);
const dataGame = res.data
var namePlayer_react = await Users.getData(event.senderID)
        var msg = {body: `❔Câu hỏi dành cho bạn: ${dataGame.questions}\n\n👍/A. ${dataGame.a}\n❤️/B. ${dataGame.b}\n😆/C. ${dataGame.c}\n😮/D. ${dataGame.d}\n\n🌻Reply to messages or drop emotions to reply`}
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReaction.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            dataGame: res.data,
            dapan: dataGame.dapan,
            nameUser: namePlayer_react.name
        })
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            dataGame: res.data,
            dapan: dataGame.dapan,
            nameUser: namePlayer_react.name
        })
setTimeout(function(){ 
        api.unsendMessage(info.messageID)
        }, timeout*1000);
    }) 
}