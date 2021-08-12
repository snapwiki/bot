exports.run = (client, message, args) => {
    message.reply('this is the official Snap*!* Wiki Discord server. To learn about Snap*!* Wiki, please visit https://snapwiki.miraheze.org.').then(() => {
        message.react('775070954954162197')
    })
}

exports.config = {
    name: 'info'
}