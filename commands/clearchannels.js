const Discord = require("discord.js");

module.exports = {
    name: 'clearchannels',
    execute(message, args){
        message.guild.channels.forEach(channel => {
            channel.delete()
        });
    }
}

module.exports.config = {
    name: "clearchannels",
    description: "Deletes all channels in a server.",
    usage: "\%clearchannels",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}