const commando = require('discord.js-commando');

class HelloCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hello',
            group: 'simple',
            memberName: 'hello',
            description: 'Says hello'
        });
    }

    async run(message, args)
    {
        message.reply("Hello, I am Star Wars Galaxy Bot. I am made by eazoppe#9471.");
    }
}

module.exports = HelloCommand;