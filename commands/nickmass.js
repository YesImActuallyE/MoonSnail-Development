const Discord = require("discord.js");
const prefix = '%';

module.exports = {
    name: 'nickmass',
    execute(message, args){
        let nick = message.content.slice((prefix+"nickmass").length)
        if(!nick) return message.channel.send("Please specify a nickname!")
    
        message.guild.members.forEach(member => {
            if(!member.hasPermission('ADMINISTRATOR')){
                member.setNickname(nick);
            }
        });
        message.channel.send("Changing nicknames");
    }
}

module.exports.config = {
    name: "nickmass",
    description: "Changes all changeable nicknames.",
    usage: "\%nickmass *nickname*",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}