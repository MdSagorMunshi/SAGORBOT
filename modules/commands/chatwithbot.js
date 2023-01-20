module.exports.config = {
    name: "sim2",
  version: "1.0.0",
    hasPermssion: 0,
    credits: "Ryusui", 
    description: "\u0043\u0068\u0061\u0074 \u0077\u0069\u0074\u0068 \u0053\u0069\u006d\u0073\u0069\u006d\u0069 ",
    commandCategory: "Simsimi",
    usages: "(text)",
  cooldowns: 5, 
}
module.exports.run = async ({ api, event, args }) => { 
    const senku = global.nodemodule.axios
    let ryusui = args.join(' ')
    const gen = await senku.get(
    'https://api.phamvandien.xyz/sim?type=ask&ask=' + ryusui
)
    var tsukasa = gen.data.answer
    return api.sendMessage('' + tsukasa, event.threadID, event.messageID)
    }