const Discord = require("discord.js");

module.exports = {
    name: 'leave',
    execute(message, args){
        message.guild.leave();
    }
}