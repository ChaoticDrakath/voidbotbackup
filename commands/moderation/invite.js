const Discord = require("discord.js");

module.exports = {
    name: "clear",
    category: "moderation",
    aliases: ["c"],
    description: "clears chat (max messages 99)",
    usage: "[amount]",
    run: (client, message, args) => {
        message.delete();
        
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=603517038375206923&permissions=8&scope=bot");
    }else message.channel.send("You don't have required permissions to access this command!");
}
}
