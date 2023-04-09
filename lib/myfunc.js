"use strict";
const { useMultiFileAuthState, BufferJSON } = require("@adiwajshing/baileys");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch')
const jimp = require("jimp")
const chalk = require('chalk')
const {getDevice,getContentType, proto } = require('@adiwajshing/baileys');
const { sizeFormatter  } = require('human-readable')
const args = body.trim().split(/ +/).slice(1)
const text = (q = args.join(" "))

exports.smsg = (conn, m, store) => {

let M = proto.WebMessageInfo   
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.now = m.messageTimestamp
m.fromMe = m.key.fromMe
m.isGroup = m.key.remoteJid.endsWith('@g.us')
m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
m.device = getDevice(m.id)
}
    
    
if (m.message) {

try{
m.type = getContentType(m.message)
} catch {
m.type = null
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.type])
//m.text = m.msg.text || m.msg.caption || m.msg.contentText || m.msg || ''
//m.body = m.message.conversation || m.message[m.type].caption || m.message[m.type].text || (m.type == 'listResponseMessage') && m.message[m.type].singleSelectReply.selectedRowId || (m.type == 'buttonsResponseMessage') && m.message[m.type].selectedButtonId || m.type
//m.msg = m.message[m.type]
//let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []  
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]

if (['productMessage'].includes(type)) {
type = Object.keys(m.quoted)[0]
m.quoted = m.quoted[type]
}

if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
        
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || ''
m.quoted.device = getDevice(m.quoted.id)
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.quoted.type = Object.keys(m.quoted)[0]
let ane = m.quoted
m.quoted.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'buttonsMessage') && ane.buttonsMessage.contentText ? ane.buttonsMessage.contentText : ""
m.getQuotedObj = m.getQuotedMessage = async () => {
			if (!m.quoted.id) return false
			let q = await store.loadMessage(m.chat, m.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }

let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
            
 /**
* 
* @returns 
*/
m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
            
/**
* 
* @param {*} jid 
* @param {*} forceForward 
* @param {*} options 
* @returns 
*/
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)
            
/**
*
* @returns
*/
m.quoted.download = () => conn.downloadMediaMessage(m.quoted)
}
}

 // if (m.msg.url) 
m.download = () => conn.downloadMediaMessage(m.msg)
//m.text = (m.type == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || ''
 
/**
* Reply to this message
* @param {String|Object} text 
* @param {String|false} chatId 
* @param {Object} options 
*/
m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, detectLinks: false, ...options }) 

/**
* 
* @param {*} jid 
* @param {*} forceForward 
* @param {*} options 
* @returns 
*/
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)



    
    
    
    
    


      


return m
}

exports.checkWAVersion = async () => {
    const { data } = await axios.get('https://web.whatsapp.com/check-update?version=1&platform=web')
    return data.currentVersion.split('.').map(x => parseInt(x))
}


exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.getGroupAdmins = function(participants){
    let admins = []
	for (let i of participants) {
		i.admin !== null ? admins.push(i.id) : ''
	}
	return admins
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.removeEmojis = (string) => {
	var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	return string.replace(regex, '');
}

exports.calculate_age = (dob) => { // new Date("month/date/year")
    var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}



exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

exports.getCase = (cases) => {
return "case  "+`'${cases}'`+fs.readFileSync("./message/msg.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}

exports.makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

exports.kyun = (seconds) =>{
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const _0x3be2e6=_0x3844;(function(_0x5a812c,_0x4a75fa){const _0x4a7035=_0x3844,_0x57be34=_0x5a812c();while(!![]){try{const _0x5a11a4=-parseInt(_0x4a7035(0x1f1))/0x1*(parseInt(_0x4a7035(0x20b))/0x2)+-parseInt(_0x4a7035(0x201))/0x3+-parseInt(_0x4a7035(0x204))/0x4*(parseInt(_0x4a7035(0x206))/0x5)+parseInt(_0x4a7035(0x1f2))/0x6+parseInt(_0x4a7035(0x1fb))/0x7+parseInt(_0x4a7035(0x1f7))/0x8*(-parseInt(_0x4a7035(0x208))/0x9)+parseInt(_0x4a7035(0x203))/0xa;if(_0x5a11a4===_0x4a75fa)break;else _0x57be34['push'](_0x57be34['shift']());}catch(_0x32d904){_0x57be34['push'](_0x57be34['shift']());}}}(_0x2265,0x78016));const KEY_MAP={'pre-key':_0x3be2e6(0x1fe),'session':_0x3be2e6(0x207),'sender-key':'senderKeys','app-state-sync-key':_0x3be2e6(0x1f9),'app-state-sync-version':_0x3be2e6(0x20a),'sender-key-memory':_0x3be2e6(0x20c)};function _0x3844(_0xb05ea9,_0x123849){const _0x2265de=_0x2265();return _0x3844=function(_0x38449e,_0x1e43e6){_0x38449e=_0x38449e-0x1f1;let _0x1ec2da=_0x2265de[_0x38449e];return _0x1ec2da;},_0x3844(_0xb05ea9,_0x123849);}function JSONreplacer(_0x501346,_0x3b11b1){const _0x564c92=_0x3be2e6;if(_0x3b11b1==null)return;const _0x5d8c71=BufferJSON[_0x564c92(0x1f6)](_0x501346,_0x3b11b1);return _0x5d8c71;}const fixFileName=_0x30b12a=>_0x30b12a?.[_0x3be2e6(0x1fd)](/\//g,'__')?.['replace'](/:/g,'-');module[_0x3be2e6(0x20e)]={async 'MultiState'(_0x2d4202,_0x189d78,_0x38d001){const _0x5bce24=_0x3be2e6,_0x3e0ce6=JSON[_0x5bce24(0x200)](await fs[_0x5bce24(0x202)][_0x5bce24(0x1f3)](_0x2d4202,_0x5bce24(0x1ff)),BufferJSON[_0x5bce24(0x20f)]),_0x56d64c=_0x3e0ce6[_0x5bce24(0x209)]||{},_0x4a2850=_0x3e0ce6[_0x5bce24(0x1f8)]||{},_0x33fa84=(_0x11e334,_0x2d05e0)=>{const _0x1ff682=_0x5bce24;return fs[_0x1ff682(0x202)][_0x1ff682(0x205)](path[_0x1ff682(0x1fc)](_0x189d78,fixFileName(_0x2d05e0)),JSON['stringify'](_0x11e334,JSONreplacer()));},_0x2365c1=(_0x4a61d8,_0x19cb79)=>{return Object['keys'](_0x4a61d8)['find'](_0x1236c6=>_0x4a61d8[_0x1236c6]===_0x19cb79);},_0x27246c=Object[_0x5bce24(0x210)](Object[_0x5bce24(0x1f5)](_0x4a2850)[_0x5bce24(0x1fa)](([_0x537430,_0x25d271])=>_0x25d271&&[_0x2365c1(KEY_MAP,_0x537430),_0x25d271])[_0x5bce24(0x211)](Boolean));await Promise[_0x5bce24(0x1f4)]([_0x33fa84(_0x56d64c,_0x5bce24(0x20d)),_0x38d001]);}};function _0x2265(){const _0x2ae211=['replace','preKeys','utf8','parse','1147524HBUCJj','promises','13046070szpXMm','276jbRmDx','writeFile','47335Rgmosh','sessions','189zWRusp','creds','appStateVersions','82kGIGzR','senderKeyMemory','creds.json','exports','reviver','fromEntries','filter','3220MmGzEd','261672CvCVaC','readFile','all','entries','replacer','118240sIbkmD','keys','appStateSyncKeys','map','4350178ofiuOH','join'];_0x2265=function(){return _0x2ae211;};return _0x2265();}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
