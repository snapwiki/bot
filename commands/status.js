exports.run = (client, message, args) => {
    message.reply('live uptime statistics can be found here- https://snapwiki.github.io/SnapWikiUptime/.').then(() => {
        message.react('✅')
    })
}

exports.config = {
    name: 'status'
}