const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    category: 'info',
    description: "Displays the mentioned users profile picture in an embed.",
    usage: "avatar \@username",
    run : async(client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        const user = message.mentions.users.first() || message.author;
        console.log(args[0])
        if (!user) return message.channel.send("Please specify a user!")
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setAuthor(user.username)
            .setImage(user.displayAvatarURL());
        message.channel.send(avatarEmbed);
    }
}