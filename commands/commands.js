const Discord = require("discord.js");
const prefix = '%';
const github = ("https://github.com/seasnail8169/MEE69.git")
const creator = ("seasnail8169")
const BotIcon = ("https://i.imgur.com/CeWKgpa.png")

module.exports = {
    name: 'commands',
    execute(message, args){
        const HelpMessage = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor(0x00AE86)
        .setDescription("**Avatar:** Displays mentioned users avatar in an embed. \n **Ban:** Bans mentioned user. \n **Banall:** Bans all bannable members. \n **Clearchannels:** Deletes all channels in the server. \n **Commands:** Displays this message. (Aliases: help). \n **Createchannels:** Creates a specified number of channels. \n **Cum:** :wink: \n **Ghostping:** Sends a everyone ping then deletes the message. \n **Kick:** Kicks mentioned user. \n **Leave:** Makes the bot leave the current server. \n **Maxchannels:** Creates text channels until the limit is reached. \n **Mute:** Mutes the mentioned user. \n **Nickbot:** Changes the bots nickname ini the current server. \n **Nickmass:** Changes all renameable members nicknames to the specified name. \n **Nuke:** Currently disabled to prevent me beinig banned by discord lol. \n **Prune:** Deletes a specified amount of messages in the current channel (Usage: %prune *number between 2 and 100*) \n **Purge:** Deletes all messages in the current channel. \n **Restart:** Restarts the bot, recommended after running most \"mass\" or \"all\" commands to stop the bot lagging or crashing. (Aliases: reload, r). \n **Spam:** Spams everyone pings in the current channel. \n **Spamall:** Spams everyone pings in all text channels. \n **Spamchannel:** Spams everyone pings in specified channel. (Usage: %spamchannel \#channel). \n **Spamghostping:** Spams ghost pings in the current channel. \n **Testperms:** Tests if you have permission to run commands with the bot. (Exceptions: cum, help, commands, test).")
        .setFooter('Created by seasnail8169', 'https://i.ibb.co/DtzjWZf/pfp.png');
        message.channel.send(HelpMessage)
    }
}

module.exports.config = {
    name: "commands",
    description: "Bans all bannable members in a server.",
    usage: "\%banall",
    accessableby: "Administrators",
    aliases: ["help"]
}