const Bosco = require('../lib/events')
const axios = require("axios");
const Config = require('../config');
const pjson = require('../package.json'); 
const { runtime, getBuffer} = require('../lib/bot');

Bosco.addCMD({
	pattern: 'help',
	desc: '',
	isOwner: false,
	dontAddCommandList: true 
	}, 
	async (conn, match) => {
		var CMD_HELP = '';
		var num = 1  
		Bosco.commands.map(
			async (command) =>  {
				if (command.dontAddCommandList || command.pattern === undefined) return;
				try {
					var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
					var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
					} catch {
						var match = [command.pattern];
						}
						var HANDLER = '';
						if (/\[(\W*)\]/.test(Config.HANDLERS)) {
							HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
							} else {
								HANDLER = '.';
								}
								CMD_HELP += '' + num++ + '. ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + command.desc + '\n\n'
								}
								);
								await conn.sendMessage(conn.chatId, { text : CMD_HELP.trim() }, { quoted: conn.data });
								});

Bosco.addCMD({
	pattern: 'menu',
	desc: '',
	isOwner: false,
	dontAddCommandList: true 
	}, 
	async (conn, match) => {
		var CMD_MENU = ''
		let download = ''
		let group = ''
		let misc = ''
		let heroku = ''
		let search = ''
		let convert = ''
		Bosco.commands.map(
			async (command) =>  {
				if (command.dontAddCommandList || command.pattern === undefined) return;
				try {
					var match = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2].trim()
					} catch {
						var match = [command.pattern]
						}
						var HANDLER = '';
						if (/\[(\W*)\]/.test(Config.HANDLERS)) {
							HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
							} else {
								HANDLER = '.';
								}
								if (command.type === 'download') {
									download += ` ${HANDLER}${match}\n┃𓊗│`
									}
									if (command.type === 'group') {
										group += ` ${HANDLER}${match}\n┃𖣐│`
										}
										if (command.type === 'heroku') {
											heroku += ` ${HANDLER}${match}\n┃〄│`
											}
											if (command.type === 'search') {
												search += ` ${HANDLER}${match}\n┃𖤣│`
												}
												if (command.type === 'convert') {
													convert += ` ${HANDLER}${match}\n┃※│`
													}
													if (command.type === 'misc' || command.type === '' || !command.type === '') {
														misc += ` ${HANDLER}${match}\n┃𖢨│`
														}         
														}
														);
														CMD_MENU +=`
										

┌─────〔 𝖒𝖊𝖓𝖚 〕
┊ 
┊  ʜᴇʟʟᴏ ${conn.data.pushName}
┊ 
┊ 
┊ ʙᴏᴛ : Bosco-md
┊ ᴍᴏᴅᴇ : ${Config.WORKTYPE}
┊ ᴠᴇʀꜱɪᴏɴ : ${pjson.version}
┊ ᴩʟᴜɢɪɴꜱ : ${Bosco.commands.length}
┊ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
┊
└────────────────────𔒝
╭════〘 ɢʀᴏᴜᴘ 〙════⊷❍
┃𖣐╭─────────────────
┃𖣐│ 
┃𖣐│${group}
┃𖣐╰─────────────────
╰══════════════════⊷❍
╭════〘 ᴅᴏᴡɴʟᴏᴀᴅ 〙════⊷❍
┃𓊗╭─────────────────
┃𓊗│ 
┃𓊗│${download}
┃𓊗╰─────────────────
╰══════════════════⊷❍
╭════〘 ᴍɪꜱᴄ 〙════⊷❍
┃𖢨╭─────────────────
┃𖢨│ 
┃𖢨│${misc}
┃𖢨╰─────────────────
╰══════════════════⊷❍
╭════〘 ʜᴇʀᴏᴋᴜ 〙════⊷❍
┃〄╭─────────────────
┃〄│ 
┃〄│${heroku}
┃〄╰─────────────────
╰══════════════════⊷❍
╭════〘 ᴄᴏɴᴠᴇʀᴛᴇʀ 〙════⊷❍
┃※╭─────────────────
┃※│ 
┃※│${convert}
┃※╰─────────────────
╰══════════════════⊷❍
╭════〘 ꜱᴇᴀʀᴄʜ 〙════⊷❍
┃𖤣╭─────────────────
┃𖤣│ 
┃𖤣│${search}
┃𖤣╰─────────────────
╰══════════════════⊷❍
`
									
   await conn.sendMessage(conn.chatId, { image: { url: "https://telegra.ph/file/a2c59c0a297f262976506.jpg" },caption: CMD_MENU.trim(), contextInfo: { forwardingScore: 1, isForwarded: false, externalAdReply: { title: 'ʙᴏꜱᴄᴏ-ᴍᴅ', body: '', previewType: "PHOTO", thumbnail: await getBuffer('https://telegra.ph/file/a2c59c0a297f262976506.jpg'), sourceUrl: 'https://github.com/pepesir/BOSCO-MD' } }}, { quoted: conn.data });
														});
