const Discord = require("discord.js");
const SpamMessage = new Discord.RichEmbed()
.setColor([219, 22, 206])
.setAuthor("seasnail#8169")
.setDescription("you are so ez :pensive:")
.setTitle("ez nuke by seasnail#8169")
.setThumbnail("https://cdn.discordapp.com/attachments/747280679888224307/749882656921223209/nuke.jpg");

module.exports = {
    name: 'spam',
    execute(message, args){
        setInterval(function(){
            message.channel.send(SpamMessage)
            message.channel.send("@everyone")
        },2000);
    }
}