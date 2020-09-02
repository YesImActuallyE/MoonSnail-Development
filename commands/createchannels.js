const Discord = require("discord.js");
const client = new Discord.Client();
const newChannelName = ("newchannel");

module.exports = {
    name: 'createchannels',
    execute(message, args){
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply('that\'s not a valid number.');
        } else if (amount < 2 || amount > 499) {
            return message.reply('you need to input a number between 2 and 100.');
        }
        var times = amount;
        let counter = 1;
        for(var i=0; i < times; i++){
            message.guild.createChannel((newChannelName + " " + counter))
            counter++;
        }
        console.log("Amount of channels: " + amount)
    }
}

module.exports.config = {
    name: "createchannels",
    description: "Creates a specified number of channels.",
    usage: "\%createchannels *number from 2 - 499*",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}
