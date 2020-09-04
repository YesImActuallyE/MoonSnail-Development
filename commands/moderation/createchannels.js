const Discord = require("discord.js");
const client = new Discord.Client();
const newChannelName = ("newchannel");

module.exports = {
    name: "createchannels",
    category: 'moderation',
    description: "Creates a specified number of channels.",
    usage: "createchannels *number from 2 - 499*",
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const amount = parseInt(args[0]);
            if (isNaN(amount)) {
                return message.reply('that\'s not a valid number.');
            } else if (amount < 2 || amount > 499) {
                return message.reply('you need to input a number between 2 and 100.');
            }
            var times = amount;
            let counter = 1;
            for(var i=0; i < times; i++){
                message.guild.channels.create((newChannelName + " " + counter))
                counter++;
            }
            console.log("Created " + amount + " new channels!")    
        }
        else {
            const noperms = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")
            message.channel.send(noperms);
        }
    }
}