const mongoose = require('mongoose');
const Guild = require('../models/guild');

module.exports = async (client, guild) => {
        console.log("ACTIVITY: " + message.author.username + " ran the command: " + message.content)
    Guild.findOneAndDelete({
        guildID: guild.id
    }, (err, res) => {
        if(err) console.error(err)
        console.log('I have been removed from a server!');
    });
};