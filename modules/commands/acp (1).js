module.exports.config = {
  name: "acp",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "BLACK",
  description: "Kแบฟt bแบกn qua id Facebook",
  commandCategory: "admin",
  usages: "uid",
  cooldowns: 0
};  


module.exports.handleReply = async ({ handleReply, event, api }) => {
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
		fb_api_caller_class: "RelayModern",
		variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
		}
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "add") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "3147613905362928";
  }
  else if (args[0] == "del") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "4108254489275063";
  }
  else return api.sendMessage("๐๐ฎ๐ข ๐ฅ๐จฬ๐ง๐  ๐๐ก๐จฬฃ๐ง <๐๐๐ | ๐๐๐ฅ > <๐ฌ๐จฬฬ ๐ญ๐ก๐ฎฬฬ ๐ญ๐ฎฬฬฃ | ๐ก๐จ๐ฬฃฬ๐ \"๐๐ฅ๐ฅ\">", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "all") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`๐๐ก๐จฬ๐ง๐  ๐ญ๐ขฬ๐ฆ ๐ญ๐ก๐ฬฬ๐ฒ ๐ฌ๐ญ๐ญ ${stt} ๐ญ๐ซ๐จ๐ง๐  ๐๐๐ง๐ก ๐ฌ๐ฬ๐๐ก`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
		form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) failed.push(newTargetIDs[i].node.name);
      else success.push(newTargetIDs[i].node.name);
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`ยป ฤรฃ ${args[0] == 'add' ? 'chแบฅp nhแบญn' : 'xรณa'}๐ฅ๐จฬฬ๐ข ๐ฆ๐จฬฬ๐ข ๐ค๐ฬฬ๐ญ ๐๐ฬฃ๐ง ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  ๐๐ฎฬ๐ ${success.length} ๐ง๐ ๐ฎฬ๐จฬฬ๐ข:\n${success.join("\n")}${failed.length > 0 ? `\nยป ๐๐ก๐ฬฬ๐ญ ๐๐ฬฃ๐ข ๐ฏ๐จฬฬ๐ข ${failed.length} ๐ง๐ ๐ฎฬ๐จฬฬ๐ข: ${failed.join("\n")}` : ""}`, event.threadID, event.messageID);
};


module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
  const form = {
    av: api.getCurrentUserID(),
  	fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
  	fb_api_caller_class: "RelayModern",
  	doc_id: "4499164963466303",
  	variables: JSON.stringify({input: {scale: 3}})
  };
  const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let msg = "";
  let i = 0;
  for (const user of listRequest) {
    i++;
    msg += (`\n${i}. Name: ${user.node.name}`
         + `\nID: ${user.node.id}`
         + `\nUrl: ${user.node.url.replace("www.facebook", "fb")}`
         + `\nTime: ${moment(user.time*1009).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss")}\n`);
  }
  api.sendMessage(`${msg}\n๐๐๐ฉ๐ฅ๐ฒ ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ง๐ฬ๐ฒ ๐ฏ๐จฬฬ๐ข ๐ง๐จฬฃฬ๐ข ๐๐ฎ๐ง๐ : <๐๐๐ | ๐๐๐ฅ> <๐ฌ๐จฬฬ ๐ญ๐ก๐ฎฬฬ ๐ญ๐ฎฬฬฃ | ๐ก๐จ๐ฬฃฬ๐ \"๐๐ฅ๐ฅ\"> ฤ๐ฬฬ ๐ญ๐ก๐ฎฬฬฃ๐ ๐ก๐ข๐ฬฃฬ๐ง ๐ก๐ฬ๐ง๐ก ฤ๐จฬฃฬ๐ง๐ `, event.threadID, (e, info) => {
      global.client.handleReply.push({
        name: this. config. name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};