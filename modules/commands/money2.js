module.exports.config = {
        name: "money",
        version: "0.0.1",
        hasPermssion: 0,
        credits: "D-Jukie-keychinhle",
        description: "",
        commandCategory: "Kiแบฟm Tiแปn",
        usages: "",
        cooldowns: 0,
dependencies: {
         "fs-extra": "",
      "request": "",
      "axios": ""
}  
};
module.exports.onLoad = async () => {
	const { existsSync, writeFileSync, mkdirSync } = require("fs-extra")
	const { join } = require("path")
	const axios = require("axios");
	const dir = __dirname + `/banking`;
	if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    const pathData = join(__dirname + '/banking/banking.json');
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
	return;
}
module.exports.run = async function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
  const { threadID, messageID, senderID } = event;
  const axios = require("axios")
   
  const { readFileSync, writeFileSync } = require("fs-extra")
  const { join } = require("path")
  const pathData = join(__dirname + '/banking/banking.json');
  const user = require('./banking/banking.json');
  const timeIM = 60*60
  const laisuat = 2
  const moneyInput = parseInt(args[1])
  if(args[0] == '-r' || args[0] == 'register') {
    if (!user.find(i => i.senderID == senderID)) {
      var add = { senderID: senderID,  money: 0 }
      user.push(add);
      writeFileSync(pathData, JSON.stringify(user, null, 2));
      return api.sendMessage(`[ ๐๐๐ฬ๐ ๐๐ฬ๐๐ ] ยป ๐๐ฎฬฃ๐ป ๐๐ฬฬ๐ฎ ๐๐ฎฬฃ๐ผ ๐๐ต๐ฒฬ ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด, ๐ด๐ฬฬ๐ถ ๐ถฬ๐ ๐ป๐ต๐ฎฬฬ๐ ๐ฎ๐ฌ๐ฌ ๐ฉ๐ก๐ ๐ป๐ฒฬฬ๐ ๐บ๐๐ผฬฬ๐ป ๐ฐ๐ผฬ ๐น๐ฎฬ๐ถ ๐ฐ`, threadID, messageID)
    }
  else return api.sendMessage(`[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐๐ฎฬฃ๐ป ๐ต๐ถ๐ฒฬฃฬ๐ป ๐ฐ๐ผฬ ๐๐ฎฬ๐ถ ๐ธ๐ต๐ผ๐ฎฬ๐ป ๐๐ฟ๐ฒฬ๐ป ๐ต๐ฒฬฃฬ ๐๐ต๐ผฬฬ๐ป๐ด ๐?๐ถ๐ฟ๐ฎ๐ถ ๐๐ฎ๐ป๐ธ ๐ฟ๐ผฬฬ๐ถ ๐ฆ`, threadID, messageID)
  }
  if(args[0] == 'check' || args[0] == 'coins') {
  if (!user.find(i => i.senderID == senderID)) return api.sendMessage('[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐ก๐ด๐ฬ๐ผฬฬ๐ถ ๐ฑ๐ฬ๐ป๐ด ๐ฐ๐ต๐ฬ๐ฎ ๐๐ฎฬฃ๐ผ ๐๐ต๐ฒฬ ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ๐ป๐ด๐ฎฬ๐ป, /๐ฏ๐ฎ๐ป๐ธ -๐ฟ ๐ป๐ฒฬฬ๐ ๐บ๐๐ผฬฬ๐ป ๐๐ฎฬฃ๐ผ ๐ฝ', threadID, messageID)
    else { 
      var userData = user.find(i => i.senderID == senderID);
      return api.sendMessage(`[ ๐๐๐ฬ๐ ๐๐ฬ๐๐ ] ยป ๐ฆ๐ผฬฬ ๐๐ถ๐ฒฬฬ๐ป ๐ต๐ถ๐ฒฬฃฬ๐ป ๐๐ฎฬฃ๐ถ ๐ฏ๐ฎฬฃ๐ป ๐ด๐ฬฬ๐ถ ๐?๐ถ๐ฟ๐ฎ๐ถ ๐๐ฎ๐ป๐ธ ๐น๐ฎฬ: ${userData.money}$\n๐ท ๐๐ฎฬ๐ถ: +${laisuat}% ๐๐ฟ๐ผ๐ป๐ด ${timeIM/60} ๐ฝ๐ต๐ฬ๐`, threadID, messageID)
    }
  } 
  if(args[0] == 'gแปญi' || args[0] == 'send') {
  if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐ฆ๐ผฬฬ ๐๐ถ๐ฒฬฬ๐ป ๐ฐ๐ฎฬฬ๐ป ๐ด๐ฬฬ๐ถ ๐ฝ๐ต๐ฎฬ๐ถ ๐น๐ฎฬ ๐ญ ๐ฐ๐ผ๐ป ๐๐ผฬฬ ๐๐ฎฬ ๐น๐ผฬฬ๐ป ๐ต๐ผฬ๐ป ๐ฑ๐ฌ ๐ฉ๐ก๐ ๐ฐ", threadID, messageID);
  if (!user.find(i => i.senderID == senderID)) {
    return api.sendMessage('[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐ก๐ด๐ฬ๐ผฬฬ๐ถ ๐ฑ๐ฬ๐ป๐ด ๐ฐ๐ต๐ฬ๐ฎ ๐๐ฎฬฃ๐ผ ๐๐ต๐ฒฬ ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ๐ป๐ด๐ฎฬ๐ป, /๐ฏ๐ฎ๐ป๐ธ -๐ฟ ๐ป๐ฒฬฬ๐ ๐บ๐๐ผฬฬ๐ป ๐๐ฎฬฃ๐ผ ๐ฝ', threadID, messageID)
  }
  else { 
      let balance = (await Currencies.getData(senderID)).money;
      if(balance < moneyInput) return api.sendMessage(`[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป Sแป dฦฐ khรดng ฤแปง ${moneyInput} ฤแป gแปญi vร?o Mirai Bank๐ฐ `, threadID, messageID)
      var userData = user.find(i => i.senderID == senderID);
      var money = userData.money;
      userData.money = parseInt(money) + parseInt(moneyInput)
      writeFileSync(pathData, JSON.stringify(user, null, 2));
      await Currencies.decreaseMoney(senderID, parseInt(moneyInput));
      return api.sendMessage(`[ ๐๐๐ฬ๐ ๐๐ฬ๐๐ ] ยป ๐๐ฎฬฃ๐ป ๐๐ฬฬ๐ฎ ๐ด๐ฬฬ๐ถ ${moneyInput}$ ๐๐ฎฬ๐ผ ๐?๐ถ๐ฟ๐ฎ๐ถ ๐๐ฎ๐ป๐ธ\n๐ท ๐๐ฎฬ๐ถ: +${laisuat}% ๐๐ฟ๐ผ๐ป๐ด ${timeIM/60} ๐ฝ๐ต๐ฬ๐`, threadID, messageID)
    }
  }
  if(args[0] == 'rรบt' || args[0] == 'lแบฅy') { 
    if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐ฆ๐ผฬฬ ๐๐ถ๐ฒฬฬ๐ป ๐ฐ๐ฎฬฬ๐ป ๐ด๐ฬฬ๐ถ ๐ฝ๐ต๐ฎฬ๐ถ ๐น๐ฎฬ ๐ญ ๐ฐ๐ผ๐ป ๐๐ผฬฬ ๐๐ฎฬ ๐น๐ผฬฬ๐ป ๐ต๐ผฬ๐ป ๐ฑ๐ฌ ๐ฉ๐ก๐ ๐ฐ", threadID, messageID);
    if (!user.find(i => i.senderID == senderID)) {
      return api.sendMessage('[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป ๐ก๐ด๐ฬ๐ผฬฬ๐ถ ๐ฑ๐ฬ๐ป๐ด ๐ฐ๐ต๐ฬ๐ฎ ๐๐ฎฬฃ๐ผ ๐๐ต๐ฒฬ ๐๐ฬฬ ๐ฑ๐ฬฃ๐ป๐ด ๐ป๐ด๐ฎฬ๐ป, /๐ฏ๐ฎ๐ป๐ธ -๐ฟ ๐ป๐ฒฬฬ๐ ๐บ๐๐ผฬฬ๐ป ๐๐ฎฬฃ๐ผ ๐ฝ', threadID, messageID)
    }
  else {  
    var userData = user.find(i => i.senderID == senderID); 
    var money = userData.money;
    if(parseInt(money) < parseInt(moneyInput)) return api.sendMessage('[ ๐๐ฬ๐๐ ๐๐ฬ๐ ] ยป Sแป dฦฐ cแปงa bแบกn khรดng ฤแปง ฤแป thแปฑc hiแปn giao dแปch nร?y!', threadID, messageID)
      else {
        await await Currencies.increaseMoney(senderID, parseInt(moneyInput));
        userData.money = parseInt(money) - parseInt(moneyInput)
        writeFileSync(pathData, JSON.stringify(user, null, 2));
        return api.sendMessage(`[ ๐๐๐ฬ๐ ๐๐ฬ๐๐ ] ยป ๐ฅ๐ฬ๐ ๐๐ต๐ฎฬ๐ป๐ต ๐ฐ๐ผฬ๐ป๐ด ${parseInt(moneyInput)}$, ๐๐ผฬฬ ๐ฑ๐ฬ ๐ฐ๐ผฬ๐ป ๐น๐ฎฬฃ๐ถ ๐น๐ฎฬ ${userData.money}$`, threadID, messageID)
      }
    }
  }
  else return api.sendMessage(`====== ๐ฆ Mirai Bank ๐ฆ ==========\n\n[-r/register] - Create a deposit card at BOT BANK ๐น \n[check/coins] - View the amount currently in BOT BANK ๐ณ \n[deposit/send] - Deposit to BOT BANK ๐ท \n[withdrawal] - Withdrawal from BOT BANK๐ฐ\n\n๐ฒ Current interest rate: +${laisuat}% in ${timeIM/60} minute`, threadID, messageID)
  }