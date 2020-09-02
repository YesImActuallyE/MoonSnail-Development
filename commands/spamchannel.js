const Discord = require("discord.js");
const SpamMessage = new Discord.RichEmbed()
                                .setColor([219, 22, 206])
                                .setAuthor("seasnail#8169")
                                .setDescription("you are so ez :pensive:")
                                .setTitle("ez nuke by seasnail#8169")
                                .setThumbnail("https://cdn.discordapp.com/attachments/747280679888224307/749882656921223209/nuke.jpg");

module.exports = {
    name: 'spamchannel',
    execute(message, args){
        var channel = message.mentions.channels.first();
        message.guild.channels.get(channel);
        message.channel.send("Spamming in " + channel)
        setInterval(function(){
            channel.send(SpamMessage)
            channel.send("@everyone")
        },2000);
    }
}

module.exports.config = {
    name: "spamchannel",
    description: "Spams a specific channel with pings and embeds.",
    usage: "\%spamchannel *\#channel*",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}

