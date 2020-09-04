const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'info',
    description: 'Displays bot help message.',
    usage: `help [commandName]`,
    run: async (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return helpMSG(client, message);
        }
    }
}

function helpMSG(client, message) {
    const embed = new MessageEmbed()
        .setColor(process.env.COLOR)
        .setTitle('Help')
        .setThumbnail(client.user.avatarURL())
        .setDescription(`For a full list of commands, please type \`${process.env.PREFIX}commands\` \n\nTo see more info about a specific command, please type \`${process.env.PREFIX}help <command>\` without the \`<>\``)
        .addField('About', "This bot is my first Discord.js bot and its still in early development so please report any issues to me through discord or the github!")
        .addField('Requirements', "By default the bot is given admin permissions but in order to get the full functionality of MEE69 please move the role to the top of the role list or give it another role that is higher that members, e.g \"bots\".")
        .addField('Links', "[MEE69 Discord Support Server](https://discord.com/invite/Pta3APY/)\n[Github](https://github.com/seasnail8169/MEE69-Development/)\n[Website](https://seasnail8169.github.io/MEE69-Development/)")
        .setFooter('Created by seasnail8169', 'https://i.ibb.co/DtzjWZf/pfp.png');
        message.channel.send(embed);
}

function getCMD(client, message, input) {
    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    let info = `No information found for command **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor('#ff0000').setDescription(info));
    }

    if (cmd.name) info = `**Command Name**: ${cmd.name}`
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`{a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter('<> = REQUIRED | [] = OPTIONAL')
    }
    if (cmd.usage2) info += `\n**Usage 2**: ${cmd.usage2}`;

    return message.channel.send(embed.setColor(process.env.COLOR).setDescription(info));
}