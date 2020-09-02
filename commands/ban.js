const Discord = require("discord.js");

module.exports = {
    name: 'ban',
    execute(message, args){
        var member = message.mentions.members.first();
        if (!member) {
            return message.reply("please mention a user to ban!")
        }
        if(!member.hasPermission('ADMINISTRATOR')){
            member.ban().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been successfully banned!");
            })
        }
        else {
            return message.reply(member.displayName + " could not be banned!")
        }
    }
}

module.exports.config = {
    name: "ban",
    description: "Bans the mentioned user.",
    usage: "\%ban \@username",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}