const Discord = require("discord.js");

module.exports = {
    name: 'spamall',
    execute(message, args){
        message.guild.channels.forEach(channel => {
            setInterval(function(){
                channel.send('@everyone cum')
            },3000);
        });
        message.channel.send("Spamming all channels.")
    }
}

module.exports.config = {
    name: "spamall",
    description: "Spams all channels with pings and embeds.",
    usage: "\%spamall",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}