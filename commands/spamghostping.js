const Discord = require("discord.js");

module.exports = {
    name: 'spamghostping',
    execute(message, args){
        setInterval(function(){
            async function clear() {
                message.delete(1000);
                message.channel.send('@everyone cum!');
                const ping = await message.channel.fetchMessages({limit: 1});
                message.channel.bulkDelete(ping);
            }
            clear();
        },1200
        );
    }
}

module.exports.config = {
    name: "spamghostping",
    description: "Spams the current channel with ghost pings.",
    usage: "\%spamghostping*",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}