const Bosco = require('../lib/events')
const got = require("got");
const Heroku = require("heroku-client");
const Config = require("../config");
const heroku = new Heroku({ token: Config.HEROKU.API_KEY });
const baseURI = "/apps/" + Config.HEROKU.APP_NAME;
const simpleGit = require("simple-git");
const { runtime, prefix } = require("../lib/bot");
const git = simpleGit();
const exec = require("child_process").exec;

Bosco.addCMD(
	{
		pattern: "restart",
		isOwner: true,
		desc: "Restart Bot",
		type: "heroku",
		},
		async (message) => {
			await message.reply('_Restarting_');
			await heroku.delete(baseURI + "/dynos").catch(async (error) => {
				await message.reply(`HEROKU : ${error.body.message}`);
				});
				}
				);

Bosco.addCMD(
	{
		pattern: "shutdown",
		isOwner: true,
		desc: "Dyno off",
		type: "heroku",
		},
		async (message) => {
			await heroku
.get(baseURI + "/formation")
.then(async (formation) => {
	await message.reply(`_Shutting down._`);
	await heroku.patch(baseURI + "/formation/" + formation[0].id, {
		body: {
			quantity: 0,
			},
			});
			})
			.catch(async (error) => {
				await message.reply(`HEROKU : ${error.body.message}`);
				});
				}
				);

Bosco.addCMD(
	{
		pattern: 'dyno',
		isOwner: true,	
		desc: 'Quota details',
		type: 'heroku',
		},
		async (message, match) => {	
			heroku
			.get('/account')
			.then(async (account) => {	
				url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"		
				headers = {			
					"User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",			
					"Authorization": "Bearer " + Config.HEROKU.API_KEY,	
						"Accept": "application/vnd.heroku+json; version=3.account-quotas",	
						}		
						await got(url, {			headers: headers		})
						.then(async (res) => {			
							const resp = JSON.parse(res.body);
							total_quota = Math.floor(resp.account_quota);			
							quota_used = Math.floor(resp.quota_used);			
							percentage = Math.round((quota_used / total_quota) * 100);			
							remaining = total_quota - quota_used;			
							await message.reply(				"Total Quota" + ": ```{}```\n\n".format(runtime(total_quota)) +				"Quota used" + ": ```{}```\n".format(runtime(quota_used)) +				"Percentage" + ": ```{}```\n\n".format(percentage) +				"Quota remaining" + ": ```{}```\n".format(runtime(remaining))			);		
							})
							.catch(async (err) => {			
								await message.reply(err.message);		
								});	
								});
								}); 
								

Bosco.addCMD(
	{
		pattern: "setvar ?(.*)",
		isOwner: true,
		desc: "Set heroku env",
		type: "heroku",
		},
		async (message, match) => {
			match = match[1]
			if (!match)
			return await message.reply(`_Example: .setvar SUDO:917736622139_`);
			const [key, value] = match.split(":");
			if (!key || !value)
			return await message.reply(`_Example: .setvar SUDO:917736622139_`);
			heroku
.patch(baseURI + "/config-vars", {
	body: {
		[key.toUpperCase()]: value,
		},
		})
		.then(async () => {
			await message.reply(`_${key.toUpperCase()}: ${value}_`);
			})
			.catch(async (error) => {
				await message.reply(`HEROKU : ${error.body.message}`);
				});
				}
				);

Bosco.addCMD(
	{
		pattern: "delvar ?(.*)",
		isOwner: true,
		desc: "Delete Heroku env",
		type: "heroku",
		},
		async (message, match) => {
			match = match[1]
			if (!match) return await message.reply(`_Example: delvar sudo_`);
			heroku
.get(baseURI + "/config-vars")
.then(async (vars) => {
	const key = match.trim().toUpperCase();
	if (vars[key]) {
		await heroku.patch(baseURI + "/config-vars", {
			body: {
				[key]: null,
				},
				});
				return await message.reply(`_Deleted ${key}_`);
				}
				await message.reply(`_${key} not found_`);
				})
				.catch(async (error) => {
					await message.reply(`HEROKU : ${error.body.message}`);
					});
					}
					);

Bosco.addCMD(
	{
		pattern: "getvar ?(.*)",
		isOwner: true,
		desc: "Show heroku env",
		type: "heroku",
		},
		async (message, match) => {
			match = match[1]
			if (!match) return await message.reply(`_Example: getvar sudo_`);
			const key = match.trim().toUpperCase();
			heroku
.get(baseURI + "/config-vars")
.then(async (vars) => {
	if (vars[key]) {
		return await message.reply(
			"_{} : {}_".replace("{}", key).replace("{}", vars[key])
			);
			}
			await message.reply(`${key} not found`);
			})
			.catch(async (error) => {
				await message.reply(`HEROKU : ${error.body.message}`);
				});
				}
				);

Bosco.addCMD(
	{
		pattern: "allvar",
		isOwner: true,
		desc: "Heroku all env",
		type: "heroku",
		},
		async (message) => {
			let msg = "```Here your all Heroku vars\n\n\n";
			heroku
.get(baseURI + "/config-vars")
.then(async (keys) => {
	for (const key in keys) {
		msg += `${key} : ${keys[key]}\n\n`;
		}
		return await message.reply(msg + "```");
		})
		.catch(async (error) => {
			await message.reply(`HEROKU : ${error.body.message}`);
			});
			}
			);

Bosco.addCMD(
	{
		pattern: "update ?(.*)",
		isOwner: true,
		type: "heroku",
		desc: "Checks for update.",
		},
		async (message, match) => {
			match = match[1]
			if (match === "now") {
				await git.fetch();
				var commits = await git.log([
					Config.BRANCH + "..origin/" + Config.BRANCH,
					]);
					if (commits.total === 0) {
						return await message.reply("_Already on latest version_");
						} else {
							await message.reply("_Updating_");
							try {
								var app = await heroku.get("/apps/" + Config.HEROKU.APP_NAME);
								} catch {
									await message.reply("_Invalid Heroku Details_");
									await new Promise((r) => setTimeout(r, 1000));
									}
									git.fetch("upstream", Config.BRANCH);
        git.reset("hard", ["FETCH_HEAD"]);
        var git_url = app.git_url.replace(
        	"https://",
        	"https://api:" + Config.HEROKU.API_KEY + "@"
        	);
        	try {  
        		await git.addRemote("heroku", git_url);
        		} catch {
        			console.log("heroku remote error");
        			}
        			await git.push("heroku", Config.BRANCH);
        			await message.reply("UPDATED");
        			}
        			}
        			await git.fetch();
        			var commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH]);
        			if (commits.total === 0) {
        				await message.reply("_Already on latest version_");
        				} else {
        					var availupdate = "ᴜᴘᴅᴀᴛᴇs ᴀᴠᴀɪʟᴀʙʟᴇ \n\n";
        					commits["all"].map((commit, num) => {
        						availupdate += num + 1 + " . " + commit.message + "\n";
      });
      /*return await message.sendMessage(message.chatId, {
      	text: availupdate,
      	footer: "click here to update",
      	buttons: [
      	{
      		buttonId: `${prefix}update now`,
      		buttonText: { displayText: "update now" },
      		},
      		],
      		});*/
      		return await message.reply(availupdate + "\n" + `Type _${prefix}update now_ to update`)
      		}
      		}
      		);
