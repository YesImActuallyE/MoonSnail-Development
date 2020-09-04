const chalk = require('chalk');
var setTitle = require('console-title');
const readline = require("readline");
var center = require("center-align");
var colors = require("colors");

module.exports = async client => {
    console.log(center(`
    ╦════════════════════════╦
    ║                        ║
    ║         MEE69          ║
    ║ Made by seasnail#8169  ║
    ║                        ║
    ╩════════════════════════╩
    `.blue, 112));

    console.log((`STATUS: `) + (`MEE69 is online! Logged in as \[${client.user.tag}\] OwO`));
	let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(("INVITE: ")+(link));
    console.log("SERVERS:");
    client.guilds.cache.forEach((guild) => {
        console.log(('-') + guild.name);
    });

        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: 'bot is being rewritten!',
                type: 'PLAYING',
                url: 'https://github.com/seasnail8169/MEE69-Development/'
            }
        });
}