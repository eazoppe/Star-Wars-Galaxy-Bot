const commando = require('discord.js-commando');
const Discord = require('discord.js');


class GroupsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'group',
            group: 'info',
            memberName: 'group',
            description: 'Shows The Roblox Group for Star Wars Galaxy'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("Groups of The Protectors of Star Wars.")
        .setDescription("Here are all the groups of The Protectors so far.")
        .addField("Main Group: https://web.roblox.com/my/groups.aspx?gid=4595981")
        .addField("Honor Guards: https://web.roblox.com/My/Groups.aspx?gid=4644079")
        .addField("Personal Guards: https://web.roblox.com/My/Groups.aspx?gid=4624081")
        .setColor(0x0ddbeb);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = GroupsCommand;