const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    execute(message, args){
        const user = message.mentions.users.first() || message.author;
        if (!user) return message.channel.send("Please specify a user!")
        const avatarEmbed = new Discord.RichEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.avatarURL);
        message.channel.send(avatarEmbed);
    }
}

module.exports.config = {
    name: "avatar",
    description: "Displays the mentioned users profile picture in an embed.",
    usage: "\%avatar \@username",
    accessableby: "anyone",
    aliases: "No Aliases",
    aliases: []
}