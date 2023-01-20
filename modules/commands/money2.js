module.exports.config = {
        name: "money",
        version: "0.0.1",
        hasPermssion: 0,
        credits: "D-Jukie-keychinhle",
        description: "",
        commandCategory: "Kiếm Tiền",
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
      return api.sendMessage(`[ 𝐍𝐆𝐀̂𝐍 𝐇𝐀̀𝐍𝐆 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝘁𝗮̣𝗼 𝘁𝗵𝗲̉ 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴, 𝗴𝘂̛̉𝗶 𝗶́𝘁 𝗻𝗵𝗮̂́𝘁 𝟮𝟬𝟬 𝗩𝗡𝗗 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗼́ 𝗹𝗮̃𝗶 💰`, threadID, messageID)
    }
  else return api.sendMessage(`[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗕𝗮̣𝗻 𝗵𝗶𝗲̣̂𝗻 𝗰𝗼́ 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝘁𝗿𝗲̂𝗻 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 𝗿𝗼̂̀𝗶 🏦`, threadID, messageID)
  }
  if(args[0] == 'check' || args[0] == 'coins') {
  if (!user.find(i => i.senderID == senderID)) return api.sendMessage('[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘁𝗮̣𝗼 𝘁𝗵𝗲̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗻𝗴𝗮̂𝗻, /𝗯𝗮𝗻𝗸 -𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̣𝗼 😽', threadID, messageID)
    else { 
      var userData = user.find(i => i.senderID == senderID);
      return api.sendMessage(`[ 𝐍𝐆𝐀̂𝐍 𝐇𝐀̀𝐍𝐆 ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗴𝘂̛̉𝗶 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸 𝗹𝗮̀: ${userData.money}$\n💷 𝗟𝗮̃𝗶: +${laisuat}% 𝘁𝗿𝗼𝗻𝗴 ${timeIM/60} 𝗽𝗵𝘂́𝘁`, threadID, messageID)
    }
  } 
  if(args[0] == 'gửi' || args[0] == 'send') {
  if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗴𝘂̛̉𝗶 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝘃𝗮̀ 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝟱𝟬 𝗩𝗡𝗗 💰", threadID, messageID);
  if (!user.find(i => i.senderID == senderID)) {
    return api.sendMessage('[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘁𝗮̣𝗼 𝘁𝗵𝗲̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗻𝗴𝗮̂𝗻, /𝗯𝗮𝗻𝗸 -𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̣𝗼 😽', threadID, messageID)
  }
  else { 
      let balance = (await Currencies.getData(senderID)).money;
      if(balance < moneyInput) return api.sendMessage(`[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » Số dư không đủ ${moneyInput} để gửi vào Mirai Bank💰 `, threadID, messageID)
      var userData = user.find(i => i.senderID == senderID);
      var money = userData.money;
      userData.money = parseInt(money) + parseInt(moneyInput)
      writeFileSync(pathData, JSON.stringify(user, null, 2));
      await Currencies.decreaseMoney(senderID, parseInt(moneyInput));
      return api.sendMessage(`[ 𝐍𝐆𝐀̂𝐍 𝐇𝐀̀𝐍𝐆 ] » 𝗕𝗮̣𝗻 𝘃𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 ${moneyInput}$ 𝘃𝗮̀𝗼 𝗠𝗶𝗿𝗮𝗶 𝗕𝗮𝗻𝗸\n💷 𝗟𝗮̃𝗶: +${laisuat}% 𝘁𝗿𝗼𝗻𝗴 ${timeIM/60} 𝗽𝗵𝘂́𝘁`, threadID, messageID)
    }
  }
  if(args[0] == 'rút' || args[0] == 'lấy') { 
    if (!args[1] || isNaN(args[1]) || parseInt(args[1]) < 50) return api.sendMessage("[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗮̂̀𝗻 𝗴𝘂̛̉𝗶 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝟭 𝗰𝗼𝗻 𝘀𝗼̂́ 𝘃𝗮̀ 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝟱𝟬 𝗩𝗡𝗗 💰", threadID, messageID);
    if (!user.find(i => i.senderID == senderID)) {
      return api.sendMessage('[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗵𝘂̛𝗮 𝘁𝗮̣𝗼 𝘁𝗵𝗲̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗻𝗴𝗮̂𝗻, /𝗯𝗮𝗻𝗸 -𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̣𝗼 😽', threadID, messageID)
    }
  else {  
    var userData = user.find(i => i.senderID == senderID); 
    var money = userData.money;
    if(parseInt(money) < parseInt(moneyInput)) return api.sendMessage('[ 𝐂𝐀̉𝐍𝐇 𝐁𝐀́𝐎 ] » Số dư của bạn không đủ để thực hiện giao dịch này!', threadID, messageID)
      else {
        await await Currencies.increaseMoney(senderID, parseInt(moneyInput));
        userData.money = parseInt(money) - parseInt(moneyInput)
        writeFileSync(pathData, JSON.stringify(user, null, 2));
        return api.sendMessage(`[ 𝐍𝐆𝐀̂𝐍 𝐇𝐀̀𝐍𝐆 ] » 𝗥𝘂́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${parseInt(moneyInput)}$, 𝘀𝗼̂́ 𝗱𝘂̛ 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗹𝗮̀ ${userData.money}$`, threadID, messageID)
      }
    }
  }
  else return api.sendMessage(`====== 🏦 Mirai Bank 🏦 ==========\n\n[-r/register] - Create a deposit card at BOT BANK 💹 \n[check/coins] - View the amount currently in BOT BANK 💳 \n[deposit/send] - Deposit to BOT BANK 💷 \n[withdrawal] - Withdrawal from BOT BANK💰\n\n💲 Current interest rate: +${laisuat}% in ${timeIM/60} minute`, threadID, messageID)
  }