module.exports.config = {
    name: "resetmoney",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "manhIT",
    description: "Reset the amount of money on the whole group to 0",
    commandCategory: "System",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
    return api.sendMessage("Money balance of team members has been reset to 0!", event.threadID);
}