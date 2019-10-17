const Discord = require("discord.js");

module.exports = {
    name: "invite",
    category: "moderation",
    aliases: ["c"],
    description: "sends bot invite link.",
    run: (client, message, args) => {
        message.delete();
        
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
        message.member.send("https://discordapp.com/api/oauth2/authorize?client_id=603517038375206923&permissions=8&scope=bot");
    }else message.channel.send("You don't have required permissions to access this command!");
}
}
