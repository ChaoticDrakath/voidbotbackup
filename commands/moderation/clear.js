const Discord = require("discord.js");

module.exports = {
    name: "clear",
    category: "moderation",
    aliases: ["c"],
    description: "clears chat (max messages 99)",
    usage: "[amount]",
    guildOnly: true,
    run: (client, message, args) => {
        message.delete();
        
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
    if(args[0])
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    })}else message .channel.send("You don't have required permissions to access this command!");
}
}
