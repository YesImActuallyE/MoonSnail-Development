const Discord = require("discord.js");

module.exports = {
    name: 'ghostping',
    execute(message, args){
        message.channel.send('remind me to write this lol')
    }
}