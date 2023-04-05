const fs = require("fs");
require("dotenv").config();
const { Sequelize } = require('sequelize');
function convertToBool(text, fault = 'true') {
	return text === fault ? true : false;
	}
	DATABASE_URL = process.env.DATABASE_URL === undefined ? './bosco.db' : process.env.DATABASE_URL;
	DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
	module.exports = {
		SESSION_ID: process.env.SESSION_ID || "",
		BLOCKCHAT: process.env.BLOCK_CHAT || "",
		WORKTYPE: process.env.WORK_TYPE || "private",
		HANDLERS: process.env.HANDLERS || ".",
		SUDO: process.env.SUDO || "",
		SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
		BRANCH: 'main',
                DATABASE_URL: DATABASE_URL,
          	DATABASE: DATABASE_URL === './bosco.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
		DEBUG: DEBUG,
		HEROKU: {
			HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
			API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
			APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
			}
};
