const Discord = require("discord.js");
const prefix = '%';

module.exports = {
    name: "nickmass",
    category: 'moderation',
    description: "Changes all changeable nicknames.",
    usage: "nickmass *nickname*",
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if (message.member.hasPermission('ADMINISTRATOR')) {
            let nick = message.content.slice((prefix+"nickmass").length)
            if(!nick) return message.channel.send("Please specify a nickname!")
        
            message.guild.members.cache.forEach(member => {
                member.setNickname(nick);
            });
            message.channel.send("Changing nicknames");
        }
        else {
            const noperms = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")
            message.channel.send(noperms);
        }
    }
}