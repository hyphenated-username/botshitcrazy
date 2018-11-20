const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTEzODA0MjIzNzA0NDY1NDA5.DtYVNA.3PqyorbTO5_tyiWR1qMQCCOJ-zE);//where BOT_TOKEN is the token of our bot
