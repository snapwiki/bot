exports.run = (client, message, args) => {
    message.reply('type !help for help with my commands, !incident-history for history of incidents in the past 30 days, !source for link to my source code and !info for information about this server. There are two other hidden commands, too. 😉').then(() => {
        message.react('ℹ️')
    })
}

exports.config = {
    name: 'help'
}