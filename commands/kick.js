const Discord = require("discord.js");

module.exports = {
    name: 'kick',
    execute(message, args){
        var member = message.mentions.members.first();
        if(!member.hasPermission('ADMINISTRATOR')){
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been successfully kicked!");
            })
        }
        else {
            return message.reply(member.displayName + " could not be kicked!")
        }
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks the mentioned user.",
    usage: "\%kick \@username",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}