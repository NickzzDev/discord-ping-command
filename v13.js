const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
    const ping = new Discord.MessageEmbed()
    .setDescription(`🏓 Pong! 🏓\n
    The Bot\'s Ping is \`${client.ws.ping}\` ping`)
    msg.reply({ embeds: [ping] })
}
