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
								HANDLER = Config.HANDLERS
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
						var HANDLER = ''
						if (/\[(\W*)\]/.test(Config.HANDLERS)) {
							HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
							} else {
								HANDLER = Config.HANDLERS
								}
								if (command.type === 'download') {
									download += `▢ ${HANDLER}${match}\n┊`
									}
									if (command.type === 'group') {
										group += `▢ ${HANDLER}${match}\n┊`
										}
										if (command.type === 'heroku') {
											heroku += `▢ ${HANDLER}${match}\n┊`
											}
											if (command.type === 'search') {
												search += `▢ ${HANDLER}${match}\n┊`
												}
												if (command.type === 'convert') {
													convert += `▢ ${HANDLER}${match}\n┊`
													}
													if (command.type === 'misc' || command.type === '' || !command.type === '') {
														misc += `▢ ${HANDLER}${match}\n┊`
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
┌─────〔 𝖌𝖗𝖔𝖚𝖕 〕
┊  
┊${group}
└────────────────────𔒝
┌─────〔 𝖉𝖔𝖜𝖓𝖑𝖔𝖆𝖉 〕
┊  
┊${download}
└────────────────────𔒝
┌─────〔 𝖒𝖎𝖘𝖈 〕
┊  
┊${misc}
└────────────────────𔒝
┌─────〔 𝖍𝖊𝖗𝖔𝖐𝖚 〕
┊  
┊${heroku}
└────────────────────𔒝
┌─────〔 𝖈𝖔𝖓𝖛𝖊𝖗𝖙 〕
┊  
┊${convert}
└────────────────────𔒝
┌─────〔 𝖘𝖊𝖆𝖗𝖈𝖍 〕
┊  
┊${search}
└────────────────────𔒝
`
   await conn.sendMessage(conn.chatId, {
      image: { url: 'https://telegra.ph/file/a2c59c0a297f262976506.jpg', },
      caption: CMD_MENU.trim(),
      footer: `bosco-md`,
      buttons: [
        {buttonId: `${PREFIX}owner`, buttonText: {displayText: 'OWNER'}},
      {buttonId: `${PREFIX}ping`, buttonText: {displayText: 'PING'}}
    ],
    
    contextInfo: {
				externalAdReply: {
					title:  "BOSCO-MD",
					body: "",
					mediaType: 2,
					thumbnail: await getBuffer('https://telegra.ph/file/a2c59c0a297f262976506.jpg'),
					mediaUrl: 'https://github.com/pepesir/BOSCO-MD',
					sourceUrl: 'https://github.com/pepesir/BOSCO-MD',
					showAdAttribution: true
					}
				}
			}, {quoted: conn.data})																							});
