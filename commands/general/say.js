const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    category: 'general',
    description: 'Bot repeats what you tell it to.',
    usage: `say`,
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        message.delete()
        
        if (args.length < 1)
            return message.channel.send('You must specify something for the bot to repeat!').then(m => m.delete({timeout: 5000}));
            
        if (args[0].toLowerCase() === 'embed') {
            const embed = new MessageEmbed()
                .setColor(process.env.COLOR)
                .setDescription(args.slice(1).join(' '))

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(' '));
        }
    }
}