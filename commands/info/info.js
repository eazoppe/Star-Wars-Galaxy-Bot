const commando = require('discord.js-commando');
const Discord = require('discord.js');
class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'Says some things about the bot and the Roblox group.'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("Info about Protector Bot")
        .setDescription("I am Protector Bot. I am made by eazoppe.")
        .addField("I was first made on 12/21/2018. I will be The Protectors of Star Wars Custom Discord bot. From the Owner of The Protectors of Star Wars, we hope you can help us grow and enjoy The Protectors of Star Wars.")
        .addField("The owner of The Protectors of Star Wars is MoguiLin. Eazoppe is only the group holder till MoguiLin get BC. I am a bot that is being worked on.")
        .addField("If you find any bugs with me then you should tell it to eazoppe.")
        .addField("Now you know a little more about this bot.")
        .setFooter("I am only to be used in The Protectors of Star Wars Discords. This bot is closed off for all other servers.")
        .setColor(0x0ac1ff);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = InfoCommand;

