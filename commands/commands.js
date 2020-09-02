const Discord = require("discord.js");
const prefix = '%';
const github = ("https://github.com/seasnail8169/MEE69-Development.git")
const creator = ("seasnail8169")
const BotIcon = ("https://i.imgur.com/CeWKgpa.png")

module.exports = {
    name: 'commands',
    execute(message, args){
        const HelpMessage = new Discord.RichEmbed()
        .setAuthor("MEE69", BotIcon)
        .setTitle("Commands")
        .setColor(0x00AE86)
        .setDescription("**Avatar:** Displays the mentioned users profile picture in an embed. \n **Ban:** Bans the mentioned user. \n **Clearchannels:** Deletes all channels in the server. \n **Commands:** Displays this message. (Aliases: help). \n **Createchannels:** Creates a specified number of channels. \n **Kick:** Kicks mentioned user. \n **Leave:** Makes the bot leave the current server. \n **Mute:** Mutes the mentioned user. \n **Nickbot:** Changes the bots nickname in the current server. \n **Nickmass:** Changes all renameable members nicknames to the specified name. \n **Prune:** Deletes a specified amount of messages in the current channel (Usage: %prune *number between 2 and 100*) \n **Purge:** Deletes all messages in the current channel. \n **Restart:** Restarts the bot, recommended after running most \"mass\" or \"all\" commands to stop the bot lagging or crashing. (Aliases: reload, r). \n **Testperms:** Tests if you have permission to run commands with the bot. (Exceptions: cum, help, commands, test)")
        .setFooter('Created by seasnail8169', 'https://i.ibb.co/DtzjWZf/pfp.png');
        message.channel.send(HelpMessage)
    }
}

module.exports.config = {
    name: "commands",
    description: "Displays this message.",
    usage: "\%banall",
    accessableby: "Administrators",
    aliases: ["help"]
}