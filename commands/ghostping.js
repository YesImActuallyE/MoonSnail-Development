const Discord = require("discord.js");

module.exports = {
    name: 'ghostping',
    execute(message, args){
        message.channel.send('remind me to write this lol')
    }
}

module.exports.config = {
    name: "ghostping",
    description: "Creates an everyone ping then deletes the message.",
    usage: "\%ghostping",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}