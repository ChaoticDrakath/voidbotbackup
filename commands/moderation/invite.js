const Discord = require("discord.js");

module.exports = {
    name: "invite",
    category: "moderation",
    aliases: ["inv"],
    description: "sends bot invite link.",
    guildOnly: true,
    run: (client, message, args) => {
        message.delete();
        
        if (message.author.id === '471988330335174667') {
        message.member.send("Use this to invite me:\nhttps://discordapp.com/api/oauth2/authorize?client_id=603517038375206923&permissions=8&scope=bot");
    }else message.channel.send("You don't have required permissions to access this command!");
}
}
