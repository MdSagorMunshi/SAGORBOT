module.exports.config = {
    name: "cardinfo4",
    version: "1.0.0",
    hasPermision: 0,
    usages: "reply or mention",
    credits: "Joshua Sy",
    description: "get info",
    commandCategory: "image",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
         if (!args[0]) { var uid = senderID}
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
  if (args.join().indexOf('@') !== -1){ var uid = Object.keys(event.mentions) } 
	const res = await api.getUserInfoV2(uid); 
   var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "Not found";
    var birthday = res.birthday == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var love = res.relationship_status == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
    var location = res.location == 'Không Có Dữ Liệu' ? "Not Found" : "Not Found";
    var hometown = res.hometown == 'Không Có Dữ Liệu' ? "Not found" : "Not Found";
  var follow = res.folow == 'Không Có Dữ Liệu' ? "Not Found" : "Not Found";
  var usern = res.username; //== 'Không Có Dữ Liệu' ? "Not Found" : "Error";

	let callback = function() {
            return api.sendMessage({
                body:`Name: ${res.name}\nFacebook URL: ${res.link}\nFacebook username: ${usern}\nBirthday: ${birthday}\nFollowers: ${follow}\nGender: ${gender}\nUID: ${uid}\nLocation: ${location}\nHometown: ${hometown}`,
                attachment: fs.createReadStream(__dirname + `/cache/image.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/image.png`), event.messageID);
        };
		return request(encodeURI(`https://manhict.tech/api/fbcover3?uid=${uid}&name=${res.name}&birthday=${birthday}&love=${love}&location=${location}&hometown=${hometown}&follow=${follow}&gender=${gender}&color=Blue&apikey=lgG765KO`)).pipe(fs.createWriteStream(__dirname + `/cache/image.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Error`, event.threadID)
    }
    }