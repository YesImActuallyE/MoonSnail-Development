const Discord = require("discord.js");

module.exports = {
    name: 'leave',
    execute(message, args){
        message.guild.leave();
    }
}

module.exports.config = {
    name: "leave",
    description: "Makes the bot leave the server.",
    usage: "\%leave",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}