module.exports.config = {
    name: "weather",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "See weather information in the area",
    commandCategory: "News",
    usages: "[Location]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];   
const location = args.join(" ");
if (!location) return api.sendMessage('Please enter 1 location', event.threadID, event.messageID)
try {
const res = await axios.get(`https://api.popcat.xyz/weather?q=${location}`);
const data = res.data[0]
const stt = data

console.log(stt)
return api.sendMessage(`
Location: ${stt.location.name}
Temperature: ${stt.current.temperature}°C
Status: ${stt.current.skytext}
Humidity: ${stt.current.humidity}%
Wind speed: ${stt.current.windspeed}
️ Update: ${stt.current.date}`, event.threadID, event.messageID)
} catch {
            return api.sendMessage('This location could not be found!', event.threadID, event.messageID);
        }
}