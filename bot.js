// © pepesir - 2023
const { default: makeWASocket,
        delay,
        downloadContentFromMessage,	
	DisconnectReason,
	getContentType,        
        makeInMemoryStore,
        useSingleFileAuthState } = require('@adiwajshing/baileys')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const { MakeSession } = require("./lib/session")
const pino = require('pino');
const fs = require("fs");
const FileType = require('file-type')
const path = require("path");
const events = require("./lib/events");
const chalk = require('chalk');
const config = require('./config');
const { DataTypes } = require('sequelize')
const { GreetingsDB, getMessage } = require("./plugins/SQL/greetings");
const got = require('got');
const simpleGit = require('simple-git');
const git = simpleGit();
const { smsg, getBuffer } = require('./lib/myfunc')
const { parsejid } = require('./lib/bot')
var pjson = require('./package.json');
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

//Prefix
global.PREFIX = ''
if (/\[(\W*)\]/.test(config.HANDLERS)) {
   PREFIX = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
   PREFIX = '.'
}

if (!fs.existsSync("./session.json")) {
	MakeSession(config.SESSION_ID, "./session.json").then(
    console.log("session occured")
    );
    }
    fs.readdirSync('./plugins/SQL/').forEach(plugin => {
    	if(path.extname(plugin).toLowerCase() == '.js') {
    		require('./plugins/SQL/' + plugin);
    		}
    		});
    		const plugindb = require('./plugins/SQL/plugin');
    		String.prototype.format = function() {
    			var i = 0,
    			args = arguments;
    			return this.replace(/{}/g, function() {
    				return typeof args[i] != 'undefined' ? args[i++] : '';
    				})
    				};
    				if (!Date.now) {
    					Date.now = function() {
    						return new Date()
    						.getTime();
    						}
    						}
    						Array.prototype.remove = function() {
    							var what, a = arguments,
    							L = a.length,
    							ax;
    							while (L && this.length) {
    								what = a[--L];
    								while ((ax = this.indexOf(what)) !== -1) {
    									this.splice(ax, 1);
    									}
    									}
    									return this;
    									};
    									async function BOSCO() { 
    										await config.DATABASE.sync();
    										console.log('Connecting...');
    										const { state, saveState } = useSingleFileAuthState(
    "./session.json",
    pino({ level: "silent" })
  );
  const conn = makeWASocket({
  	logger: pino({level: 'silent'}),
  	printQRInTerminal: true,
  	auth: state,
  	downloadHistory: false,
  	getMessage: async key => {			
  		return {
  			conversation: 'reconnected...'
  			}
  			}
  			});
  			store.bind(conn.ev)
  			setInterval(() => {
  				store.writeToFile("./src/store.json");
  				console.log("saved to store");
  				}, 30 * 60 * 1000);
  				conn.ev.on('connection.update', async(update) => {
  					const { connection, lastDisconnect } = update
  					if (connection === 'close') {
  						if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
  							BOSCO()
  							}
  							}else if (connection === 'open') {
  								console.log('conected ✅')
  								console.log('⬇️ Installing external plugins...');
  								var plugins = await plugindb.PluginDB.findAll();
  								plugins.map(async (plugin) => {
  									if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
  										var response = await got(plugin.dataValues.url);
  										if (response.statusCode == 200) {
  											fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
  											require('./plugins/' + plugin.dataValues.name + '.js');
  											}     
  											}
  											});
  											console.log('⬇️ Installing plugins...');
  											fs.readdirSync('./plugins').forEach(plugin => {
  												if(path.extname(plugin).toLowerCase() == '.js') {
  													require('./plugins/' + plugin);
  													}
  													});
  													let rtext = `\n\n     BOT STARTED RUNNING \n\n𔔁 PREFIX    : ${config.HANDLERS} \n𔔁 VERSION   : ${pjson.version} \n𔔁 PLUGINS   : ${events.commands.length}` 
  													await conn.sendMessage(conn.user.id,{ text : rtext })
  													console.log(rtext)
  													}
  													})
  													conn.ev.on('creds.update', saveState);
  													conn.ev.on("messages.upsert", async(m) => {
  														if (!m.messages && !m.count) return;
  														var msg = m.messages[0]
  														if (!msg.message) return
  														msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
  														if (msg.key && msg.key.remoteJid === 'status@broadcast') return
  														msg = smsg(conn, msg, store)
  														if (config.NO_ONLINE) {
  															await conn.sendPresenceUpdate('unavailable', msg.key.remoteJid);
  															}
  															if (config.BLOCKCHAT !== false) {
  																var abc = config.BLOCKCHAT.split(',');
  																if (msg.key.remoteJid.includes('@g.us') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return;
  																}
  																events.commands.map(
  																	async(command) => {
  																		var text_msg = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
  																		if (config.SUDO !== false) {
  																			var sudo = config.SUDO.split(',');
  																			if (config.WORKTYPE.toLowerCase().trim() === "private" && !sudo.includes(msg.sender.split('@')[0]) && !command.on) return
  																			if (config.WORKTYPE.toLowerCase().trim() === "public" && command.isOwner === true && !sudo.includes(msg.sender.split('@')[0]) && msg.sender != conn.user.id ) return
}
if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo') && msg.message && msg.message.imageMessage !== null && (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg)))) || (command.pattern !== undefined && command.pattern.test(text_msg)) || (command.on !== undefined && command.on === 'text' && text_msg) || (command.on !== undefined && (command.on === 'video') && msg.message && msg.message.videoMessage !== null && (command.pattern === undefined || (command.pattern !== undefined && command.pattern.test(text_msg))))) {
	let sendMsg = false
	if (!command.onlyPm === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
	else if (command.onlyGroup === msg.key.remoteJid.includes('@g.us')) sendMsg = true;
	if (sendMsg) {
		if (config.SEND_READ && command.on === undefined) {
			const key = {
				remoteJid: msg.key.remoteJid,
				id: msg.key.id, // id of the message you want to read
				participant: msg.key.participant // the ID of the user that sent the  message (undefined for individual chats)
				}
				await conn.readMessages([key])
				}
				var match = text_msg.match(command.pattern)
				function _0xeaab(){const _0x40c950=['reply_msg','mime','7375820OhFpMC','quotedMessage','1324592OhgQdq','412079ZmaQxi','1665ZJsrct','data','mimetype','1098vnvHuc','2KqlOSq','remoteJid','2892EbVGIJ','7315CgxdwP','1551888YbgoSZ','msg','includes','quotedmsg','isQuotedTeks','quoted','chatId','2254120zuUTgQ'];_0xeaab=function(){return _0x40c950;};return _0xeaab();}const _0x3b6610=_0x1310;(function(_0x3747ac,_0x5af992){const _0x2f3a8c=_0x1310,_0x1ca538=_0x3747ac();while(!![]){try{const _0x2c5b37=-parseInt(_0x2f3a8c(0x16c))/0x1*(parseInt(_0x2f3a8c(0x171))/0x2)+parseInt(_0x2f3a8c(0x16d))/0x3*(-parseInt(_0x2f3a8c(0x173))/0x4)+parseInt(_0x2f3a8c(0x166))/0x5+-parseInt(_0x2f3a8c(0x170))/0x6*(-parseInt(_0x2f3a8c(0x174))/0x7)+-parseInt(_0x2f3a8c(0x16b))/0x8+-parseInt(_0x2f3a8c(0x175))/0x9+parseInt(_0x2f3a8c(0x169))/0xa;if(_0x2c5b37===_0x5af992)break;else _0x1ca538['push'](_0x1ca538['shift']());}catch(_0x55f666){_0x1ca538['push'](_0x1ca538['shift']());}}}(_0xeaab,0x37bc3));const content=JSON['stringify'](msg['message']);conn['isQuotedTeks']=msg['mtype']==='extendedTextMessage'&&content[_0x3b6610(0x177)](_0x3b6610(0x16a));function _0x1310(_0x4a4591,_0xcdd5e9){const _0xeaab63=_0xeaab();return _0x1310=function(_0x131098,_0x6cef0f){_0x131098=_0x131098-0x164;let _0x4a6f08=_0xeaab63[_0x131098];return _0x4a6f08;},_0x1310(_0x4a4591,_0xcdd5e9);}conn[_0x3b6610(0x179)]?conn[_0x3b6610(0x167)]=msg[_0x3b6610(0x164)]['text']:conn[_0x3b6610(0x167)]='';conn[_0x3b6610(0x165)]=msg['key'][_0x3b6610(0x172)],conn[_0x3b6610(0x16e)]=msg,conn[_0x3b6610(0x178)]=msg[_0x3b6610(0x164)]?msg[_0x3b6610(0x164)]:msg,global[_0x3b6610(0x168)]=(conn[_0x3b6610(0x178)][_0x3b6610(0x176)]||conn[_0x3b6610(0x178)])[_0x3b6610(0x16f)]||'';
						try {
							await command.
							function(conn, match);
							} catch (error) {
								let errtex = `~_________~ 𝐄𝐑𝐑𝐎𝐑 𝐑𝐄𝐏𝐎𝐑𝐓 ~______~ \n\nCommand : ${command.pattern} \nMessage : ${match[0]} \n${error} \nJid : ${conn.data.key.remoteJid}`
								await conn.sendMessage(conn.user.id, { text : errtex } );
								console.log(error)
								}
								}
								}
								})
								})
								conn.download = async (message = conn.quotedmsg , filename = 'liza', attachExtension = true) => {
									let quoted = message.msg ? message.msg : message
									let mime = (message.msg || message).mimetype || ''
									let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
									const stream = await downloadContentFromMessage(quoted, messageType)
									let buffer = Buffer.from([])
									for await(const chunk of stream) {
										buffer = Buffer.concat([buffer, chunk])
										}
										let type = await FileType.fromBuffer(buffer)
										let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
										await fs.writeFileSync(trueFileName, buffer)
										return trueFileName 
										}
										conn.reply = async (tex) => {
											conn.sendMessage(conn.chatId, { text: tex }, { quoted: conn.data })
											}
											}
											setTimeout(() => {
												BOSCO();
												}, 3000);
