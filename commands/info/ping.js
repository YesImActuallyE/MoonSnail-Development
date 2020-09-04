const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'info',
    description: 'Returns bot and API latency in milliseconds.',
    usage: `ping`,
    run: async (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        const msg = await message.channel.send('🏓 Pinging...');

        const embed = new MessageEmbed()
        .setColor(process.env.COLOR)
        .setTitle('🏓 Pong!')
        .setDescription(`Bot Latency is **${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms** \nAPI Latency is **${Math.round(client.ws.ping)} ms**`);

        message.channel.send(embed);
    }
}