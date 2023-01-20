/**
 * @author datoccho
 * @you can edit creditss freely it's your right as long as you are not human if you are human don't change creditss
 */
const fs = require("fs"),
      request = require("request"),
       pathFile = __dirname + "/cache/";

module.exports.config = {
    name: `dice`,
    version: `1.0.2`,
    hasPermssion: 0,
    creditss: `ken`, //change language to en
    description: `dice`,
    commandCategory: `Game`,
    usages: `[xỉu|tài] [số tiền tham gia]`,
    cooldowns: 5
};
module.exports.onLoad = () => {
  
  if (!fs.existsSync(pathFile + "cache")) fs.mkdirSync(pathFile, { recursive: true });
  
  if (!fs.existsSync(pathFile + this.config.name +".gif")) request("https://i.imgur.com/cnoG4td.gif").pipe(fs.createWriteStream(pathFile + this.config.name +".gif"));
}
module.exports.run = async({
    api, event, args, Currencies
}) => {
    const {
        getData, increaseMoney, decreaseMoney
    } = Currencies;
    const {
        createReadStream
    } = require(`fs-extra`);
    const {
        threadID, messageID, senderID
    } = event;
    const axios = global.nodemodule[`axios`];
    const fs = global.nodemodule[`fs-extra`];
    const data = (await Currencies.getData(senderID))
        .data || {};
    const getRandomIntInclusive = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var taixiucac = [`tài ${getRandomIntInclusive(11, 17)}`, `xỉu ${getRandomIntInclusive(4, 10)}`];
    const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    const money = (await getData(senderID)).money;
    var moneyBet = parseInt(args[1]) ? parseInt(args[1]) : money; //:))
    var thang = moneyBet * 2;
    const tax = thang * 5 / 100;
    const tong = thang - tax;
    if (args[0] != "talent" && args[0] != "roll")
        return api.sendMessage('Not the right format.\nThe talent/fainting.', threadID, messageID);
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Bet amounts under $50', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Your balance is not enough.', threadID, messageID);
  //if (args[1] == "tất" && args[2] == "tay" || args[1] == moneyBet) {
        api.sendMessage({
            body: '🎲Tossing the dice ...',
          attachment: fs.createReadStream(__dirname + `/cache/${this.config.name}.gif`)
        }, threadID, (err, info) => {
            if (err) console.log(err);
            setTimeout(() => {
                api.unsendMessage(info.messageID);
                if (args[0].toLocaleLowerCase() == rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `Bookmakers out: ${rdm}\nYou choose: ${args[0].toLocaleLowerCase()}\nYou win and get ${thang}$\n And subtract the 5% tax of ${ladder} is ${tax}\nSau when deducting the rent the amount you receive is ${tong}\nThe amount in your account is:${money + tong}$`
                    }, threadID, () => Currencies.increaseMoney(senderID, tong), messageID);
                } else if (args[0].toLocaleLowerCase() != rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `\nThe output: ${rdm}\nYou choose: ${args[0].toLocaleLowerCase()}\nYou lose! and deducted ${moneyBet ? moneyBet : money}$\nThe remaining money in your account is ${money - moneyBet}$`
                    }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
                } else {
                    return api.sendMessage(`Lỗi gòi đéo biết fix đâu ${err}`, threadID, messageID);
                }
            }, 3000);
        }, messageID);
  }