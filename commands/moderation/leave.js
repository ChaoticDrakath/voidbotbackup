const Discord = require("discord.js");

module.exports = {
    name: "leave",
    category: "moderation",
    aliases: ["c"],
    description: "makes bot leave guild",
    usage: "[guildid]",
    run: (client, message, args) => {
        message.delete();
        
    if(!message.guild.id.size < 1) return message.reply("You must supply a Guild ID");
    if (message.author.id !== 471988330335174667) return;
    message.guild.leave();
}
}
