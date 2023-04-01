const Bosco = require('../lib/events');
const fs = require("fs");
const { runtime, getBuffer} = require('../lib/bot');

Bosco.addCMD(
	{
		pattern: 'ping',
		isOwner: false,
		desc: "Measures your ping.", 
		type: 'misc'
},
async (conn, match) => {
	var start = new Date().getTime();
	await conn.sendMessage(conn.chatId, {text:'```Ping!```'});
	var end = new Date().getTime();
	await conn.reply('*Pong!*\n```' + (end - start) + 'ms```');
	});

Bosco.addCMD(
	{
		pattern: 'runtime', 
		desc: 'Bot runtime',
		isOwner: false,
		type: 'misc'
},
async (conn, match) => {
	await conn.reply(runtime(process.uptime()))
	});
