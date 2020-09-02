const Discord = require("discord.js");

module.exports = {
    name: 'mute',
    execute(message, args){
        message.channel.send("you need to actually write this command you retard")
    }
}

module.exports.config = {
    name: "mute",
    description: "Mutes the mentioned user.",
    usage: "\%mute \@username",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}

