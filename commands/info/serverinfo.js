const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    category: "info",
    description: "Sends server information.",
    usage: "[command | alias]",
    run: async (client, message, args) => {

           
if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {

            let sicon = message.guild.iconURL;
            let serverembed = new Discord.RichEmbed()
            .setDescription("Server Info")
            .setColor("#980aab")
            .setThumbnail(sicon)
            .addField("Server Name", message.guild.name)
            .addField("Created On", message.guild.createdAt)
            .addField("Your join date", message.member.joinedAt)
            .addField("Total Members", message.guild.memberCount);
        
            return message.channel.send(serverembed);
           }else message .channel.send("You don't have required permissions to access this command!");
}

}
