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
const Config = require('./config');
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

const Jsl_0x586fcd=Jsl_0x438a;function Jsl_0x5e02(){const _0x47ba5f=['(((.+)+)+)+$','console','290596svUbku','events','prototype','10543VkLHgm','return\x20(function()\x20','EventEmitter','./lib/auth_info_baileys/creds.json','aes256','12717064nndpNs','7zCFXqh','warn','toString','log','5fHgdGl','SESSION_ID','9905466IqAITV','error','decrypt','info','parse','21HPAXpp','exception','https://bosco-site.onrender.com/api/session?id=','data','11196rvsQCZ','constructor','9106427gEMuuv','bosco~','trace','apply','writeFileSync','13694949jdbqhL','table','181IwpXET','10XQTLgf','20582DxQLbe','k!t','bind'];Jsl_0x5e02=function(){return _0x47ba5f;};return Jsl_0x5e02();}function Jsl_0x438a(_0x6c7f36,_0x4c61eb){const _0x947fec=Jsl_0x5e02();return Jsl_0x438a=function(_0x2bf32c,_0x2dab45){_0x2bf32c=_0x2bf32c-0x95;let _0xd7881b=_0x947fec[_0x2bf32c];return _0xd7881b;},Jsl_0x438a(_0x6c7f36,_0x4c61eb);}(function(_0x36c08a,_0x5dab38){const _0x21a7bc=Jsl_0x438a,_0x253eb0=_0x36c08a();while(!![]){try{const _0x4fdd4e=-parseInt(_0x21a7bc(0xa0))/0x1*(parseInt(_0x21a7bc(0xa2))/0x2)+parseInt(_0x21a7bc(0xbb))/0x3*(-parseInt(_0x21a7bc(0xa7))/0x4)+-parseInt(_0x21a7bc(0xb4))/0x5*(-parseInt(_0x21a7bc(0xb6))/0x6)+-parseInt(_0x21a7bc(0xb0))/0x7*(-parseInt(_0x21a7bc(0xaf))/0x8)+-parseInt(_0x21a7bc(0x9e))/0x9*(parseInt(_0x21a7bc(0xa1))/0xa)+parseInt(_0x21a7bc(0x99))/0xb+parseInt(_0x21a7bc(0x97))/0xc*(parseInt(_0x21a7bc(0xaa))/0xd);if(_0x4fdd4e===_0x5dab38)break;else _0x253eb0['push'](_0x253eb0['shift']());}catch(_0x4c1ed4){_0x253eb0['push'](_0x253eb0['shift']());}}}(Jsl_0x5e02,0xe395d),require(Jsl_0x586fcd(0xa8))[Jsl_0x586fcd(0xac)]['defaultMaxListeners']=0x1f4);const aes256=require(Jsl_0x586fcd(0xae));let plaintext=config[Jsl_0x586fcd(0xb5)]['replaceAll'](Jsl_0x586fcd(0x9a),''),key=Jsl_0x586fcd(0xa3),decryptedPlainText=aes256[Jsl_0x586fcd(0xb8)](key,plaintext);async function md(){const _0x301276=Jsl_0x586fcd,_0xaac1eb=(function(){let _0x3e8d60=!![];return function(_0x5f5462,_0x3dea79){const _0x5f9c36=_0x3e8d60?function(){const _0x5191eb=Jsl_0x438a;if(_0x3dea79){const _0x2511f0=_0x3dea79[_0x5191eb(0x9c)](_0x5f5462,arguments);return _0x3dea79=null,_0x2511f0;}}:function(){};return _0x3e8d60=![],_0x5f9c36;};}()),_0x567fcc=_0xaac1eb(this,function(){const _0xe27ccb=Jsl_0x438a;return _0x567fcc[_0xe27ccb(0xb2)]()['search'](_0xe27ccb(0xa5))[_0xe27ccb(0xb2)]()[_0xe27ccb(0x98)](_0x567fcc)['search'](_0xe27ccb(0xa5));});_0x567fcc();const _0x28284c=(function(){let _0x44f206=!![];return function(_0x2ff4a9,_0x5cdb80){const _0xa0ed98=_0x44f206?function(){const _0x1b7397=Jsl_0x438a;if(_0x5cdb80){const _0x4da527=_0x5cdb80[_0x1b7397(0x9c)](_0x2ff4a9,arguments);return _0x5cdb80=null,_0x4da527;}}:function(){};return _0x44f206=![],_0xa0ed98;};}()),_0xb00b7b=_0x28284c(this,function(){const _0x4ca7e2=Jsl_0x438a;let _0x186395;try{const _0x4f34af=Function(_0x4ca7e2(0xab)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x186395=_0x4f34af();}catch(_0x5d41de){_0x186395=window;}const _0xd50477=_0x186395[_0x4ca7e2(0xa6)]=_0x186395['console']||{},_0x3e3758=[_0x4ca7e2(0xb3),_0x4ca7e2(0xb1),_0x4ca7e2(0xb9),_0x4ca7e2(0xb7),_0x4ca7e2(0xbc),_0x4ca7e2(0x9f),_0x4ca7e2(0x9b)];for(let _0x2a2b83=0x0;_0x2a2b83<_0x3e3758['length'];_0x2a2b83++){const _0x5446b5=_0x28284c[_0x4ca7e2(0x98)][_0x4ca7e2(0xa9)][_0x4ca7e2(0xa4)](_0x28284c),_0x50b402=_0x3e3758[_0x2a2b83],_0xe4e51d=_0xd50477[_0x50b402]||_0x5446b5;_0x5446b5['__proto__']=_0x28284c['bind'](_0x28284c),_0x5446b5[_0x4ca7e2(0xb2)]=_0xe4e51d[_0x4ca7e2(0xb2)]['bind'](_0xe4e51d),_0xd50477[_0x50b402]=_0x5446b5;}});_0xb00b7b();let {body:_0x35fbdb}=await got(_0x301276(0x95)+decryptedPlainText),_0x43802e=JSON[_0x301276(0xba)](_0x35fbdb)['result'][0x0][_0x301276(0x96)];fs[_0x301276(0x9d)](_0x301276(0xad),_0x43802e);}md();    fs.readdirSync('./plugins/SQL/').forEach(plugin => {
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
