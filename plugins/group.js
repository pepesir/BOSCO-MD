const Bot = require('../lib/events');
Bot.addCMD(
	{
		pattern: 'jid$',
		desc: 'get user/group jid',
		isOwner: false,
		type: 'misc'
},
async (conn, match) => {
	await conn.reply(conn.chatId)		
	});

Bot.addCMD(
	{
		pattern: 'gjid$',
		desc: 'gets jid of all group members',
		isOwner: false,
                onlyGroup: true,
		type: 'group'
},
async (conn, match) => {
	let { participants } = await conn.groupMetadata(conn.chatId);
	let participant = participants.map((u) => u.id);
	let str = "┌─────〔 𝖌𝖗𝖔𝖚𝖕 𝖏𝖎𝖉𝖘 〕\n";
	participant.forEach((result) => {
		str += `┊ ${result}\n`;
		});
		str += `└────────────────────𔒝`;
		conn.reply(str);	
	});

Bot.addCMD(
	{
		pattern: 'leave',
		desc: 'leave a group',
		isOwner: true,
                onlyGroup: true,
		type: 'group'
},
async (conn, match) => {
	await conn.groupLeave(conn.chatId)
	});
