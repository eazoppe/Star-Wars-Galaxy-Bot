const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
  setInterval(function() {
      bot.user.setActivity('Protecting the Star Wars Galaxy');
  //Update every 1 seconds
  }, 1 * 1000);
  });


bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the The Protectors of Star Wars. Get ready to protect the Star Wars Galaxy")
});

bot.login(process.env.BOT_TOKEN);
