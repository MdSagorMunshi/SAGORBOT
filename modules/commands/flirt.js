module.exports.config = {
    name: "flirt",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Zeska fixed by Choru tiktokers",//dont change credit
    description: "Continuously tag the person you tag for many times\nYou can capture that person's heart",
    commandCategory: "group",
    usages: "war Ä‘áº­m cháº¥t",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Start flirting !");
setTimeout(() => {a({body: "Psst crush po kita"})}, 3000);
setTimeout(() => {a({body: "Hehehehe love u po"})}, 5000);
setTimeout(() => {a({body: "Tara punta tayo parke dun tayo magpakasaya"})}, 7000);
setTimeout(() => {a({body: "kumain ka naba? Pwede mo rin ako kainin, ugh ugh"})}, 9000);
setTimeout(() => {a({body: "Ahhhhhh dahan dahan lang, makakarami din tayo + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "babe asan ka na, miss na kita"})}, 15000);
setTimeout(() => {a({body: "gusto mo regaluhan kita mamaya ng matamis na chokolate?"})}, 17000);
setTimeout(() => {a({body: "sarap mo po, tara istara isag round ulit"})}, 20000);
setTimeout(() => {a({body: "lab lab kita, di kita iiwan pramis" })}, 23000);
setTimeout(() => {a({body: "mwa mwa chup chup ugh ugh"})}, 25000);
setTimeout(() => {a({body: "Grrrr */nagpapalambing, ako nalang tingnan mo wag na yang cellphone mo"})}, 28500);
setTimeout(() => {a({body: "babe may sasabihin ako sayo....."})}, 31000);
setTimeout(() => {a({body: "Will you marry me?"})}, 36000);
setTimeout(() => {a({body: "yieee happy anniversary babe"})}, 39000);
setTimeout(() => {a("wait kunin ko yung chocolate at roses ko para sayo, give me a minute")}, 40000);
setTimeout(() => {a({body: "Tada 💐🍫💐, Happy Anniversary ulit mahal"})}, 65000);
setTimeout(() => {a({body: "*After Many Years* \nBabe alam ko matanda nako malapit nako mawala.."})}, 70000);
setTimeout(() => {a({body: "Pero tandaan mo kahit mawala ako mahal na mahal kita"})}, 75000);
setTimeout(() => {a({body: "Babe paalam na....."})}, 80000);
setTimeout(() => {a({body: "salamat sa pakikipag flirt sa akin, ako ay masaya na..."})}, 85000);
setTimeout(() => {a("Good bye, see you in the next program."})}, 90000);


  
      }