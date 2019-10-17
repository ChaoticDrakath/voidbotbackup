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
    if (message.author.id !== ops.ownerID) return;
    message.guild.leave();
        .then(g => console.log(`Left the guild ${g}`));
         .catch(console.error);
}
}
