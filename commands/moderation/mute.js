const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute a member",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Please mention the member to who you want to mute.")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("I'm not gonna mute you lol.");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("This server does not have role with the name `Muted`, please create one.")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("User is already muted")
    }

    user.roles.add(muterole)
    
    const mute = new Discord.MessageEmbed()
        .setColor(0x333333)
     .setAuthor(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    await message.channel.send(mute)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)    
  }
};