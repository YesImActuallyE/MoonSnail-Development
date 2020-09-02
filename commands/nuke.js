const Discord = require("discord.js");

module.exports = {
    name: 'nuke',
    execute(message, args){
        message.channel.send("Disabled to stop me getting banned by discord lol.")
    }
}

module.exports.config = {
    name: "nuke",
    description: "Nothing, for now.",
    usage: "\%nuke",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}