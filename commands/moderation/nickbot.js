const Discord = require("discord.js");
const prefix = '%';

module.exports = {
    name: "nickbot",
    category: 'moderation',
    description: "Changes the bots nickname.",
    usage: "botnick *nickname*",
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if (message.member.hasPermission('ADMINISTRATOR')) {
            let nick = message.content.slice((prefix+"nickbot").length)
            if(!nick) return message.channel.send("Please specify a nickname!")
            message.guild.me.setNickname(nick)
            message.channel.send("Updated bots nickname.");
        }
        else {
            const noperms = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")
            message.channel.send(noperms);
        }        
    }
}