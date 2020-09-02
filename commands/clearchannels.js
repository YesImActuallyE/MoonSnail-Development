const Discord = require("discord.js");

module.exports = {
    name: 'clearchannels',
    execute(message, args){
        message.guild.channels.forEach(channel => {
            channel.delete()
        });
    }
}