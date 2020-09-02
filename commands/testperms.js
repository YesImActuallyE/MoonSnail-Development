const Discord = require("discord.js");

module.exports = {
    name: 'testperms',
    execute(message, args){
        message.channel.send("Test passed :smile:");
    }
}