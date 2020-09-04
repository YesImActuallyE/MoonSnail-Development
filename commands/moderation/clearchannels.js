const Discord = require("discord.js");

module.exports = {
    name: "clearchannels",
    category: 'moderation',
    description: "Deletes all channels in the server.",
    usage: "clearchannels",
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if(member.hasPermission('ADMINISTRATOR')){
            message.guild.channels.cache.forEach(channel => {
                channel.delete()
            });
        }
        else {
            const noperms = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")
            message.channel.send(noperms);
        }
    }
}