module.exports.config = {
    name:"umaruteach",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "John Lester",
    description: "Teach Umaru AI Chat",
    commandCategory: "Chat with Sim, Umaru",
    usages: "The sentence asked Umaru => Umaru wanted answer",
    cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("It's the wrong format.",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("There's a lack of questions. ",threadID,messageID)} else {
            if (!answer) {api.sendMessage("There's a lack of answers. ",threadID,messageID)} else {
                    axios.get(encodeURI(`https://umaru-api-33012509.umaru33012509.repl.co/umaru/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key with value with all cmnr, add cc"){
                            api.sendMessage("The question, the answer already exists r nha :))",threadID,messageID)} else {
                                if (res.data.reply == "What's wrong cc ooin know") {api.sendMessage('Unconfirmed error:>',threadID,messageID)} else {
                                    api.sendMessage("Teach success!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}