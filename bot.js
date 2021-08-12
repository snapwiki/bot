const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

//stores all commands
bot.commands = new Discord.Collection()

//=> search for events
fs.readdir('./events/', (err, files) => {
    const eventjs = files.filter(file => file.endsWith('.js'))
    eventjs.forEach(f => {
        const eventName = require(`./events/${f}`)
        const event = f.split('.')[0]
        bot.on(event, eventName.bind(null, bot))
    })
})

//=> seach for commands
fs.readdir('./commands/', (err, file) => {
    const filejs = file.filter(file => file.endsWith('.js'))
    filejs.forEach(f => {
        const pull = require(`./commands/${f}`)
        bot.commands.set(pull.config.name, pull)
    })
})

bot.login(process.env.DISCORD_TOKEN);
