const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    execute(message, args){
        async function clear() {
            message.delete();
            const fetched = await message.channel.fetchMessages({limit: 99});
            message.channel.bulkDelete(fetched);
        }
        clear();
    }
}