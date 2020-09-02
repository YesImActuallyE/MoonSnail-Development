const Discord = require("discord.js");
const prefix = '%';

module.exports = {
    name: 'nickbot',
    execute(message, args){
        let nick = message.content.slice((prefix+"nickbot").length)
        if(!nick) return message.channel.send("Please specify a nickname!")
        message.guild.me.setNickname(nick)        
        message.channel.send("Updated bots nickname.");
    }
}