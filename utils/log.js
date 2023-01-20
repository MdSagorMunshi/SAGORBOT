const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[❕WARNING]') + data);
			break;
		case "error":
			console.log(chalk.red('[❕ERROR]') + data);
			break;
		default:
			console.log(chalk.magenta(`${option}`) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[BOT]') + data);
			break;
		case "error":
			console.log(chalk.red('[BOT]') + data);
			break;
		default:
			console.log(chalk.blue(`[BOT]`) + data);
			break;
	}
}