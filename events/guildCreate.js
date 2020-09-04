const mongoose = require('mongoose');
const Guild = require('../models/guild');
const Discord = require('discord.js')

module.exports = async (client, guild) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
    guild = new Guild({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name,
        prefix: process.env.PREFIX
    });

    guild.save()
    .then(result => console.log(result))
    .catch(err => console.error(err));

    console.log('I have joined a server called: ' + "!");

    guild.roles.create({
        data: {
          name: 'MEE69\'s Personal role',
          color: 'BLUE',
          permssions: '8',
        }
    });
    guild.roles.find(role => role.name === 'MEE69').delete();
};