exports.run = (client, message, args) => {
    message.reply('I am fully open source and licensed under the GNU General Public License Version 3.0! My source code can be found on GitHub- https://github.com/snapwiki/bot. I am hosted on Heroku.').then(() => {
        message.react('⚒️')
    })
}

exports.config = {
    name: 'source'
}