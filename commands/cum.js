const Discord = require("discord.js");

module.exports = {
    name: 'cum',
    execute(message, args){
        return message.reply("nice load :wink: ")
    }
}

module.exports.config = {
    name: "cum",
    description: "Blows a huge load.",
    usage: "\%cum",
    accessableby: "Everyone",
    noalias: "No Aliases",
    aliases: []
}