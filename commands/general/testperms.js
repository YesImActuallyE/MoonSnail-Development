const Discord = require("discord.js");
const testpassed = new Discord.MessageEmbed()
.setColor(0x333333)
.setAuthor("Test passed 😄!")
const testfailed = new Discord.MessageEmbed()
.setColor(0x333333)
.setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")

module.exports = {
    name: "testperms",
    category: 'general',
    description: "Tests if you have admin perms on a server.",
    usage: "testperms*",
    run: (client, message, args) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send(testpassed);
        }
        else {
            const noperms = new Discord.MessageEmbed()
                .setColor(0x333333)
                .setAuthor("I'm sorry you don\'t have admin permissions to run that command 😔")
            message.channel.send(noperms);
        }
    }
}