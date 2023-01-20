module.exports.config = {
    name: "joker2",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "DinhPhuc",
    description: "Joker's Quotes",
    commandCategory: "Is different",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = ["If you're good at something, never do it for free."

    "They laugh at me because I'm not like them I laugh at them because they're so similar.",

    "It doesn't matter who you are, don't waste your time explaining yourself, what you are doing will define who you are.",

    "The most sensible way to live in this world is to break the rules.",

    "I believe that what can't kill you makes you different.",

    "If you had to explain a joke, there wouldn't be a joke!",

    "I'm not crazy, I'm just different from you.",

    "Why do you have to be so serious?!",

    "Smiling is not only to hide sadness, laughter is also to hide contempt."

    "We live in a world of hypocrites, where everyone prays for your failure, but smiles at you as if loving you at the same time.",

    "I used to think my life was a tragedy, but now I realize it's a comedy."

    "Does that discourage you? To know how lonely you really are?",

    "There are times, your mistake is considered a joke. But when the timing is not right, even your jokes are considered a mistake.",

    "If you don't like me, get a car. Drive to hell. Have a nice trip.",

    "Smile, because it confuses others. Because it's easier than explaining what's killing you inside.",

    "Sometimes you have to act like a fool to fool the fool into thinking they're fooling you."

    "You see, in their last moments, people will show you their true nature.",

    "Let's put a smile on this face!",

    "If someone hates you for no reason, give him a reason.",

    "Someday someone will give you such a bad blow that you will become invulnerable.",

    "No matter what the situation, always smile.",

    "People want to see you fail. Let them down.",

    "You will never succeed if you care what other people think.",

    "You will never understand the hurt you have caused someone until the same thing happens to you.",

    "Some people wear a happy face to hide their pain and some people wear a pitiful face to hurt others.",

    "Standing alone doesn't mean I'm alone, it means I'm strong enough to handle things on my own.",

    "Pretending to be happy when you're hurting, that's called dealing with the bad and staying strong.",

    "Life is such a great teacher that when you don't learn a lesson, it will repeat it again to teach you."

    "No one is with you forever, learn to live alone.",

    "In this day and age, you can't rely on anyone but yourself."

    "Need Not To Know."

    ];
    return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
      }