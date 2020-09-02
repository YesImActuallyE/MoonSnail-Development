const Discord = require("discord.js");

module.exports = {
    name: 'testperms',
    execute(message, args){
        message.channel.send("Test passed :smile:");
    }
}

module.exports.config = {
    name: "testperms",
    description: "Tests if you have admin perms on a server.",
    usage: "\%testperms*",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}