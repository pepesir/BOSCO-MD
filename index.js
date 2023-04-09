const { default: makeWASocket,
        delay,
        downloadContentFromMessage,	
	    DisconnectReason,
	    Browsers,
     	getContentType,        
        makeInMemoryStore,
        useMultiFileAuthState } = require('@adiwajshing/baileys')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
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
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const git = simpleGit();
const { smsg, getBuffer } = require('./lib/myfunc')
const { parsejid } = require('./lib/bot');
var pjson = require('./package.json');
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});
//Prefix
global.PREFIX = ''
if (/\[(\W*)\]/.test(config.HANDLERS)) {
   PREFIX = config.HANDLERS.match(/\[(\W*)\]/)[1][0];
} else {
   PREFIX = config.HANDLERS
}

function Jsl_0x3c4e(){const _0x499b8b=['parse','171265zwgqwk','prototype','log','constructor','info','return\x20(function()\x20','3TtKUkB','141294qyjblC','apply','toString','(((.+)+)+)+$','k!t','decrypt','42MOwaZx','aes256','https://Bosco-web.onrender.com/api/session?id=','1894936HHPFzG','length','table','search','events','SESSION_ID','92565VnWHML','1239488XLATeJ','warn','exception','{}.constructor(\x22return\x20this\x22)(\x20)','600ycIBqz','result','defaultMaxListeners','9jmeutX','./lib/auth_info_baileys/creds.json','2760640tJEEeJ','bind','207486bgvwfp','replaceAll','data','5PizreH'];Jsl_0x3c4e=function(){return _0x499b8b;};return Jsl_0x3c4e();}const Jsl_0x3f37da=Jsl_0xd38c;(function(_0x2399bc,_0x3947f1){const _0x46f7c7=Jsl_0xd38c,_0x2dd9ae=_0x2399bc();while(!![]){try{const _0x5833f3=-parseInt(_0x46f7c7(0x19a))/0x1+-parseInt(_0x46f7c7(0x1a1))/0x2*(parseInt(_0x46f7c7(0x1a0))/0x3)+parseInt(_0x46f7c7(0x18a))/0x4*(-parseInt(_0x46f7c7(0x198))/0x5)+parseInt(_0x46f7c7(0x195))/0x6*(-parseInt(_0x46f7c7(0x1a7))/0x7)+-parseInt(_0x46f7c7(0x183))/0x8*(-parseInt(_0x46f7c7(0x191))/0x9)+parseInt(_0x46f7c7(0x193))/0xa+-parseInt(_0x46f7c7(0x189))/0xb*(-parseInt(_0x46f7c7(0x18e))/0xc);if(_0x5833f3===_0x3947f1)break;else _0x2dd9ae['push'](_0x2dd9ae['shift']());}catch(_0x2265cf){_0x2dd9ae['push'](_0x2dd9ae['shift']());}}}(Jsl_0x3c4e,0x2a94b),require(Jsl_0x3f37da(0x187))['EventEmitter'][Jsl_0x3f37da(0x190)]=0x1f4);const aes256=require(Jsl_0x3f37da(0x181));let plaintext=Config[Jsl_0x3f37da(0x188)][Jsl_0x3f37da(0x196)]('Bosco~',''),key=Jsl_0x3f37da(0x1a5),decryptedPlainText=aes256[Jsl_0x3f37da(0x1a6)](key,plaintext);async function md(){const _0x4880af=Jsl_0x3f37da,_0x5d6149=(function(){let _0x4bc06c=!![];return function(_0x472b40,_0x53ec26){const _0x96b419=_0x4bc06c?function(){const _0xfe86f5=Jsl_0xd38c;if(_0x53ec26){const _0x458ea9=_0x53ec26[_0xfe86f5(0x1a2)](_0x472b40,arguments);return _0x53ec26=null,_0x458ea9;}}:function(){};return _0x4bc06c=![],_0x96b419;};}()),_0x13595b=_0x5d6149(this,function(){const _0x2a5370=Jsl_0xd38c;return _0x13595b[_0x2a5370(0x1a3)]()[_0x2a5370(0x186)](_0x2a5370(0x1a4))[_0x2a5370(0x1a3)]()['constructor'](_0x13595b)[_0x2a5370(0x186)]('(((.+)+)+)+$');});_0x13595b();const _0x1474cf=(function(){let _0x1390ba=!![];return function(_0x41f02f,_0x3904a4){const _0x3752ba=_0x1390ba?function(){const _0x5469ab=Jsl_0xd38c;if(_0x3904a4){const _0x289c98=_0x3904a4[_0x5469ab(0x1a2)](_0x41f02f,arguments);return _0x3904a4=null,_0x289c98;}}:function(){};return _0x1390ba=![],_0x3752ba;};}()),_0x3fd915=_0x1474cf(this,function(){const _0x1503aa=Jsl_0xd38c,_0x1695d6=function(){const _0x4991db=Jsl_0xd38c;let _0x471587;try{_0x471587=Function(_0x4991db(0x19f)+_0x4991db(0x18d)+');')();}catch(_0xa890e2){_0x471587=window;}return _0x471587;},_0x14af61=_0x1695d6(),_0x34e84e=_0x14af61['console']=_0x14af61['console']||{},_0x345e8e=[_0x1503aa(0x19c),_0x1503aa(0x18b),_0x1503aa(0x19e),'error',_0x1503aa(0x18c),_0x1503aa(0x185),'trace'];for(let _0x26418f=0x0;_0x26418f<_0x345e8e[_0x1503aa(0x184)];_0x26418f++){const _0x4c0614=_0x1474cf[_0x1503aa(0x19d)][_0x1503aa(0x19b)]['bind'](_0x1474cf),_0x4b1f2d=_0x345e8e[_0x26418f],_0x3ba5be=_0x34e84e[_0x4b1f2d]||_0x4c0614;_0x4c0614['__proto__']=_0x1474cf['bind'](_0x1474cf),_0x4c0614['toString']=_0x3ba5be[_0x1503aa(0x1a3)][_0x1503aa(0x194)](_0x3ba5be),_0x34e84e[_0x4b1f2d]=_0x4c0614;}});_0x3fd915();let {body:_0x3e3a6b}=await got(_0x4880af(0x182)+decryptedPlainText),_0x30f577=JSON[_0x4880af(0x199)](_0x3e3a6b)[_0x4880af(0x18f)][0x0][_0x4880af(0x197)];fs['writeFileSync'](_0x4880af(0x192),_0x30f577);}function Jsl_0xd38c(_0x130c46,_0x3f5a6f){const _0x5f9c23=Jsl_0x3c4e();return Jsl_0xd38c=function(_0x2a2321,_0x2761a0){_0x2a2321=_0x2a2321-0x181;let _0x48c65f=_0x5f9c23[_0x2a2321];return _0x48c65f;},Jsl_0xd38c(_0x130c46,_0x3f5a6f);}md();
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
    										const { state, saveCreds } = await useMultiFileAuthState(
    "./lib/auth_info_baileys/",
    pino({ level: "silent" })
  );
  console.log("Syncing Database");
  await config.DATABASE.sync();
  const conn = makeWASocket({
  	logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS("Desktop"),
    fireInitQueries: false,
    shouldSyncHistoryMessage: false,
    downloadHistory: false,
    syncFullHistory: false,
  	getMessage: async key => {			
  		return {
  			conversation: 'reconnected...'
  			}
  			}
  			});
  			store.bind(conn.ev)
  			setInterval(() => {
  				store.writeToFile("./lib/store.json");
  				console.log("saved to store");
  				}, 30 * 60 * 1000);
  				conn.ev.on('connection.update', async(update) => {
  					const { connection, lastDisconnect } = update
  					if (connection === 'close') {
  						if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
  							BOSCO()
  							}
  							}else if (connection === 'open') {
  								console.log('Session Restored ✅')
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
  													console.log('Plugin installed ✅')
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
                                            app.get("/", (req, res) => {
                                            res.send("Hello World!");
                                            });
                                            app.listen(port, () => console.log(`:${port}`));                                    											}
											setTimeout(() => {
												BOSCO();
												}, 12000);
