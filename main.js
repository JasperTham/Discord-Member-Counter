const Discord = require('discord.js');

//The Discord bot Client
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const { fileURLToPath } = require('url');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//run online
client.on('ready' , () => {
    console.log('SGAccounts is Online!');
    memberCounter(Client);
    
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
    return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //naming commands
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } 
    else if (command == 'carousell') {
        client.commands.get('carousell').execute(message, args);

    }
     
}); 

//Give access or Log in to my Discord Application
client.login('ODQ4ODkwNjYxMjk3MzI0MDQz.YLTNCQ.Kt5EEU7QDW0MW3sUfil1AMjAr08')

