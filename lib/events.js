var config = require('../config');
var Commands = [];

function addCMD(info, func) {
	var types = ['photo', 'image', 'text', 'message'];
	var infos = {
		isOwner: info['isOwner'] === undefined ? false : info['isOwner'], // Or Sudo
		onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
		onlyPm: info['onlyPm'] === undefined ? false : info['onlyPm'],
		desc: info['desc'] === undefined ? '' : info['desc'],
		dontAddCommandList: info['dontAddCommandList'] === undefined ? false : info['dontAddCommandList'],
		type: info['type'] === undefined ? '' : info['type'],
		function: func
};
if (info['on'] === undefined && info['pattern'] === undefined) {
	infos.on = 'message';
	infos.fromMe = false;
	} else if (info['on'] !== undefined && types.includes(info['on'])) {
		infos.on = info['on'];
		if (info['pattern'] !== undefined) {
			infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
			}
			} else {
				infos.pattern = new RegExp((info['handler'] === undefined || info['handler'] === true ? config.HANDLERS : '') + info.pattern, (info['flags'] !== undefined ? info['flags'] : ''));
				}
				Commands.push(infos);
				return infos;
				}
				module.exports = {
					addCMD: addCMD,
					commands: Commands
}
