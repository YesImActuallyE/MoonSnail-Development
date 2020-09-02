const Discord = require("discord.js");

module.exports = {
    name: 'prune',
    execute(message, args){
        const amount = parseInt(args[0]);
            if (isNaN(amount)) {
                return message.reply('that doesn\'t seem to be a valid number.');
            } else if (amount < 2 || amount > 100) {
                return message.reply('you need to input a number between 2 and 100.');
            }
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('There was an error trying to prune messages in this channel!');
            });
        }
    }

    module.exports.config = {
        name: "prune",
        description: "Deletes a specified number of messages in the current channel.",
        usage: "\%prune *number from 2 - 100*",
        accessableby: "Administrators",
        noalias: "No Aliases",
        aliases: []
    }