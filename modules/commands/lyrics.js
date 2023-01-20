module.exports.config = {
	name: "lyrics",
	version: "2.0.4",
	hasPermssion: 0,
	credits: "SaikiDesu",
	description: "Find lyrics by putting the song title, if not accurate pls do also put the song artist",
	commandCategory: "music",
	usages: "lyrics [name of the song]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
const request = require('request');
const { threadID, messageID } = event;
let query = args.join(" ");

if(!query) return api.sendMessage('⚠️Titile is missing!', threadID, messageID);

  try{
const res = await axios.get(`https://api-saikidesu-beta.herokuapp.com/api/utility/lyrics?title=${query}&apikey=freelang`);
let saiki = Object.values(res.data.result)
console.log(saiki)

var title = saiki[0];
var artist = saiki[1];
var url = saiki[2];
var lyrics = saiki[3];
var image = saiki[4]

    if (!title || title === "Song not found!") return api.sendMessage(`⚠️there's no "${query}" song available on this api`, threadID, messageID);

var callback = function () {
api.sendMessage({ body: "Title: " + title + "\nArtist: " + artist + "\n\nLyrics: " + lyrics +"\n\nLink: " + url, attachment: fs.createReadStream(__dirname + '/cache/lyrics.png')
					}, threadID, () => fs.unlinkSync(__dirname + '/cache/lyrics.png'), messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/lyrics.png`)).on("close", callback);
    }catch(err){ return api.sendMessage("Error: "+err, threadID, messageID)
               }
  }
