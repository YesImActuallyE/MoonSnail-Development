//requirements for the bots commands and stuff
var port = process.env.PORT || 5000;
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '%';
const github = ("https://github.com/seasnail8169/MEE69-Development.git")
const creator = ("seasnail8169")
const BotIcon = ("https://i.imgur.com/CeWKgpa.png")
const chalk = require('chalk');
var setTitle = require('console-title');
const readline = require("readline");
var center = require("center-align");
var colors = require("colors");
const fs = require('fs');
client.commands = new Discord.Collection();

const BotJoinMessage = new Discord.RichEmbed()
                    .setTitle("Hello, I'm MEE69.")
                    .setURL(github)
                    .setColor([219, 22, 206])
                    .setThumbnail(BotIcon)
                    .setDescription("The prefix for my commands is \"%\" and you can view my commands by typing \" %commands\".")
                    .setFooter('Created by seasnail8169', 'https://i.ibb.co/DtzjWZf/pfp.png');

const JoinMessage = ("Welcome, ${member}!");
const LeaveMessage = ("Rip ${member} left.")

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

//things to do on startup

client.once('ready', async () => {

    console.log(center(`
    ╦════════════════════════╦
    ║                        ║
    ║        NukeBot         ║
    ║ Made by seasnail#8169  ║
    ║                        ║
    ╩════════════════════════╩
    `.blue, 112));

    console.log((`STATUS: `) + (`NukeBot is online! Logged in as \[${client.user.tag}\] OwO`));
	let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(("INVITE: ")+(link));
    console.log("SERVERS:");
    client.guilds.forEach((guild) => {
        console.log(('-') + guild.name);
    });
    client.user.setActivity('\%help' , { type: 'LISTENING'})
});

//when the bot joins a server
client.on("guildCreate", guild => {
    let defaultChannel = "";
    guild.channels.forEach((channel) => {
        if(channel.type == "text" && defaultChannel == "") {
            if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                defaultChannel = channel;
            }
        }
    })
    defaultChannel.send(BotJoinMessage)
});

//when a user joins a server the bot is in
client.on("guildMemberAdd", member => {
    console.log('ACTIVITY: User ' + member.user.tag + 'has joined the server!');

    var role = member.guild.roles.find('name', 'Member');
    member.addRole(role);
});

//when a member leaves a server the bot is in
client.on("guildMemberRemove", member => {

});

//whenever the bot sees a message it will do these things
client.on('message', message =>{
    //checks the message to see if it has the prefix, if it doesn't have the prefix it will just ignore it
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //this is where all the commands are
    switch(command) {
        case 'avatar' : {
            client.commands.get('avatar').execute(message, args);
            console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
            break;
        }
        case 'ban' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('ban').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'checkjoin' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                message.channel.send(JoinMessage)
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'clearchannels' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('clearchannels').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'commands' : {
            client.commands.get('commands').execute(message, args);
            console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            break;
        }
        case 'help' : {
            client.commands.get('commands').execute(message, args);
            console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            break;
        }
        case 'cum' : {
            console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            return message.reply("nice load!")
            break;
        }
        case 'condom' : {
            console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            return message.reply("i am out of condoms, sorry!");
            break;
        }
        case 'createchannels' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('createchannels').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'kick' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('kick').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'leave' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('leave').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'mute' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('mute').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'nickbot' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('nickbot').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'nickmass' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('nickmass').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'prune' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('prune').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'purge' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                client.commands.get('purge').execute(message, args);
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'restart' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
                message.channel.send("Restarting…")
                client.destroy();
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'reload' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
                message.channel.send("Restarting…")
                client.destroy();            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'r' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
                message.channel.send("Restarting…")
                client.destroy();            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'shutdown' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
                process.exit();
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
        case 'testperms' : {
            if(message.member.hasPermission('ADMINISTRATOR')){
                console.log("ACTIVITY: " +   message.author.username + " ran the command: " + message.content)
                client.commands.get('testperms').execute(message, args);
            }
            else {
                return message.reply("you don't have permission!")
            }
            break;
        }
    }
});

//nice
client.login(process.env.TOKEN);